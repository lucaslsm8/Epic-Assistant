'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Search, 
  Filter,
  Star,
  Users,
  Crown,
  Zap,
  Shield,
  Sword,
  Heart,
  ChevronDown,
  SortAsc,
  Grid3X3,
  List,
  Eye,
  Bookmark
} from 'lucide-react';
import Link from 'next/link';
import { 
  heroDatabase, 
  searchHeroes, 
  filterHeroesByElement,
  filterHeroesByRole,
  filterHeroesByRarity,
  filterHeroesByML,
  sortHeroes,
  getElementColor,
  getRoleIcon
} from '@/lib/heroDatabase';
import { Hero, Element, Role, TierRank } from '@/types/epic-seven';
import HeroImage from '@/components/HeroImage';

export default function HeroesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [showMLOnly, setShowMLOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>('tier');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search heroes
  const filteredHeroes = useMemo(() => {
    let heroes = heroDatabase;
    
    // Apply filters
    heroes = searchHeroes(heroes, searchTerm);
    heroes = filterHeroesByElement(heroes, selectedElement);
    heroes = filterHeroesByRole(heroes, selectedRole);
    heroes = filterHeroesByRarity(heroes, selectedRarity);
    heroes = filterHeroesByML(heroes, showMLOnly);
    
    // Sort
    heroes = sortHeroes(heroes, sortBy);
    
    return heroes;
  }, [searchTerm, selectedElement, selectedRole, selectedRarity, showMLOnly, sortBy]);

  const elements = [
    { id: 'all', name: 'All Elements', color: 'from-epic-gold to-epic-gold-dim' },
    { id: Element.FIRE, name: 'Fire', color: 'from-red-500 to-orange-500' },
    { id: Element.ICE, name: 'Ice', color: 'from-blue-400 to-cyan-400' },
    { id: Element.EARTH, name: 'Earth', color: 'from-green-500 to-emerald-500' },
    { id: Element.LIGHT, name: 'Light', color: 'from-yellow-300 to-amber-400' },
    { id: Element.DARK, name: 'Dark', color: 'from-purple-500 to-violet-600' }
  ];

  const roles = [
    { id: 'all', name: 'All Roles', icon: Users },
    { id: Role.KNIGHT, name: 'Knight', icon: Shield },
    { id: Role.WARRIOR, name: 'Warrior', icon: Sword },
    { id: Role.THIEF, name: 'Thief', icon: Zap },
    { id: Role.RANGER, name: 'Ranger', icon: Eye },
    { id: Role.MAGE, name: 'Mage', icon: Crown },
    { id: Role.SOUL_WEAVER, name: 'Soul Weaver', icon: Heart }
  ];

  const rarities = [
    { id: 'all', name: 'All ★' },
    { id: '5', name: '5★' },
    { id: '4', name: '4★' },
    { id: '3', name: '3★' }
  ];

  const sortOptions = [
    { id: 'tier', name: 'Tier (Highest First)' },
    { id: 'name', name: 'Name (A-Z)' },
    { id: 'rarity', name: 'Rarity (Highest First)' },
    { id: 'element', name: 'Element' }
  ];

  const getTierColor = (tier?: TierRank): string => {
    switch (tier) {
      case TierRank.SS:
        return 'text-yellow-400 bg-yellow-400/20';
      case TierRank.S:
        return 'text-red-400 bg-red-400/20';
      case TierRank.A:
        return 'text-blue-400 bg-blue-400/20';
      case TierRank.B:
        return 'text-green-400 bg-green-400/20';
      case TierRank.C:
        return 'text-gray-400 bg-gray-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getUsageColor = (value: number): string => {
    if (value >= 9) return 'text-green-400';
    if (value >= 7) return 'text-yellow-400';
    if (value >= 5) return 'text-orange-400';
    return 'text-red-400';
  };

  const HeroCard = ({ hero }: { hero: Hero }) => (
    <Link
      href={`/heroes/${hero.id}`}
      className="group relative bg-gradient-to-br from-epic-secondary/50 to-epic-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-epic-gold/30 hover:scale-[1.02] transition-all duration-300"
    >
      {/* Hero Image Container */}
      <div className="relative h-40 bg-gradient-to-br from-epic-gold/10 to-epic-gold-dim/10">
        <HeroImage
          heroId={hero.id}
          heroName={hero.name}
          role={hero.role}
          isML={hero.isML}
          className="w-full h-full"
          iconSize="text-5xl"
        />
        
        {/* Top Left - Element Badge */}
        <div className={`absolute top-2 left-2 w-8 h-8 bg-gradient-to-br ${getElementColor(hero.element)} rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 backdrop-blur-sm`}>
          <span className="text-xs font-bold text-white drop-shadow-sm">
            {hero.element.charAt(0).toUpperCase()}
          </span>
        </div>
        
        {/* Top Right - ML Badge */}
        {hero.isML && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
            ML
          </div>
        )}
        
        {/* Bottom Left - Tier Badge */}
        <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-lg text-xs font-bold ${getTierColor(hero.tierData?.pvp.arena)} border border-white/20 bg-black/50 backdrop-blur-sm`}>
          {hero.tierData?.pvp.arena || 'C'}
        </div>
        
        {/* Bottom Right - Rarity Stars */}
        <div className="absolute bottom-2 right-2 flex space-x-0.5 bg-black/50 backdrop-blur-sm rounded-lg px-1 py-0.5">
          {Array.from({ length: hero.rarity }, (_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current drop-shadow-sm" />
          ))}
        </div>
      </div>
      
      {/* Hero Info */}
      <div className="p-4 space-y-3">
        {/* Name and Role */}
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white group-hover:text-epic-gold transition-colors duration-200 truncate">
            {hero.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs text-epic-text-secondary capitalize">
              {hero.role.replace('_', ' ')}
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-epic-text-tertiary">PvE:</span>
              <span className={`text-xs font-medium ${getUsageColor(hero.usage.pve)}`}>{hero.usage.pve}</span>
            </div>
          </div>
        </div>
        
        {/* Usage Stats */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1">
            <span className="text-epic-text-tertiary">PvP:</span>
            <span className={`font-medium ${getUsageColor(hero.usage.pvp)}`}>{hero.usage.pvp}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-epic-text-tertiary">ID:</span>
            <span className="text-epic-text-secondary font-mono">{hero.id}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  const HeroListItem = ({ hero }: { hero: Hero }) => (
    <Link
      href={`/heroes/${hero.id}`}
      className="group bg-gradient-to-r from-epic-secondary/50 to-epic-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-epic-gold/30 hover:bg-white/5 transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        {/* Hero Avatar */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-xl overflow-hidden flex-shrink-0">
          <HeroImage
            heroId={hero.id}
            heroName={hero.name}
            role={hero.role}
            isML={hero.isML}
            className="w-full h-full"
            iconSize="text-2xl"
          />
          
          {/* ML Badge */}
          {hero.isML && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
              <Crown className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Hero Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-epic-gold transition-colors duration-200 truncate">
              {hero.name}
            </h3>
            
            {/* Element Badge */}
            <div className={`w-6 h-6 bg-gradient-to-br ${getElementColor(hero.element)} rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-xs font-bold text-white">
                {hero.element.charAt(0).toUpperCase()}
              </span>
            </div>

            {/* Rarity Stars */}
            <div className="flex space-x-0.5 flex-shrink-0">
              {Array.from({ length: hero.rarity }, (_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-epic-text-secondary">
              <span className="capitalize">{hero.role.replace('_', ' ')}</span>
              <span>•</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${getTierColor(hero.tierData?.pvp.arena)}`}>
                {hero.tierData?.pvp.arena || 'C'} Tier
              </span>
            </div>
            
            {/* Usage Stats */}
            <div className="flex items-center space-x-3 text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-epic-text-tertiary">PvE:</span>
                <span className={`font-medium ${getUsageColor(hero.usage.pve)}`}>{hero.usage.pve}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-epic-text-tertiary">PvP:</span>
                <span className={`font-medium ${getUsageColor(hero.usage.pvp)}`}>{hero.usage.pvp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <Layout>
      <div className="container-epic py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-2">
            <Users className="w-4 h-4 text-epic-gold" />
            <span className="text-sm font-medium text-white">Heroes Database</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Epic Seven <span className="text-gradient">Heroes</span>
          </h1>
          
          <p className="text-xl text-epic-text-secondary max-w-3xl mx-auto">
            Comprehensive database of all Epic Seven heroes with detailed stats, builds, and tier rankings.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-epic-text-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search heroes by name, tags, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-epic-secondary border border-white/10 rounded-xl text-white placeholder-epic-text-secondary focus:outline-none focus:border-epic-gold focus:ring-1 focus:ring-epic-gold"
            />
          </div>

          {/* Filter Toggle and View Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary inline-flex items-center space-x-2 px-4 py-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-epic-gold text-black' 
                      : 'bg-white/10 text-epic-text-secondary hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-epic-gold text-black' 
                      : 'bg-white/10 text-epic-text-secondary hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <div className="text-sm text-epic-text-secondary">
                {filteredHeroes.length} heróis encontrados
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {/* Element Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Element</label>
                <select
                  value={selectedElement}
                  onChange={(e) => setSelectedElement(e.target.value)}
                  className="w-full p-2 bg-epic-secondary border border-white/10 rounded-lg text-white focus:outline-none focus:border-epic-gold"
                >
                  {elements.map((element) => (
                    <option key={element.id} value={element.id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Role Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Role</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 bg-epic-secondary border border-white/10 rounded-lg text-white focus:outline-none focus:border-epic-gold"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rarity Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Rarity</label>
                <select
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                  className="w-full p-2 bg-epic-secondary border border-white/10 rounded-lg text-white focus:outline-none focus:border-epic-gold"
                >
                  {rarities.map((rarity) => (
                    <option key={rarity.id} value={rarity.id}>
                      {rarity.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 bg-epic-secondary border border-white/10 rounded-lg text-white focus:outline-none focus:border-epic-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* ML Toggle */}
              <div className="md:col-span-2 lg:col-span-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMLOnly}
                    onChange={(e) => setShowMLOnly(e.target.checked)}
                    className="w-4 h-4 text-epic-gold bg-epic-secondary border-white/10 rounded focus:ring-epic-gold focus:ring-2"
                  />
                  <span className="text-white">Show Moonlight Heroes Only</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Heroes Grid */}
        {filteredHeroes.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4"
            : "space-y-3"
          }>
            {filteredHeroes.map((hero) => (
              viewMode === 'grid' ? (
                <HeroCard key={hero.id} hero={hero} />
              ) : (
                <HeroListItem key={hero.id} hero={hero} />
              )
            ))}
          </div>
        ) : (
          <div className="glass-card text-center py-16">
            <Users className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Heroes Found</h3>
            <p className="text-epic-text-secondary">
              Try adjusting your search terms or filters to find heroes.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
} 