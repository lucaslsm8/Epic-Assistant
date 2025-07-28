'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Swords, 
  Users,
  Target,
  Shield,
  Trophy,
  Calendar,
  Clock,
  TrendingUp,
  Star,
  Crown,
  Zap,
  BarChart3,
  Flag,
  Sword
} from 'lucide-react';

export default function GuildWarsPage() {
  const [selectedTower, setSelectedTower] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('today');

  const towers = [
    { id: 'all', name: 'All Towers', color: 'from-epic-gold to-epic-gold-dim' },
    { id: 'fort', name: 'Fortification', color: 'from-blue-500 to-cyan-500' },
    { id: 'air', name: 'Air Defense', color: 'from-green-500 to-emerald-500' },
    { id: 'command', name: 'Command Post', color: 'from-red-500 to-orange-500' }
  ];

  const warStats = [
    { label: 'Current Score', value: '24,850', change: '+2,340', icon: Trophy },
    { label: 'Battles Won', value: '156', change: '+18 today', icon: Swords },
    { label: 'Defense Rate', value: '73%', change: '+5.2%', icon: Shield },
    { label: 'Guild Rank', value: '#47', change: '+12 ranks', icon: Crown }
  ];

  const topDefenses = [
    {
      tower: 'Fort Alpha',
      defender: 'Belian',
      winRate: 85.7,
      attempts: 23,
      lastAttack: '2h ago',
      status: 'holding'
    },
    {
      tower: 'Air Beta',
      defender: 'Politis',
      winRate: 78.3,
      attempts: 19,
      lastAttack: '4h ago',
      status: 'holding'
    },
    {
      tower: 'Command Gamma',
      defender: 'ML Ken',
      winRate: 92.1,
      attempts: 12,
      lastAttack: '6h ago',
      status: 'holding'
    }
  ];

  const recommendedComps = [
    {
      name: 'Anti-Belian Squad',
      heroes: ['Hwayoung', 'Ran', 'Peira', 'Cilias'],
      effectiveness: 87,
      usage: 'vs Tank teams with Belian core',
      difficulty: 'Medium'
    },
    {
      name: 'Speed Control',
      heroes: ['Ran', 'Peira', 'Seaside Bellona', 'Hwayoung'],
      effectiveness: 82,
      usage: 'vs Bruiser compositions',
      difficulty: 'Hard'
    },
    {
      name: 'Cleave Setup',
      heroes: ['Aux Lots', 'Judge Kise', 'Vildred', 'Tywin'],
      effectiveness: 78,
      usage: 'vs Low speed defenses',
      difficulty: 'Easy'
    }
  ];

  const upcomingBattles = [
    { time: '14:30', opponent: 'Shadow Legion', type: 'Attack Phase', status: 'pending' },
    { time: '18:00', opponent: 'Storm Riders', type: 'Defense Setup', status: 'preparing' },
    { time: '22:30', opponent: 'Final Battle', type: 'Last Stand', status: 'critical' }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <Flag className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">Live Guild War</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Guild <span className="text-gradient">Wars</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Strategic analysis and defense optimization for guild wars. Monitor battles, plan attacks, and dominate the battlefield.
            </p>
          </div>

          {/* War Status */}
          <div className="glass-card mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-2xl flex items-center justify-center">
                  <Swords className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">War Status: Active</h2>
                  <p className="text-epic-text-secondary">Day 2 of 3 • Attack Phase</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-epic-gold font-bold text-xl">08:45:23</div>
                  <div className="text-epic-text-secondary text-sm">Time Remaining</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">In Battle</span>
                </div>
              </div>
            </div>
          </div>

          {/* War Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {warStats.map((stat, index) => {
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

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Defense Overview */}
            <div className="xl:col-span-2 space-y-6">
              <div className="glass-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-epic-gold" />
                    <h3 className="text-xl font-bold text-white">Defense Status</h3>
                  </div>
                  <select
                    value={selectedTower}
                    onChange={(e) => setSelectedTower(e.target.value)}
                    className="bg-epic-secondary border border-white/10 rounded-lg px-3 py-2 text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold"
                  >
                    {towers.map(tower => (
                      <option key={tower.id} value={tower.id}>
                        {tower.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  {topDefenses.map((defense, index) => (
                    <div key={index} className="p-4 bg-epic-secondary/30 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold text-sm">#{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{defense.tower}</h4>
                            <p className="text-epic-text-secondary text-sm">{defense.defender}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                            defense.status === 'holding' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {defense.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-epic-text-secondary">Win Rate</div>
                          <div className="text-white font-bold">{defense.winRate}%</div>
                        </div>
                        <div>
                          <div className="text-epic-text-secondary">Attempts</div>
                          <div className="text-white font-bold">{defense.attempts}</div>
                        </div>
                        <div>
                          <div className="text-epic-text-secondary">Last Attack</div>
                          <div className="text-white font-bold">{defense.lastAttack}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Compositions */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">Attack Compositions</h3>
                </div>

                <div className="space-y-4">
                  {recommendedComps.map((comp, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-epic-gold/5 to-epic-gold-dim/5 rounded-xl border border-epic-gold/20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-white">{comp.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black text-xs font-bold rounded-lg">
                            {comp.effectiveness}% Effective
                          </span>
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            comp.difficulty === 'Easy' ? 'bg-green-600 text-white' :
                            comp.difficulty === 'Medium' ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {comp.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {comp.heroes.map((hero, heroIndex) => (
                          <span key={heroIndex} className="px-2 py-1 bg-epic-secondary text-epic-text-secondary text-xs rounded-lg">
                            {hero}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-epic-text-secondary text-sm">{comp.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Battles */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-lg font-bold text-white">Upcoming</h3>
                </div>

                <div className="space-y-4">
                  {upcomingBattles.map((battle, index) => (
                    <div key={index} className="p-3 bg-epic-secondary/30 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-epic-gold font-bold">{battle.time}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          battle.status === 'critical' ? 'bg-red-600 text-white' :
                          battle.status === 'preparing' ? 'bg-yellow-600 text-black' : 'bg-blue-600 text-white'
                        }`}>
                          {battle.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-white font-medium text-sm">{battle.opponent}</div>
                      <div className="text-epic-text-secondary text-xs">{battle.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card">
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full btn-primary py-3 text-left flex items-center space-x-2">
                    <Sword className="w-4 h-4" />
                    <span>Attack Tower</span>
                  </button>
                  <button className="w-full btn-secondary py-3 text-left flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Setup Defense</span>
                  </button>
                  <button className="w-full btn-secondary py-3 text-left flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>View Analytics</span>
                  </button>
                </div>
              </div>

              {/* Guild Info */}
              <div className="glass-card">
                <h3 className="text-lg font-bold text-white mb-4">Guild Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">Members Online</span>
                    <span className="text-white font-bold">24/30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">War Points</span>
                    <span className="text-epic-gold font-bold">24,850</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">Current Streak</span>
                    <span className="text-white font-bold">7 Wins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 