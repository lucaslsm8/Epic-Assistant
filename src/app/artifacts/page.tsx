'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Shield, 
  Search,
  Filter,
  Star,
  Zap,
  Target,
  Heart,
  Sword
} from 'lucide-react';

interface Artifact {
  id: string;
  name: string;
  rarity: 3 | 4 | 5;
  type: 'weapon' | 'armor' | 'accessory';
  tier: 'S+' | 'S' | 'A' | 'B' | 'C';
  effect: string;
}

export default function ArtifactsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');

  const artifacts: Artifact[] = [
    {
      id: 'portrait-of-the-saviors',
      name: 'Portrait of the Saviors',
      rarity: 5,
      type: 'weapon',
      tier: 'S+',
      effect: 'Increases Attack and Combat Readiness when ally is defeated'
    },
    {
      id: 'coin-of-ancient-memory',
      name: 'Coin of Ancient Memory',
      rarity: 5,
      type: 'accessory',
      tier: 'S',
      effect: 'Dual Attack chance increase and Combat Readiness boost'
    },
    {
      id: 'sword-of-ezera',
      name: 'Sword of Ezera',
      rarity: 5,
      type: 'weapon',
      tier: 'A',
      effect: 'Attack increase and speed boost at battle start'
    }
  ];

  const types = [
    { id: 'all', name: 'All Types', icon: Shield },
    { id: 'weapon', name: 'Weapons', icon: Sword },
    { id: 'armor', name: 'Armor', icon: Shield },
    { id: 'accessory', name: 'Accessories', icon: Star }
  ];

  const filteredArtifacts = artifacts.filter(artifact => {
    const matchesSearch = artifact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || artifact.type === selectedType;
    const matchesRarity = selectedRarity === 'all' || artifact.rarity.toString() === selectedRarity;
    
    return matchesSearch && matchesType && matchesRarity;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S+': return 'from-epic-gold to-yellow-400';
      case 'S': return 'from-blue-500 to-cyan-500';
      case 'A': return 'from-green-500 to-emerald-500';
      case 'B': return 'from-orange-500 to-red-500';
      case 'C': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Artifacts <span className="text-gradient">Database</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Complete collection of Epic Seven artifacts with detailed stats, effects, and tier rankings.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Search Artifacts
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-epic-text-tertiary w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-epic-secondary border border-white/10 rounded-xl text-white placeholder-epic-text-tertiary focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                  />
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                >
                  {types.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rarity Filter */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Rarity
                </label>
                <select
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                  className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                >
                  <option value="all">All Stars</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-epic-gold" />
              <span className="text-white font-medium">
                {filteredArtifacts.length} Artifacts Found
              </span>
            </div>
            <div className="flex items-center space-x-2 text-epic-text-secondary">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Click on an artifact for detailed information</span>
            </div>
          </div>

          {/* Artifacts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtifacts.map((artifact) => (
              <div key={artifact.id} className="glass-card group cursor-pointer">
                {/* Artifact Image */}
                <div className="relative mb-4">
                  <div className="aspect-square bg-epic-secondary rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 flex items-center justify-center">
                      <Shield className="w-16 h-16 text-epic-gold opacity-50" />
                    </div>
                  </div>
                  
                  {/* Tier Badge */}
                  <div className={`absolute top-2 left-2 px-2 py-1 bg-gradient-to-r ${getTierColor(artifact.tier)} rounded-lg text-black text-xs font-bold`}>
                    {artifact.tier}
                  </div>

                  {/* Stars */}
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {Array.from({ length: artifact.rarity }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-epic-gold fill-current" />
                    ))}
                  </div>
                </div>

                {/* Artifact Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-200 line-clamp-2">
                      {artifact.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="px-2 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim rounded text-black text-xs font-medium capitalize">
                        {artifact.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-epic-text-secondary text-sm line-clamp-3">
                    {artifact.effect}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArtifacts.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Artifacts Found</h3>
              <p className="text-epic-text-secondary">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">180+ Artifacts</h3>
              <p className="text-epic-text-secondary text-sm">
                Complete database of all artifacts with detailed information and tier rankings.
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Meta Analysis</h3>
              <p className="text-epic-text-secondary text-sm">
                Tier rankings based on current meta usage and effectiveness in different content.
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build Integration</h3>
              <p className="text-epic-text-secondary text-sm">
                See which artifacts work best with specific heroes and team compositions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 