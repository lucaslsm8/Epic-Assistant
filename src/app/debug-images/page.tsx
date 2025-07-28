'use client';

import { useState } from 'react';
import Image from 'next/image';

const heroIds = ['vildred', 'bellona', 'luna'];

export default function DebugImagesPage() {
  const [imageStates, setImageStates] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({});

  const handleImageLoad = (heroId: string) => {
    console.log(`✅ ${heroId} loaded successfully`);
    setImageStates(prev => ({ ...prev, [heroId]: 'loaded' }));
  };

  const handleImageError = (heroId: string) => {
    console.log(`❌ ${heroId} failed to load`);
    setImageStates(prev => ({ ...prev, [heroId]: 'error' }));
  };

  return (
    <div className="min-h-screen bg-epic-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Image Debug</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroIds.map(heroId => (
            <div key={heroId} className="glass-card p-4">
              <h3 className="text-lg font-bold text-white mb-3">{heroId}</h3>
              
              <div className="relative w-full h-32 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden mb-3">
                <Image
                  src={`/heroes/${heroId}.png`}
                  alt={heroId}
                  fill
                  className="object-cover"
                  onLoad={() => handleImageLoad(heroId)}
                  onError={() => handleImageError(heroId)}
                  sizes="(max-width: 768px) 100vw, 33vw"
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

        {/* Console Output */}
        <div className="mt-8 glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Console Output</h2>
          <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-green-400 h-32 overflow-y-auto">
            <div>Check browser console for detailed logs...</div>
            <div>✅ = Image loaded successfully</div>
            <div>❌ = Image failed to load</div>
          </div>
        </div>
      </div>
    </div>
  );
} 