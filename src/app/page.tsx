'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Target, 
  Crown,
  Zap,
  PlayCircle,
  BarChart3,
  Clock,
  ChevronRight,
  Star,
  Sword,
  Calendar,
  Activity
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      id: 'heroes',
      title: 'Heroes',
      value: '400+',
      change: '+12 this month',
      trend: 'up' as const,
      icon: Users,
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'artifacts',
      title: 'Artifacts',
      value: '180+',
      change: '+3 this week',
      trend: 'up' as const,
      icon: Shield,
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'builds',
      title: 'Community Builds',
      value: '50K+',
      change: '+2.3K today',
      trend: 'up' as const,
      icon: BarChart3,
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '125K+',
      change: '+8% this week',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'from-epic-gold to-epic-gold-dim'
    }
  ];

  const features = [
    {
      id: 'arena-scanner',
      title: 'Arena Scanner',
      description: 'AI-powered enemy team analysis with automatic counter suggestions',
      href: '/arena-scanner',
      icon: Target,
      badge: 'AI Powered',
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'build-optimizer',
      title: 'Build Optimizer',
      description: 'Optimize builds with Fribbels community data and advanced calculations',
      href: '/build-optimizer',
      icon: Zap,
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'rta-analytics',
      title: 'RTA Analytics',
      description: 'Real-time ranked arena statistics with meta analysis by tier',
      href: '/rta-analytics',
      icon: Crown,
      badge: 'Live Data',
      color: 'from-epic-gold to-epic-gold-dim'
    },
    {
      id: 'video-guides',
      title: 'Video Guides',
      description: 'Curated video guides with in-app playback and build integration',
      href: '/video-guides',
      icon: PlayCircle,
      color: 'from-epic-gold to-epic-gold-dim'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-epic-gold/10 via-epic-gold-dim/10 to-epic-gold/5">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="relative py-12">
            <div className="text-center space-y-6 w-full mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-2">
                <Star className="w-4 h-4 text-epic-gold" />
                <span className="text-sm font-medium text-white">Version 2.0 - Now with AI Scanner</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Epic Seven
                <span className="block text-gradient">Assistant</span>
              </h1>
              
              <p className="text-xl text-epic-text-secondary mx-auto leading-relaxed max-w-4xl">
                The most advanced tool for Epic Seven players. Analyze arena teams, optimize builds, 
                and dominate the meta with AI-powered insights.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link href="/arena-scanner" className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg">
                  <Target className="w-5 h-5" />
                  <span>Try Arena Scanner</span>
                </Link>
                <Link href="/heroes" className="btn-secondary inline-flex items-center space-x-2 px-8 py-4 text-lg">
                  <Users className="w-5 h-5" />
                  <span>Browse Heroes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-epic py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="glass-card group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-epic-text-tertiary uppercase tracking-wide">{stat.title}</p>
                          <p className="text-3xl font-bold text-white">{stat.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <TrendingUp className="w-4 h-4 text-epic-gold" />
                        <span className="text-epic-gold font-medium">{stat.change}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Current Time & Status */}
          <div className="glass-card mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">System Status</h3>
                  <p className="text-epic-text-secondary">All services operational</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-epic-gold" />
                  <span className="font-mono text-lg text-white">{currentTime || '00:00:00'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-epic-gold rounded-full animate-pulse" />
                  <span className="text-epic-gold font-medium">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid - Improved for ultrawide */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
                Everything you need to master Epic Seven, from AI-powered analysis to advanced optimization tools.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link
                    key={feature.id}
                    href={feature.href}
                    className="glass-card group hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`
                        w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl 
                        flex items-center justify-center shadow-xl
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-200">
                            {feature.title}
                          </h3>
                          {feature.badge && (
                            <span className="px-3 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black text-xs font-bold rounded-full">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-epic-text-secondary leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        
                        <div className="flex items-center text-epic-gold group-hover:text-epic-gold transition-colors duration-200">
                          <span className="font-medium">Explore Feature</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="mt-16">
            <div className="glass-card">
              <div className="flex items-center space-x-3 mb-8">
                <Calendar className="w-6 h-6 text-epic-gold" />
                <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-epic-gold/10 to-epic-gold-dim/10 border border-epic-gold/30">
                  <div className="w-2 h-2 bg-epic-gold rounded-full mt-2 animate-pulse" />
                  <div>
                    <p className="text-white font-medium">Arena Scanner AI Enhanced</p>
                    <p className="text-epic-text-secondary text-sm">Improved accuracy to 95% with new ML models</p>
                    <p className="text-epic-text-tertiary text-xs mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-epic-gold/5 to-epic-gold-dim/5 border border-epic-gold/20">
                  <div className="w-2 h-2 bg-epic-gold-dim rounded-full mt-2" />
                  <div>
                    <p className="text-white font-medium">New Heroes Database</p>
                    <p className="text-epic-text-secondary text-sm">Added Aram, Witch of the Mere Tenebria, and 12 more heroes</p>
                    <p className="text-epic-text-tertiary text-xs mt-1">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-epic-gold/5 to-epic-gold-dim/5 border border-epic-gold/20">
                  <div className="w-2 h-2 bg-epic-gold-dim rounded-full mt-2" />
                  <div>
                    <p className="text-white font-medium">RTA Season 15 Meta Analysis</p>
                    <p className="text-epic-text-secondary text-sm">Complete tier lists and meta statistics now available</p>
                    <p className="text-epic-text-tertiary text-xs mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}
