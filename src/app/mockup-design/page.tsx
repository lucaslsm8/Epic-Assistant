'use client';

import Layout from '@/components/layout/Layout';
import { 
  Palette,
  Eye,
  Layers,
  Sparkles,
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function MockupDesignPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <Palette className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">Design System Refinado</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Design <span className="text-gradient">Mockup</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Consulte o design system refinado que implementamos baseado no CeciliaBot elegante.
            </p>
          </div>

          {/* Design Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="glass-card">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Design Anterior</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Cores Saturadas</div>
                      <div className="text-blue-200 text-sm">Blue/Purple gradients</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="text-red-400">❌ Cores muito vibrantes (blue-600, purple-600)</div>
                  <div className="text-red-400">❌ Contraste excessivo</div>
                  <div className="text-red-400">❌ Menos elegante</div>
                  <div className="text-red-400">❌ Tipografia menos refinada</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="glass-card">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-6 h-6 text-epic-gold" />
                <h3 className="text-xl font-bold text-white">Design Refinado</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-epic-gold/10 to-epic-gold-dim/10 rounded-xl border border-epic-gold/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Dourado Elegante</div>
                      <div className="text-epic-gold text-sm">#c9a96e / #8a7a5c</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="text-epic-gold">✅ Cores elegantes e sutis</div>
                  <div className="text-epic-gold">✅ Glass morphism refinado</div>
                  <div className="text-epic-gold">✅ Design profissional</div>
                  <div className="text-epic-gold">✅ Tipografia Inter moderna</div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="glass-card mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="w-6 h-6 text-epic-gold" />
              <h3 className="text-xl font-bold text-white">Paleta de Cores Refinada</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Background Principal', color: '#0a0a0a', var: '--bg-primary' },
                { name: 'Cards e Elementos', color: '#111111', var: '--bg-secondary' },
                { name: 'Hover States', color: '#1a1a1a', var: '--bg-tertiary' },
                { name: 'Dourado Elegante', color: '#c9a96e', var: '--accent-gold' },
                { name: 'Dourado Escurecido', color: '#8a7a5c', var: '--accent-gold-dim' },
                { name: 'Texto Principal', color: '#ffffff', var: '--text-primary' },
                { name: 'Texto Secundário', color: '#a0a0a0', var: '--text-secondary' },
                { name: 'Texto Terciário', color: '#666666', var: '--text-tertiary' }
              ].map((colorItem, index) => (
                <div key={index} className="p-4 bg-epic-secondary/30 rounded-xl border border-white/10">
                  <div 
                    className="w-full h-16 rounded-lg mb-3"
                    style={{ backgroundColor: colorItem.color }}
                  />
                  <div className="text-white font-medium text-sm">{colorItem.name}</div>
                  <div className="text-epic-text-secondary text-xs font-mono">{colorItem.color}</div>
                  <div className="text-epic-gold text-xs">{colorItem.var}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Glass Morphism Examples */}
          <div className="glass-card mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="w-6 h-6 text-epic-gold" />
              <h3 className="text-xl font-bold text-white">Glass Morphism Refinado</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-glass-light backdrop-blur-[20px] border border-white/10 rounded-xl">
                <h4 className="text-white font-medium mb-2">Glass Light</h4>
                                 <p className="text-epic-text-secondary text-sm">
                   background: rgba(255, 255, 255, 0.02)<br />
                   backdrop-filter: blur(20px)
                 </p>
              </div>

              <div className="p-6 bg-glass-medium backdrop-blur-[20px] border border-white/10 rounded-xl">
                <h4 className="text-white font-medium mb-2">Glass Medium</h4>
                                 <p className="text-epic-text-secondary text-sm">
                   background: rgba(255, 255, 255, 0.05)<br />
                   backdrop-filter: blur(20px)
                 </p>
              </div>

              <div className="p-6 bg-glass-strong backdrop-blur-[24px] border border-white/12 rounded-xl">
                <h4 className="text-white font-medium mb-2">Glass Strong</h4>
                                 <p className="text-epic-text-secondary text-sm">
                   background: rgba(255, 255, 255, 0.08)<br />
                   backdrop-filter: blur(24px)
                 </p>
              </div>
            </div>
          </div>

          {/* Components Showcase */}
          <div className="glass-card mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-6 h-6 text-epic-gold" />
              <h3 className="text-xl font-bold text-white">Componentes Refinados</h3>
            </div>

            <div className="space-y-8">
              {/* Buttons */}
              <div>
                <h4 className="text-white font-medium mb-4">Botões</h4>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary px-6 py-3">
                    Botão Primário
                  </button>
                  <button className="btn-secondary px-6 py-3">
                    Botão Secundário
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="text-white font-medium mb-4">Cards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="hero-card">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Hero Card</div>
                        <div className="text-epic-text-secondary text-sm">Com hover refinado</div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Glass Card</div>
                        <div className="text-epic-text-secondary text-sm">Background sutil</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="glass-card">
            <div className="flex items-center space-x-3 mb-6">
              <ArrowRight className="w-6 h-6 text-epic-gold" />
              <h3 className="text-xl font-bold text-white">Guia de Implementação</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">CSS Variables</h4>
                <div className="p-4 bg-epic-secondary/50 rounded-xl border border-white/10 font-mono text-sm">
                  <div className="text-epic-text-secondary">:root {'{'}</div>
                  <div className="text-epic-gold ml-2">--bg-primary: #0a0a0a;</div>
                  <div className="text-epic-gold ml-2">--accent-gold: #c9a96e;</div>
                  <div className="text-epic-gold ml-2">--accent-gold-dim: #8a7a5c;</div>
                  <div className="text-epic-text-secondary">{'}'}</div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-4">Tailwind Classes</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-epic-gold">epic-gold</span> - Dourado principal</div>
                  <div><span className="text-epic-gold">epic-gold-dim</span> - Dourado escurecido</div>
                  <div><span className="text-epic-gold">epic-text-secondary</span> - Texto secundário</div>
                  <div><span className="text-epic-gold">glass-card</span> - Card com glass morphism</div>
                  <div><span className="text-epic-gold">btn-primary</span> - Botão principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 