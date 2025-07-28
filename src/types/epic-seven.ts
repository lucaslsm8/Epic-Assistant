// Epic Seven API Types
export interface Hero {
  id: string;
  name: string;
  rarity: 3 | 4 | 5;
  element: Element;
  role: Role;
  zodiac: Zodiac;
  stats: HeroStats;
  skills: Skill[];
  builds?: Build[];
  awakening?: Awakening[];
  memoryImprint?: MemoryImprint;
  exclusiveEquipment?: ExclusiveEquipment[];
  camping?: CampingStats;
  tierData?: TierData;
  rtaData?: RTAData;
  // New expanded properties
  image: string;
  description: string;
  story: string;
  isML: boolean; // Moonlight/Dark variant
  baseHero?: string; // For ML heroes, reference to base hero
  releaseDate?: string;
  specialty?: string;
  tags: string[]; // e.g., ['farmer', 'cleaver', 'bruiser']
  difficulty: 'Easy' | 'Medium' | 'Hard';
  usage: {
    pve: number; // 0-10 rating
    pvp: number; // 0-10 rating
    rta: number; // 0-10 rating
    guildWar: number; // 0-10 rating
  };
  strengths: string[];
  weaknesses: string[];
  synergies: string[]; // Hero IDs that work well with this hero
  counters: string[]; // Hero IDs that counter this hero
}

export interface Artifact {
  id: string;
  name: string;
  rarity: 3 | 4 | 5;
  role?: Role;
  stats: ArtifactStats;
  description: string;
  maxLevel: number;
  skills: ArtifactSkill[];
  // New properties
  image: string;
  exclusiveFor?: string[]; // Hero IDs this artifact is best for
  usage: {
    pve: number;
    pvp: number;
    rta: number;
  };
}

// Enums
export enum Element {
  FIRE = 'fire',
  ICE = 'ice', 
  EARTH = 'earth',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum Role {
  KNIGHT = 'knight',
  WARRIOR = 'warrior',
  THIEF = 'thief',
  RANGER = 'ranger',
  MAGE = 'mage',
  SOUL_WEAVER = 'soul_weaver'
}

export enum Zodiac {
  ARIES = 'aries',
  TAURUS = 'taurus',
  GEMINI = 'gemini',
  CANCER = 'cancer',
  LEO = 'leo',
  VIRGO = 'virgo',
  LIBRA = 'libra',
  SCORPIO = 'scorpio',
  SAGITTARIUS = 'sagittarius',
  CAPRICORN = 'capricorn',
  AQUARIUS = 'aquarius',
  PISCES = 'pisces'
}

// Stats
export interface HeroStats {
  baseStats: BaseStats;
  maxStats: BaseStats;
  awakening: Partial<BaseStats>;
}

export interface BaseStats {
  attack: number;
  health: number;
  defense: number;
  speed: number;
  critChance?: number;
  critDamage?: number;
  effectiveness?: number;
  effectResistance?: number;
}

export interface ArtifactStats {
  attack?: number;
  health?: number;
  defense?: number;
}

// Skills
export interface Skill {
  id: string;
  name: string;
  description: string;
  cooldown?: number;
  soulBurn?: SoulBurn;
  effects: SkillEffect[];
  enhancements: SkillEnhancement[];
  multipliers?: SkillMultiplier[];
}

export interface SoulBurn {
  cost: number;
  effect: string;
}

export interface SkillEffect {
  type: EffectType;
  value?: number;
  chance?: number;
  duration?: number;
  target: TargetType;
}

export enum EffectType {
  DAMAGE = 'damage',
  HEAL = 'heal',
  BUFF = 'buff',
  DEBUFF = 'debuff',
  DISPEL = 'dispel',
  CLEANSE = 'cleanse',
  SILENCE = 'silence',
  STUN = 'stun',
  SLEEP = 'sleep',
  PROVOKE = 'provoke',
  DECREASE_ATTACK = 'decrease_attack',
  DECREASE_DEFENSE = 'decrease_defense',
  INCREASE_ATTACK = 'increase_attack',
  INCREASE_DEFENSE = 'increase_defense',
  // Add more as needed
}

export enum TargetType {
  SELF = 'self',
  SINGLE_ENEMY = 'single_enemy',
  ALL_ENEMIES = 'all_enemies',
  SINGLE_ALLY = 'single_ally',
  ALL_ALLIES = 'all_allies',
  RANDOM_ENEMY = 'random_enemy',
  LOWEST_HP_ALLY = 'lowest_hp_ally'
}

export interface SkillEnhancement {
  level: number;
  effect: string;
  cost: EnhancementCost;
}

export interface EnhancementCost {
  gold: number;
  materials: Material[];
}

export interface Material {
  name: string;
  quantity: number;
}

export interface SkillMultiplier {
  stat: keyof BaseStats;
  multiplier: number;
  flatBonus?: number;
}

// Builds
export interface Build {
  id: string;
  type: BuildType;
  sets: GearSet[];
  mainStats: MainStats;
  subStats: SubStats;
  artifact?: string;
  usage: BuildUsage;
  winRate?: number;
  popularity?: number;
  author?: string;
  notes?: string;
}

export enum BuildType {
  SPEED = 'speed',
  DAMAGE = 'damage',
  TANK = 'tank',
  SUPPORT = 'support',
  COUNTER = 'counter',
  LIFESTEAL = 'lifesteal'
}

export interface GearSet {
  name: GearSetName;
  pieces: number;
}

export enum GearSetName {
  SPEED = 'speed',
  ATTACK = 'attack',
  DEFENSE = 'defense',
  HEALTH = 'health',
  CRITICAL = 'critical',
  HIT = 'hit',
  DESTRUCTION = 'destruction',
  LIFESTEAL = 'lifesteal',
  COUNTER = 'counter',
  RESIST = 'resist',
  UNITY = 'unity',
  RAGE = 'rage',
  IMMUNITY = 'immunity',
  PENETRATION = 'penetration',
  REVENGE = 'revenge',
  INJURY = 'injury'
}

export interface MainStats {
  weapon: 'attack';
  helmet: 'health';
  armor: 'defense';
  necklace: 'attack' | 'health' | 'defense' | 'critChance' | 'critDamage';
  ring: 'attack' | 'health' | 'defense' | 'effectiveness' | 'effectResistance';
  boots: 'attack' | 'health' | 'defense' | 'speed';
}

export interface SubStats {
  attack: StatRange;
  health: StatRange;
  defense: StatRange;
  speed: StatRange;
  critChance: StatRange;
  critDamage: StatRange;
  effectiveness: StatRange;
  effectResistance: StatRange;
}

export interface StatRange {
  min: number;
  max: number;
  priority: number; // 1-8, 1 being highest priority
}

export interface BuildUsage {
  pve?: string[];
  pvp?: string[];
  arena?: boolean;
  guildWar?: boolean;
  rta?: boolean;
}

// Awakening & Memory Imprint
export interface Awakening {
  level: number;
  materials: Material[];
  stats: Partial<BaseStats>;
  skillUpgrade?: string;
}

export interface MemoryImprint {
  release: ImplantBonus[];
  concentration: ImplantBonus[];
}

export interface ImplantBonus {
  rank: 'B' | 'A' | 'S' | 'SS' | 'SSS';
  stat: keyof BaseStats;
  value: number;
  isPercentage: boolean;
}

export interface ExclusiveEquipment {
  id: string;
  name: string;
  stats: Partial<BaseStats>;
  skillUpgrade: string;
  materials: Material[];
}

export interface CampingStats {
  topics: string[];
  stats: {
    cheer: number;
    breath: number;
    chemistry: number;
  };
}

// Tier & Meta Data
export interface TierData {
  pvp: {
    arena: TierRank;
    guildWar: TierRank;
    rta: TierRank;
  };
  pve: {
    wyvern: TierRank;
    golem: TierRank;
    banshee: TierRank;
    azimanak: TierRank;
    caides: TierRank;
    labyrinth: TierRank;
    abyss: TierRank;
  };
  lastUpdated: string;
}

export enum TierRank {
  SS = 'SS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export interface RTAData {
  pickRate: number;
  winRate: number;
  banRate: number;
  rank: RTARank;
  stats: RTAStats;
  synergies: Hero[];
  counters: Hero[];
}

export enum RTARank {
  MASTER = 'master',
  CHALLENGER = 'challenger', 
  CHAMPION = 'champion',
  EMPEROR = 'emperor',
  LEGEND = 'legend'
}

export interface RTAStats extends BaseStats {
  sets: GearSet[];
  artifacts: string[];
}

// Artifact Skills
export interface ArtifactSkill {
  name: string;
  description: string;
  maxLevel: number;
  scalingType: 'linear' | 'diminishing';
  values: number[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Search & Filter Types
export interface HeroFilters {
  element?: Element[];
  role?: Role[];
  rarity?: number[];
  zodiac?: Zodiac[];
  tier?: TierRank[];
  name?: string;
}

export interface ArtifactFilters {
  role?: Role[];
  rarity?: number[];
  name?: string;
}

// Team Builder Types
export interface Team {
  id: string;
  name: string;
  heroes: Hero[];
  artifacts: (Artifact | null)[];
  purpose: TeamPurpose;
  winRate?: number;
  author?: string;
  notes?: string;
}

export enum TeamPurpose {
  ARENA_OFFENSE = 'arena_offense',
  ARENA_DEFENSE = 'arena_defense',
  GUILD_WAR_OFFENSE = 'guild_war_offense',
  GUILD_WAR_DEFENSE = 'guild_war_defense',
  RTA = 'rta',
  WYVERN = 'wyvern',
  GOLEM = 'golem',
  BANSHEE = 'banshee',
  AZIMANAK = 'azimanak',
  CAIDES = 'caides'
}

// Arena Scanner Types (AI)
export interface ArenaTeam {
  heroes: Hero[];
  threat: ThreatLevel;
  counters: CounterSuggestion[];
  analysis: TeamAnalysis;
}

export enum ThreatLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  EXTREME = 'extreme'
}

export interface CounterSuggestion {
  team: Team;
  winRate: number;
  strategy: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TeamAnalysis {
  strengths: string[];
  weaknesses: string[];
  keyThreats: Hero[];
  strategy: string;
} 