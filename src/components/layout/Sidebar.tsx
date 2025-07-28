'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  Shield, 
  Target, 
  Zap, 
  BarChart3, 
  Swords, 
  PlayCircle,
  Settings,
  Menu,
  X,
  Sword
} from 'lucide-react';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: Home,
    description: 'Visão geral'
  },
  {
    name: 'Heroes',
    href: '/heroes',
    icon: Users,
    description: 'Database de heróis'
  },
  {
    name: 'Artifacts', 
    href: '/artifacts',
    icon: Shield,
    description: 'Database de artefatos'
  },
  {
    name: 'Arena Scanner',
    href: '/arena-scanner',
    icon: Target,
    description: 'AI Scanner'
  },
  {
    name: 'Build Optimizer',
    href: '/build-optimizer',
    icon: Zap,
    description: 'Otimizar os builds'
  },
  {
    name: 'RTA Analytics',
    href: '/rta-analytics',
    icon: BarChart3,
    description: 'Análise meta RTA'
  },
  {
    name: 'Guild Wars',
    href: '/guild-wars',
    icon: Swords,
    description: 'Guerra de guilda'
  },
  {
    name: 'Video Guides',
    href: '/video-guides',
    icon: PlayCircle,
    description: 'Guias em vídeo'
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    description: 'Configurações'
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-btn lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-screen w-72 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        sidebar overflow-hidden
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white border-opacity-10 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center shadow-lg">
                <Sword className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Epic Seven</h1>
                <p className="text-sm text-epic-text-secondary">Assistant</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black shadow-lg' 
                        : 'text-epic-text-secondary hover:text-white hover:bg-white hover:bg-opacity-10'
                      }
                    `}
                  >
                    <Icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-black' : 'text-epic-text-secondary group-hover:text-white'}`} />
                    <div className="flex-1">
                      <div className={`${isActive ? 'text-black' : 'text-white'}`}>
                        {item.name}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-black text-opacity-70' : 'text-epic-text-secondary'}`}>
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 