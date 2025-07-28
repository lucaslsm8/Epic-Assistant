'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Star, 
  Shield, 
  Sword, 
  Heart,
  TrendingUp,
  Users,
  Target,
  Crown,
  ArrowLeft,
  Calendar,
  Award,
  BarChart3,
  Zap,
  AlertTriangle,
  CheckCircle,
  Users2,
  Swords
} from 'lucide-react';
import Link from 'next/link';
import { getHeroById, getElementColor, getRoleIcon } from '@/lib/heroDatabase';
import { TierRank } from '@/types/epic-seven';
import { notFound } from 'next/navigation';
import HeroImage from '@/components/HeroImage';

interface HeroPageProps {
  params: {
    id: string;
  };
}

export default function HeroPage({ params }: HeroPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'builds' | 'tier' | 'strategy'>('overview');
  
  const hero = getHeroById(params.id);
  
  if (!hero) {
    notFound();
  }

  const getTierColor = (tier?: TierRank): string => {
    switch (tier) {
      case TierRank.SS:
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case TierRank.S:
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case TierRank.A:
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case TierRank.B:
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case TierRank.C:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getUsageColor = (value: number): string => {
    if (value >= 9) return 'text-green-400';
    if (value >= 7) return 'text-yellow-400';
    if (value >= 5) return 'text-orange-400';
    return 'text-red-400';
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Users },
    { id: 'builds', name: 'Builds', icon: Sword },
    { id: 'tier', name: 'Tier List', icon: Crown },
    { id: 'strategy', name: 'Strategy', icon: Target }
  ];

  return (
    <Layout>
      <div className="container-epic py-8 space-y-8">
        {/* Back Button */}
        <Link
          href="/heroes"
          className="inline-flex items-center space-x-2 text-epic-text-secondary hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Heroes</span>
        </Link>

        {/* Hero Header */}
        <div className="glass-card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hero Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-2xl overflow-hidden">
                <HeroImage
                  heroId={hero.id}
                  heroName={hero.name}
                  role={hero.role}
                  isML={hero.isML}
                  className="absolute inset-0"
                  iconSize="text-8xl"
                />
                
                {/* Element Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${getElementColor(hero.element)} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-sm font-bold text-white">
                    {hero.element.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                {/* ML Badge */}
                {hero.isML && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Moonlight
                  </div>
                )}
                
                {/* Tier Badge */}
                <div className={`absolute bottom-4 left-4 px-3 py-2 rounded-xl border ${getTierColor(hero.tierData?.pvp.arena)} font-bold`}>
                  {hero.tierData?.pvp.arena || 'C'} Tier
                </div>
                
                {/* Rarity Stars */}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                  {Array.from({ length: hero.rarity }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {hero.name}
                </h1>
                <div className="flex items-center space-x-4 text-epic-text-secondary">
                  <span className="capitalize text-lg">{hero.role.replace('_', ' ')}</span>
                  <span>•</span>
                  <span className="capitalize">{hero.element}</span>
                  <span>•</span>
                  <span>{hero.rarity}★</span>
                  {hero.isML && (
                    <>
                      <span>•</span>
                      <span className="text-purple-400">Moonlight</span>
                    </>
                  )}
                </div>
                <p className="text-epic-text-secondary mt-2">{hero.specialty}</p>
              </div>

              <p className="text-lg text-epic-text-primary leading-relaxed">
                {hero.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {hero.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-epic-gold/20 text-epic-gold px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Usage Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-epic-secondary/50 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${getUsageColor(hero.usage.pve)}`}>
                    {hero.usage.pve}/10
                  </div>
                  <div className="text-sm text-epic-text-secondary">PvE</div>
                </div>
                <div className="bg-epic-secondary/50 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${getUsageColor(hero.usage.pvp)}`}>
                    {hero.usage.pvp}/10
                  </div>
                  <div className="text-sm text-epic-text-secondary">PvP</div>
                </div>
                <div className="bg-epic-secondary/50 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${getUsageColor(hero.usage.rta)}`}>
                    {hero.usage.rta}/10
                  </div>
                  <div className="text-sm text-epic-text-secondary">RTA</div>
                </div>
                <div className="bg-epic-secondary/50 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${getUsageColor(hero.usage.guildWar)}`}>
                    {hero.usage.guildWar}/10
                  </div>
                  <div className="text-sm text-epic-text-secondary">GW</div>
                </div>
              </div>

              {/* Release Info */}
              {hero.releaseDate && (
                <div className="flex items-center space-x-2 text-epic-text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>Released: {new Date(hero.releaseDate).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Difficulty: {hero.difficulty}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="glass-card p-0">
          <div className="flex border-b border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 transition-all ${
                    activeTab === tab.id
                      ? 'bg-epic-gold text-black font-medium'
                      : 'text-epic-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Base Stats */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-epic-gold" />
                    <span>Base Stats (Level 60)</span>
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="text-red-400 text-lg font-bold">
                        {hero.stats.baseStats.attack.toLocaleString()}
                      </div>
                      <div className="text-sm text-epic-text-secondary">Attack</div>
                    </div>
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="text-green-400 text-lg font-bold">
                        {hero.stats.baseStats.health.toLocaleString()}
                      </div>
                      <div className="text-sm text-epic-text-secondary">Health</div>
                    </div>
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="text-blue-400 text-lg font-bold">
                        {hero.stats.baseStats.defense.toLocaleString()}
                      </div>
                      <div className="text-sm text-epic-text-secondary">Defense</div>
                    </div>
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="text-yellow-400 text-lg font-bold">
                        {hero.stats.baseStats.speed}
                      </div>
                      <div className="text-sm text-epic-text-secondary">Speed</div>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Story</h3>
                  <p className="text-epic-text-secondary leading-relaxed">
                    {hero.story}
                  </p>
                </div>
              </div>
            )}

            {/* Builds Tab */}
            {activeTab === 'builds' && (
              <div className="space-y-6">
                <div className="text-center py-16">
                  <Sword className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Builds Coming Soon</h3>
                  <p className="text-epic-text-secondary">
                    Detailed build guides and gear recommendations will be available soon.
                  </p>
                </div>
              </div>
            )}

            {/* Tier List Tab */}
            {activeTab === 'tier' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Tier Rankings</h3>
                
                {/* PvP Tiers */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">PvP Performance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-epic-text-secondary">Arena</span>
                        <span className={`px-2 py-1 rounded text-sm font-bold ${getTierColor(hero.tierData?.pvp.arena)}`}>
                          {hero.tierData?.pvp.arena}
                        </span>
                      </div>
                    </div>
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-epic-text-secondary">Guild War</span>
                        <span className={`px-2 py-1 rounded text-sm font-bold ${getTierColor(hero.tierData?.pvp.guildWar)}`}>
                          {hero.tierData?.pvp.guildWar}
                        </span>
                      </div>
                    </div>
                    <div className="bg-epic-secondary/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-epic-text-secondary">RTA</span>
                        <span className={`px-2 py-1 rounded text-sm font-bold ${getTierColor(hero.tierData?.pvp.rta)}`}>
                          {hero.tierData?.pvp.rta}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PvE Tiers */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">PvE Performance</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {hero.tierData && Object.entries(hero.tierData.pve).map(([content, tier]) => (
                      <div key={content} className="bg-epic-secondary/50 rounded-xl p-4 text-center">
                        <div className={`px-2 py-1 rounded text-sm font-bold mb-2 ${getTierColor(tier)}`}>
                          {tier}
                        </div>
                        <div className="text-xs text-epic-text-secondary capitalize">
                          {content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Strategy Tab */}
            {activeTab === 'strategy' && (
              <div className="space-y-8">
                {/* Strengths */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Strengths</span>
                  </h3>
                  <div className="space-y-2">
                    {hero.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-green-400/10 border border-green-400/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-epic-text-primary">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weaknesses */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span>Weaknesses</span>
                  </h3>
                  <div className="space-y-2">
                    {hero.weaknesses.map((weakness, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-red-400/10 border border-red-400/20 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-epic-text-primary">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Synergies */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Users2 className="w-5 h-5 text-blue-400" />
                    <span>Team Synergies</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {hero.synergies.map((synergy, index) => (
                      <div key={index} className="p-3 bg-blue-400/10 border border-blue-400/20 rounded-lg">
                        <span className="text-epic-text-primary capitalize">{synergy.replace('-', ' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Counters */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Swords className="w-5 h-5 text-orange-400" />
                    <span>Countered By</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {hero.counters.map((counter, index) => (
                      <div key={index} className="p-3 bg-orange-400/10 border border-orange-400/20 rounded-lg">
                        <span className="text-epic-text-primary capitalize">{counter.replace('-', ' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 