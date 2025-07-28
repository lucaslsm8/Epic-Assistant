'use client';

import Image from 'next/image';

export default function SimpleTestPage() {
  return (
    <div className="min-h-screen bg-epic-primary p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Simple Image Test</h1>
        
        <div className="glass-card p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Testing Vildred Image</h2>
          
          <div className="relative w-64 h-64 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 rounded-lg overflow-hidden">
            <Image
              src="/heroes/vildred.png"
              alt="Vildred"
              fill
              className="object-cover"
              onLoad={() => console.log('✅ Vildred loaded successfully')}
              onError={() => console.log('❌ Vildred failed to load')}
            />
          </div>
          
          <div className="mt-4 text-sm text-epic-text-secondary">
            Check browser console for load status
          </div>
        </div>
      </div>
    </div>
  );
} 