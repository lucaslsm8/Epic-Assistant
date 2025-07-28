'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  PlayCircle, 
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  Star,
  Users,
  Target,
  Crown,
  Zap,
  Calendar,
  BookOpen
} from 'lucide-react';

interface VideoGuide {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  category: 'beginner' | 'advanced' | 'pve' | 'pvp' | 'builds';
  author: string;
  uploadDate: string;
  description: string;
  featured: boolean;
}

export default function VideoGuidesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');

  const categories = [
    { id: 'all', name: 'All Guides', icon: BookOpen },
    { id: 'beginner', name: 'Beginner', icon: Star },
    { id: 'advanced', name: 'Advanced', icon: Target },
    { id: 'pve', name: 'PvE Content', icon: Users },
    { id: 'pvp', name: 'PvP Strategy', icon: Crown },
    { id: 'builds', name: 'Hero Builds', icon: Zap }
  ];

  const videoGuides: VideoGuide[] = [
    {
      id: 'arena-meta-guide',
      title: 'Arena Meta Guide - Season 15 Complete Analysis',
      thumbnail: '/guides/arena-meta.jpg',
      duration: '24:15',
      views: '145K',
      likes: '8.2K',
      category: 'pvp',
      author: 'EpicSevenMaster',
      uploadDate: '2 days ago',
      description: 'Complete guide to current arena meta with tier lists and counter strategies',
      featured: true
    },
    {
      id: 'hwayoung-build',
      title: 'Perfect Hwayoung Build Guide - Damage Calculator Included',
      thumbnail: '/guides/hwayoung-build.jpg',
      duration: '18:30',
      views: '89K',
      likes: '5.1K',
      category: 'builds',
      author: 'BuildOptimizer',
      uploadDate: '5 days ago',
      description: 'Everything you need to know about building the perfect Hwayoung',
      featured: false
    },
    {
      id: 'abyss-120-clear',
      title: 'Abyss Floor 120 F2P Clear Strategy',
      thumbnail: '/guides/abyss-120.jpg',
      duration: '32:45',
      views: '203K',
      likes: '12.5K',
      category: 'pve',
      author: 'F2PGaming',
      uploadDate: '1 week ago',
      description: 'Complete walkthrough for clearing Abyss 120 without premium units',
      featured: true
    },
    {
      id: 'beginner-guide',
      title: 'Epic Seven Complete Beginner Guide 2024',
      thumbnail: '/guides/beginner.jpg',
      duration: '45:20',
      views: '567K',
      likes: '28.4K',
      category: 'beginner',
      author: 'EpicSevenAcademy',
      uploadDate: '2 weeks ago',
      description: 'Everything new players need to know to start their journey',
      featured: true
    }
  ];

  const filteredGuides = videoGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredGuides = videoGuides.filter(guide => guide.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'beginner': return 'from-green-500 to-emerald-500';
      case 'advanced': return 'from-red-500 to-orange-500';
      case 'pve': return 'from-blue-500 to-cyan-500';
      case 'pvp': return 'from-purple-500 to-pink-500';
      case 'builds': return 'from-epic-gold to-epic-gold-dim';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <PlayCircle className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">Community Content</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Video <span className="text-gradient">Guides</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Curated collection of the best Epic Seven video guides from top content creators. Learn strategies, builds, and techniques.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Search Guides
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-epic-text-tertiary w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-epic-secondary border border-white/10 rounded-xl text-white placeholder-epic-text-tertiary focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-epic-text-secondary mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full py-3 px-4 bg-epic-secondary border border-white/10 rounded-xl text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold transition-all duration-200"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="views">Most Viewed</option>
                  <option value="likes">Most Liked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Featured Guides */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Star className="w-6 h-6 text-epic-gold" />
              <h2 className="text-2xl font-bold text-white">Featured Guides</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <div key={guide.id} className="glass-card group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative mb-4">
                    <div className="aspect-video bg-epic-secondary rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-epic-gold opacity-70" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                      {guide.duration}
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-2 left-2 px-2 py-1 bg-gradient-to-r ${getCategoryColor(guide.category)} rounded-lg text-white text-xs font-bold capitalize`}>
                      {guide.category}
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-epic-gold rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-black fill-current" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-200 line-clamp-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-epic-text-secondary text-sm line-clamp-2">
                      {guide.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-epic-text-secondary">by {guide.author}</span>
                      <span className="text-epic-text-tertiary">{guide.uploadDate}</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-epic-text-tertiary" />
                        <span className="text-epic-text-secondary">{guide.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4 text-epic-text-tertiary" />
                        <span className="text-epic-text-secondary">{guide.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Guides */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-epic-gold" />
                <h2 className="text-2xl font-bold text-white">All Guides</h2>
                <span className="text-epic-text-secondary">
                  ({filteredGuides.length} guides)
                </span>
              </div>
              <div className="flex items-center space-x-2 text-epic-text-secondary">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Click to watch</span>
              </div>
            </div>

            <div className="grid-responsive">
              {filteredGuides.map((guide) => (
                <div key={guide.id} className="glass-card group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative mb-4">
                    <div className="aspect-video bg-epic-secondary rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-epic-gold opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                      {guide.duration}
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-2 left-2 px-2 py-1 bg-gradient-to-r ${getCategoryColor(guide.category)} rounded-lg text-white text-xs font-bold capitalize`}>
                      {guide.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-200 line-clamp-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-epic-text-secondary text-sm line-clamp-2">
                      {guide.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-epic-text-secondary">by {guide.author}</span>
                      <span className="text-epic-text-tertiary">{guide.uploadDate}</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-epic-text-tertiary" />
                        <span className="text-epic-text-secondary">{guide.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4 text-epic-text-tertiary" />
                        <span className="text-epic-text-secondary">{guide.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredGuides.length === 0 && (
              <div className="text-center py-16">
                <PlayCircle className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Guides Found</h3>
                <p className="text-epic-text-secondary">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">500+ Guides</h3>
              <p className="text-epic-text-secondary text-sm">
                Comprehensive collection of video guides from top content creators.
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">50+ Creators</h3>
              <p className="text-epic-text-secondary text-sm">
                Content from verified Epic Seven experts and community leaders.
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Daily Updates</h3>
              <p className="text-epic-text-secondary text-sm">
                New guides added daily to keep up with the evolving meta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 