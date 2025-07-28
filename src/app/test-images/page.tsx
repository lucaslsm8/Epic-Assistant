'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getRoleIcon } from '@/lib/heroDatabase';
import { Role } from '@/types/epic-seven';

const heroIds = ['vildred', 'bellona', 'luna', 'ruele-of-light', 'fallen-cecilia', 'tamarinne', 'iseria'];

export default function TestImagesPage() {
  const [results, setResults] = useState<Record<string, { loaded: boolean; error: string | null }>>({});

  const testImage = async (heroId: string) => {
    const img = new window.Image();
    const url = `/heroes/${heroId}.png`;
    
    img.onload = () => {
      setResults(prev => ({
        ...prev,
        [heroId]: { loaded: true, error: null }
      }));
    };
    
    img.onerror = () => {
      setResults(prev => ({
        ...prev,
        [heroId]: { loaded: false, error: 'Failed to load' }
      }));
    };
    
    img.src = url;
  };

  const testAllImages = () => {
    heroIds.forEach(testImage);
  };

  return (
    <div className="min-h-screen bg-epic-primary p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Image Loading Test</h1>
        
        <button 
          onClick={testAllImages}
          className="btn-primary mb-8"
        >
          Test All Images
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroIds.map(heroId => (
            <div key={heroId} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">{heroId}</h3>
              
              {/* Direct Image Test */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-epic-text-secondary mb-2">Direct Image:</h4>
                <div className="relative w-32 h-32 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden">
                  <Image
                    src={`/heroes/${heroId}.png`}
                    alt={heroId}
                    fill
                    className="object-cover"
                    onLoad={() => console.log(`${heroId} loaded successfully`)}
                    onError={() => console.log(`${heroId} failed to load`)}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="text-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-epic-text-secondary">Status:</span>
                  {results[heroId] ? (
                    results[heroId].loaded ? (
                      <span className="text-green-400">✅ Loaded</span>
                    ) : (
                      <span className="text-red-400">❌ Failed</span>
                    )
                  ) : (
                    <span className="text-yellow-400">⏳ Not tested</span>
                  )}
                </div>
                
                {results[heroId]?.error && (
                  <div className="text-red-400 text-xs">{results[heroId].error}</div>
                )}
              </div>

              {/* Fallback Test */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-epic-text-secondary mb-2">Fallback Test:</h4>
                <div className="relative w-32 h-32 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden">
                  <Image
                    src={`/heroes/${heroId}.png`}
                    alt={heroId}
                    fill
                    className="object-cover"
                    onError={() => {
                      console.log(`${heroId} fallback triggered`);
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-4xl text-epic-gold">⚔️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {Object.values(results).filter(r => r?.loaded).length}
              </div>
              <div className="text-sm text-epic-text-secondary">Loaded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">
                {Object.values(results).filter(r => r?.loaded === false).length}
              </div>
              <div className="text-sm text-epic-text-secondary">Failed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {Object.values(results).filter(r => !r).length}
              </div>
              <div className="text-sm text-epic-text-secondary">Not Tested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-epic-gold">
                {heroIds.length}
              </div>
              <div className="text-sm text-epic-text-secondary">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 