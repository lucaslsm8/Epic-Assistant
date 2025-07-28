'use client';

import { useState } from 'react';
import { getRoleIcon } from '@/lib/heroDatabase';
import { Role } from '@/types/epic-seven';

interface HeroImageProps {
  heroId: string;
  heroName: string;
  role: Role;
  className?: string;
  iconSize?: string;
  isML?: boolean;
}

// Hero colors for fallback
const getHeroColor = (heroId: string): string => {
  const colors: Record<string, string> = {
    'vildred': 'from-orange-600 to-red-600',
    'arbiter-vildred': 'from-purple-600 to-violet-600',
    'bellona': 'from-green-600 to-emerald-600',
    'luna': 'from-blue-600 to-indigo-600',
    'ruele-of-light': 'from-yellow-400 to-amber-500',
    'fallen-cecilia': 'from-purple-600 to-violet-600',
    'tamarinne': 'from-pink-500 to-rose-500',
    'iseria': 'from-teal-500 to-cyan-500',
  };
  
  return colors[heroId] || 'from-gray-600 to-gray-700';
};

export default function HeroImage({ 
  heroId, 
  heroName, 
  role, 
  className = "w-full h-full", 
  iconSize = "text-6xl",
  isML = false 
}: HeroImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const imageUrl = `/heroes/${heroId}.png`;
  const heroColor = getHeroColor(heroId);
  
  const handleImageError = () => {
    console.log(`❌ Image failed to load for ${heroId}: ${imageUrl}`);
    setImageError(true);
    setIsLoading(false);
  };
  
  const handleImageLoad = () => {
    console.log(`✅ Image loaded successfully for ${heroId}: ${imageUrl}`);
    setImageError(false);
    setIsLoading(false);
  };

  // Show fallback icon if image failed to load
  if (imageError) {
    return (
      <div className={`relative ${className}`}>
        <div className={`w-full h-full bg-gradient-to-br ${heroColor} flex items-center justify-center rounded-lg relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-2 w-8 h-8 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border border-white/20 rounded-full"></div>
          </div>
          
          {/* Hero icon and info */}
          <div className="text-center z-10">
            <span className={`${iconSize} text-white block mb-2 drop-shadow-lg`}>
              {getRoleIcon(role)}
            </span>
            <div className="text-white text-xs font-medium">
              <div className="font-bold">{heroName}</div>
              <div className="opacity-80 capitalize">{role.replace('_', ' ')}</div>
            </div>
          </div>
          
          {/* ML Badge */}
          {isML && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              ML
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show real image
  return (
    <div className={`relative ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-epic-gold/20 to-epic-gold-dim/20 flex items-center justify-center z-10 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-epic-gold mx-auto mb-2"></div>
            <span className="text-xs text-epic-text-secondary">Loading...</span>
          </div>
        </div>
      )}
      
      {/* Real hero image */}
      <img
        src={imageUrl}
        alt={heroName}
        className="w-full h-full object-cover rounded-lg"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      
      {/* ML Badge for real images */}
      {isML && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          ML
        </div>
      )}
    </div>
  );
} 