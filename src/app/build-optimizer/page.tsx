'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Zap, 
  Settings,
  BarChart3,
  TrendingUp,
  Shield,
  Sword,
  Target,
  Users,
  Sliders,
  Calculator,
  Star
} from 'lucide-react';

export default function BuildOptimizerPage() {
  const [selectedHero, setSelectedHero] = useState('');
  const [buildType, setBuildType] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const heroes = [
    'Arbiter Vildred', 'Belian', 'Cilias', 'Hwayoung', 'Peira', 
    'Politis', 'Ran', 'Seaside Bellona', 'Specter Tenebria', 'Tamarinne'
  ];

  const buildTypes = [
    { id: 'speed', name: 'Speed DPS', desc: 'High speed with damage' },
    { id: 'bruiser', name: 'Bruiser', desc: 'Balanced damage and survivability' },
    { id: 'tank', name: 'Tank', desc: 'Maximum survivability' },
    { id: 'oneshot', name: 'One-Shot', desc: 'Maximum damage output' },
    { id: 'support', name: 'Support', desc: 'Utility and team support' }
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <Calculator className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">Advanced Optimization</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Build <span className="text-gradient">Optimizer</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Optimize your hero builds with advanced calculations using Fribbels community data and meta analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="w-6 h-6 text-epic-gold" />
                  <h2 className="text-xl font-bold text-white">Configuration</h2>
                </div>

                <div className="space-y-6">
                  {/* Hero Selection */}
                  <div>
                    <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                      Select Hero
                    </label>
                    <select
                      value={selectedHero}
                      onChange={(e) => setSelectedHero(e.target.value)}
                      className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                    >
                      <option value="">Choose a hero...</option>
                      {heroes.map(hero => (
                        <option key={hero} value={hero}>{hero}</option>
                      ))}
                    </select>
                  </div>

                  {/* Build Type */}
                  <div>
                    <label className="block text-sm font-medium text-epic-text-secondary mb-3">
                      Build Type
                    </label>
                    <div className="space-y-2">
                      {buildTypes.map(type => (
                        <label key={type.id} className="flex items-center p-3 bg-epic-secondary/50 rounded-xl border border-white/10 cursor-pointer hover:border-epic-gold/30 transition-all duration-200">
                          <input
                            type="radio"
                            name="buildType"
                            value={type.id}
                            checked={buildType === type.id}
                            onChange={(e) => setBuildType(e.target.value)}
                            className="mr-3 text-epic-gold focus:ring-epic-gold"
                          />
                          <div>
                            <div className="font-medium text-white">{type.name}</div>
                            <div className="text-xs text-epic-text-secondary">{type.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Priority Settings */}
                  <div>
                    <label className="block text-sm font-medium text-epic-text-secondary mb-3">
                      Stat Priorities
                    </label>
                    <div className="space-y-3">
                      {['Attack', 'Critical Chance', 'Critical Damage', 'Speed', 'Health', 'Defense'].map(stat => (
                        <div key={stat} className="flex items-center justify-between">
                          <span className="text-white text-sm">{stat}</span>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                            className="w-20 accent-epic-gold"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Optimize Button */}
                  <button
                    onClick={handleOptimize}
                    disabled={!selectedHero || !buildType || isOptimizing}
                    className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isOptimizing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Optimizing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Optimize Build</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card">
                <h3 className="text-lg font-bold text-white mb-4">Build Database</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">Total Builds</span>
                    <span className="text-white font-bold">50,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">Meta Builds</span>
                    <span className="text-white font-bold">2,891</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-epic-text-secondary">Updated</span>
                    <span className="text-epic-gold font-bold">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              {selectedHero && buildType ? (
                <>
                  {/* Optimized Build */}
                  <div className="glass-card">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Target className="w-6 h-6 text-epic-gold" />
                        <h3 className="text-xl font-bold text-white">Optimized Build</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-epic-gold" />
                        <span className="text-epic-gold font-medium">Meta Score: 94%</span>
                      </div>
                    </div>

                    {/* Gear Sets */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {['Weapon', 'Helmet', 'Armor', 'Necklace', 'Ring', 'Boots'].map((piece, index) => (
                        <div key={piece} className="p-4 bg-epic-secondary/50 rounded-xl border border-white/10">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-2">
                              <Shield className="w-6 h-6 text-black" />
                            </div>
                            <div className="text-white text-sm font-medium">{piece}</div>
                            <div className="text-epic-text-secondary text-xs">+15</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { label: 'Attack', value: '3,847', change: '+15%' },
                        { label: 'Health', value: '18,234', change: '+8%' },
                        { label: 'Defense', value: '1,247', change: '+12%' },
                        { label: 'Speed', value: '247', change: '+22%' },
                        { label: 'Crit Rate', value: '98%', change: '+18%' },
                        { label: 'Crit Damage', value: '289%', change: '+25%' }
                      ].map(stat => (
                        <div key={stat.label} className="p-3 bg-gradient-to-r from-epic-gold/5 to-epic-gold-dim/5 rounded-xl border border-epic-gold/20">
                          <div className="text-epic-text-secondary text-xs">{stat.label}</div>
                          <div className="text-white font-bold text-lg">{stat.value}</div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-epic-gold" />
                            <span className="text-epic-gold text-xs">{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alternative Builds */}
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-6">
                      <BarChart3 className="w-6 h-6 text-epic-gold" />
                      <h3 className="text-xl font-bold text-white">Alternative Builds</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: 'High Speed Variant', score: '92%', focus: 'Speed focus for first turn' },
                        { name: 'Damage Variant', score: '89%', focus: 'Maximum damage output' },
                        { name: 'Tanky Variant', score: '86%', focus: 'Survivability focus' }
                      ].map((build, index) => (
                        <div key={index} className="p-4 bg-epic-secondary/30 rounded-xl border border-white/10 hover:border-epic-gold/30 transition-all duration-200 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-white">{build.name}</div>
                              <div className="text-epic-text-secondary text-sm">{build.focus}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black text-xs font-bold rounded-lg">
                                {build.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Placeholder */
                <div className="glass-card">
                  <div className="text-center py-16">
                    <Sliders className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Optimize</h3>
                    <p className="text-epic-text-secondary">
                      Select a hero and build type to get started with optimization.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Optimization Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Calculations</h3>
                <p className="text-epic-text-secondary text-sm">
                  Advanced algorithms calculate optimal gear combinations from millions of possibilities.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Community Data</h3>
                <p className="text-epic-text-secondary text-sm">
                  Powered by Fribbels community database with real player builds and statistics.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meta Analysis</h3>
                <p className="text-epic-text-secondary text-sm">
                  Always updated with current meta trends and top-tier player strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 