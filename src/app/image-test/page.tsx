'use client';

import { useState } from 'react';
import HeroImage from '@/components/HeroImage';
import { Role } from '@/types/epic-seven';

const testHeroes = [
  { id: 'vildred', name: 'Vildred', role: Role.THIEF },
  { id: 'bellona', name: 'Bellona', role: Role.RANGER },
  { id: 'luna', name: 'Luna', role: Role.WARRIOR },
];

export default function ImageTestPage() {
  const [showLogs, setShowLogs] = useState(false);

  return (
    <div className="min-h-screen bg-epic-primary p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Image Loading Test</h1>
        
        <div className="glass-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Testing Hero Images</h2>
          <p className="text-epic-text-secondary mb-4">
            This page tests the image loading system with fallback to external sources.
            Check the browser console for detailed logs.
          </p>
          
          <button 
            onClick={() => setShowLogs(!showLogs)}
            className="btn-secondary"
          >
            {showLogs ? 'Hide' : 'Show'} Console Instructions
          </button>
          
          {showLogs && (
            <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm">
              <div className="text-green-400 mb-2">Console Logs to Watch:</div>
              <div className="text-epic-text-secondary space-y-1">
                <div>✅ = Image loaded successfully</div>
                <div>❌ = Image failed to load</div>
                <div>⏰ = Timeout, trying external source</div>
                <div>🔄 = Switching to external CDN</div>
                <div>💀 = All sources failed, showing fallback</div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testHeroes.map(hero => (
            <div key={hero.id} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">{hero.name}</h3>
              
              <div className="relative w-full h-48 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden mb-4">
                <HeroImage
                  heroId={hero.id}
                  heroName={hero.name}
                  role={hero.role}
                  className="absolute inset-0"
                  iconSize="text-4xl"
                />
              </div>
              
              <div className="text-sm text-epic-text-secondary">
                <div>ID: {hero.id}</div>
                <div>Role: {hero.role.replace('_', ' ')}</div>
                <div>Status: Check console for details</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <div className="space-y-2 text-epic-text-secondary">
            <div>1. Local First: Tries to load from /heroes/heroId.png</div>
            <div>2. Timeout: If local image takes 5s, switches to external CDN</div>
            <div>3. External CDN: Falls back to Epic7x.com or GamePress</div>
            <div>4. Fallback: Shows role icon if all sources fail</div>
          </div>
        </div>
      </div>
    </div>
  );
} 