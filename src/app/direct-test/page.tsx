'use client';

import { useState } from 'react';

const heroIds = ['vildred', 'bellona', 'luna'];

export default function DirectTestPage() {
  const [imageStates, setImageStates] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({});

  const handleImageLoad = (heroId: string) => {
    console.log(`✅ ${heroId} loaded successfully with img tag`);
    setImageStates(prev => ({ ...prev, [heroId]: 'loaded' }));
  };

  const handleImageError = (heroId: string) => {
    console.log(`❌ ${heroId} failed to load with img tag`);
    setImageStates(prev => ({ ...prev, [heroId]: 'error' }));
  };

  return (
    <div className="min-h-screen bg-epic-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Direct Image Test</h1>
        
        <div className="glass-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Testing with Regular img Tags</h2>
          <p className="text-epic-text-secondary mb-4">
            This page tests image loading using regular HTML img tags instead of Next.js Image component.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroIds.map(heroId => (
            <div key={heroId} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">{heroId}</h3>
              
              <div className="relative w-full h-48 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden mb-4">
                <img
                  src={`/heroes/${heroId}.png`}
                  alt={heroId}
                  className="w-full h-full object-cover rounded-lg"
                  onLoad={() => handleImageLoad(heroId)}
                  onError={() => handleImageError(heroId)}
                />
              </div>
              
              <div className="text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-epic-text-secondary">Status:</span>
                  {imageStates[heroId] === 'loaded' && (
                    <span className="text-green-400">✅ Loaded</span>
                  )}
                  {imageStates[heroId] === 'error' && (
                    <span className="text-red-400">❌ Error</span>
                  )}
                  {!imageStates[heroId] && (
                    <span className="text-yellow-400">⏳ Loading...</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Comparison</h2>
          <div className="space-y-2 text-epic-text-secondary">
            <div>• Regular img tags should work if images are accessible</div>
            <div>• If these fail, the images themselves have issues</div>
            <div>• If these work but Next.js Image fails, it's a Next.js config issue</div>
          </div>
        </div>
      </div>
    </div>
  );
} 