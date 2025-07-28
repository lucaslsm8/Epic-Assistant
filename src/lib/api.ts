import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { 
  Hero, 
  Artifact, 
  HeroFilters, 
  ArtifactFilters,
  RTAData,
  TierData 
} from '@/types/epic-seven';

// API Configuration
const EPIC7DB_BASE_URL = 'https://api.epicsevendb.com';
const REQUEST_TIMEOUT = 10000;
const MAX_RETRIES = 3;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface MetaStatistics {
  totalHeroes: number;
  totalArtifacts: number;
  lastUpdated: string;
  popularBuilds: number;
}

interface PopularBuild {
  id: string;
  heroId: string;
  type: string;
  winRate: number;
  popularity: number;
}

interface CurrentBanner {
  id: string;
  type: 'covenant' | 'mystic' | 'limited';
  featuredHero?: Hero;
  featuredArtifact?: Artifact;
  startDate: string;
  endDate: string;
}

class Epic7API {
  private client: AxiosInstance;
  private cache: Map<string, CacheEntry<unknown>> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.client = axios.create({
      baseURL: EPIC7DB_BASE_URL,
      timeout: REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    // Request interceptor for retry logic
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const config = error.config;
        
        if (!config || config.retryCount >= MAX_RETRIES) {
          return Promise.reject(error);
        }

        config.retryCount = (config.retryCount || 0) + 1;
        
        // Exponential backoff
        const delay = Math.pow(2, config.retryCount) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        
        return this.client.request(config);
      }
    );
  }

  // Cache utilities
  private getCacheKey(endpoint: string, params?: Record<string, unknown>): string {
    const paramString = params ? JSON.stringify(params) : '';
    return `${endpoint}${paramString}`;
  }

  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!cached) return null;
    
    const isExpired = Date.now() - cached.timestamp > this.CACHE_TTL;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  private setCache<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  // Generic API call with caching
  private async apiCall<T>(
    endpoint: string, 
    params?: Record<string, unknown>,
    useCache = true
  ): Promise<T> {
    const cacheKey = this.getCacheKey(endpoint, params);
    
    if (useCache) {
      const cached = this.getFromCache<T>(cacheKey);
      if (cached) return cached;
    }

    try {
      const response: AxiosResponse<T> = await this.client.get(endpoint, { params });
      
      if (useCache) {
        this.setCache(cacheKey, response.data);
      }
      
      return response.data;
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
  }

  // Heroes API
  async getHeroes(filters?: HeroFilters): Promise<Hero[]> {
    const params = this.buildHeroParams(filters);
    return this.apiCall<Hero[]>('/heroes', params);
  }

  async getHero(id: string): Promise<Hero> {
    return this.apiCall<Hero>(`/heroes/${id}`);
  }

  async searchHeroes(query: string): Promise<Hero[]> {
    return this.apiCall<Hero[]>('/heroes/search', { q: query });
  }

  // Artifacts API
  async getArtifacts(filters?: ArtifactFilters): Promise<Artifact[]> {
    const params = this.buildArtifactParams(filters);
    return this.apiCall<Artifact[]>('/artifacts', params);
  }

  async getArtifact(id: string): Promise<Artifact> {
    return this.apiCall<Artifact>(`/artifacts/${id}`);
  }

  async searchArtifacts(query: string): Promise<Artifact[]> {
    return this.apiCall<Artifact[]>('/artifacts/search', { q: query });
  }

  // Meta & Analytics API
  async getRTAData(heroId: string, rank?: string): Promise<RTAData> {
    const params = rank ? { rank } : undefined;
    return this.apiCall<RTAData>(`/rta/${heroId}`, params);
  }

  async getTierList(): Promise<TierData[]> {
    return this.apiCall<TierData[]>('/tier-list');
  }

  async getMetaStatistics(): Promise<MetaStatistics> {
    return this.apiCall<MetaStatistics>('/meta/statistics');
  }

  // Popular builds from community (Fribbels data)
  async getPopularBuilds(heroId: string): Promise<PopularBuild[]> {
    return this.apiCall<PopularBuild[]>(`/builds/${heroId}`);
  }

  // Current banners and rotations
  async getCurrentBanners(): Promise<CurrentBanner[]> {
    return this.apiCall<CurrentBanner[]>('/banners/current', undefined, false); // Don't cache banners
  }

  // Filter builders
  private buildHeroParams(filters?: HeroFilters): Record<string, string> | undefined {
    if (!filters) return undefined;
    
    const params: Record<string, string> = {};
    
    if (filters.element?.length) params.element = filters.element.join(',');
    if (filters.role?.length) params.role = filters.role.join(',');
    if (filters.rarity?.length) params.rarity = filters.rarity.join(',');
    if (filters.zodiac?.length) params.zodiac = filters.zodiac.join(',');
    if (filters.tier?.length) params.tier = filters.tier.join(',');
    if (filters.name) params.name = filters.name;
    
    return Object.keys(params).length > 0 ? params : undefined;
  }

  private buildArtifactParams(filters?: ArtifactFilters): Record<string, string> | undefined {
    if (!filters) return undefined;
    
    const params: Record<string, string> = {};
    
    if (filters.role?.length) params.role = filters.role.join(',');
    if (filters.rarity?.length) params.rarity = filters.rarity.join(',');
    if (filters.name) params.name = filters.name;
    
    return Object.keys(params).length > 0 ? params : undefined;
  }

  // Cache management
  clearCache(): void {
    this.cache.clear();
  }

  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Create singleton instance
export const api = new Epic7API();

// React Query keys for better cache invalidation
export const queryKeys = {
  heroes: ['heroes'] as const,
  hero: (id: string) => ['heroes', id] as const,
  searchHeroes: (query: string) => ['heroes', 'search', query] as const,
  
  artifacts: ['artifacts'] as const,
  artifact: (id: string) => ['artifacts', id] as const,
  searchArtifacts: (query: string) => ['artifacts', 'search', query] as const,
  
  rtaData: (heroId: string, rank?: string) => ['rta', heroId, rank] as const,
  tierList: ['tier-list'] as const,
  metaStats: ['meta', 'statistics'] as const,
  
  builds: (heroId: string) => ['builds', heroId] as const,
  banners: ['banners', 'current'] as const,
};

// Error types
export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Utility functions
export const isValidHeroId = (id: string): boolean => {
  return /^[a-zA-Z0-9-_]+$/.test(id) && id.length > 0;
};

export const isValidArtifactId = (id: string): boolean => {
  return /^[a-zA-Z0-9-_]+$/.test(id) && id.length > 0;
};

// Mock data for development (remove in production)
export const mockHeroes: Hero[] = [];
export const mockArtifacts: Artifact[] = []; 