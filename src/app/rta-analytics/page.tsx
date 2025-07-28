'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Crown, 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users,
  Target,
  Zap,
  Calendar,
  Filter,
  Award,
  Flame
} from 'lucide-react';

export default function RTAAnalyticsPage() {
  const [selectedTier, setSelectedTier] = useState('champion');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const tiers = [
    { id: 'champion', name: 'Champion', color: 'from-epic-gold to-yellow-400' },
    { id: 'legend', name: 'Legend', color: 'from-purple-500 to-pink-500' },
    { id: 'emperor', name: 'Emperor', color: 'from-red-500 to-orange-500' },
    { id: 'master', name: 'Master', color: 'from-blue-500 to-cyan-500' }
  ];

  const periods = [
    { id: '7d', name: 'Last 7 Days' },
    { id: '30d', name: 'Last 30 Days' },
    { id: 'season', name: 'Current Season' }
  ];

  const topHeroes = [
    { name: 'Hwayoung', pickRate: 78.5, winRate: 64.2, trend: 'up', change: '+2.1%' },
    { name: 'Belian', pickRate: 71.3, winRate: 58.7, trend: 'down', change: '-1.8%' },
    { name: 'Cilias', pickRate: 65.8, winRate: 62.1, trend: 'up', change: '+3.2%' },
    { name: 'Peira', pickRate: 59.4, winRate: 56.9, trend: 'up', change: '+1.5%' },
    { name: 'Politis', pickRate: 54.7, winRate: 61.8, trend: 'down', change: '-0.9%' }
  ];

  const metaStats = [
    { label: 'Total Matches', value: '2,847,392', change: '+12.5%', icon: Target },
    { label: 'Active Players', value: '125,847', change: '+8.3%', icon: Users },
    { label: 'Average Match Time', value: '8.4 min', change: '-2.1%', icon: Calendar },
    { label: 'Most Banned', value: 'Hwayoung', change: '78.5%', icon: Crown }
  ];

  const topComps = [
    { 
      name: 'Speed Control', 
      heroes: ['Peira', 'Cilias', 'Hwayoung', 'Politis'], 
      winRate: 67.8, 
      usage: 24.5 
    },
    { 
      name: 'Belian Core', 
      heroes: ['Belian', 'ML Ken', 'Destina', 'Krau'], 
      winRate: 61.2, 
      usage: 18.7 
    },
    { 
      name: 'Aggro Cleave', 
      heroes: ['Ran', 'Peira', 'Seaside Bellona', 'Hwayoung'], 
      winRate: 59.4, 
      usage: 15.3 
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <Flame className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">Live Meta Data</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              RTA <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Real-time ranked arena statistics with comprehensive meta analysis across all tiers and regions.
            </p>
          </div>

          {/* Filters */}
          <div className="glass-card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Tier Analysis
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {tiers.map(tier => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-3 rounded-xl transition-all duration-200 ${
                        selectedTier === tier.id
                          ? `bg-gradient-to-r ${tier.color} text-black font-medium`
                          : 'bg-epic-secondary/50 text-epic-text-secondary hover:text-white border border-white/10'
                      }`}
                    >
                      {tier.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Time Period
                </label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                >
                  {periods.map(period => (
                    <option key={period.id} value={period.id}>
                      {period.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Meta Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metaStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-epic-text-secondary text-sm">{stat.label}</p>
                      <p className="text-white font-bold text-xl">{stat.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-epic-gold" />
                    <span className="text-epic-gold text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Heroes */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">Meta Heroes</h3>
                </div>
                <span className="text-epic-text-secondary text-sm capitalize">
                  {selectedTier} Tier
                </span>
              </div>

              <div className="space-y-4">
                {topHeroes.map((hero, index) => (
                  <div key={index} className="p-4 bg-epic-secondary/30 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-lg flex items-center justify-center">
                          <span className="text-black font-bold text-sm">#{index + 1}</span>
                        </div>
                        <span className="font-medium text-white">{hero.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {hero.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                        <span className={`text-sm font-medium ${
                          hero.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {hero.change}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-epic-text-secondary text-xs">Pick Rate</div>
                        <div className="text-white font-bold">{hero.pickRate}%</div>
                      </div>
                      <div>
                        <div className="text-epic-text-secondary text-xs">Win Rate</div>
                        <div className="text-white font-bold">{hero.winRate}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Compositions */}
            <div className="glass-card">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-epic-gold" />
                <h3 className="text-xl font-bold text-white">Meta Compositions</h3>
              </div>

              <div className="space-y-6">
                {topComps.map((comp, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-epic-gold/5 to-epic-gold-dim/5 rounded-xl border border-epic-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-white">{comp.name}</h4>
                      <span className="px-2 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black text-xs font-bold rounded-lg">
                        {comp.winRate}% WR
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {comp.heroes.map((hero, heroIndex) => (
                        <span key={heroIndex} className="px-2 py-1 bg-epic-secondary text-epic-text-secondary text-xs rounded-lg">
                          {hero}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-epic-text-secondary">Usage Rate</span>
                      <span className="text-epic-gold font-medium">{comp.usage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-8">
            <div className="glass-card">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-6 h-6 text-epic-gold" />
                <h3 className="text-xl font-bold text-white">Trend Analysis</h3>
              </div>
              
              <div className="h-64 bg-epic-secondary/30 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-epic-text-tertiary mx-auto mb-3" />
                  <p className="text-epic-text-secondary">Interactive charts showing hero usage trends</p>
                  <p className="text-epic-text-tertiary text-sm">Data visualization coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Real-Time Analytics Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live Data</h3>
                <p className="text-epic-text-secondary text-sm">
                  Real-time statistics updated every 15 minutes from live RTA matches.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Advanced Filtering</h3>
                <p className="text-epic-text-secondary text-sm">
                  Filter by tier, region, time period, and specific hero combinations.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Trend Prediction</h3>
                <p className="text-epic-text-secondary text-sm">
                  AI-powered trend analysis to predict meta shifts and emerging strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 