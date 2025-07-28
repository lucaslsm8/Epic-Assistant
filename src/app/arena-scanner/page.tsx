'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Target, 
  Upload,
  Zap,
  Users,
  Brain,
  CheckCircle,
  AlertCircle,
  Camera,
  FileImage,
  Sparkles
} from 'lucide-react';

export default function ArenaScannerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        enemyTeam: [
          { name: 'Belian', confidence: 98, threat: 'High' },
          { name: 'Cilias', confidence: 95, threat: 'Medium' },
          { name: 'Politis', confidence: 92, threat: 'High' },
          { name: 'ML Ken', confidence: 89, threat: 'Medium' }
        ],
        counters: [
          { name: 'Hwayoung', winRate: 87, reason: 'True damage bypasses Belian' },
          { name: 'Ran', winRate: 82, reason: 'Speed control against team' },
          { name: 'Peira', winRate: 79, reason: 'Strip and control' }
        ],
        strategy: 'Focus Belian first with true damage, then control the team with speed manipulation.'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-epic-gold/20 to-epic-gold-dim/20 backdrop-blur-sm border border-epic-gold/20 rounded-full px-6 py-3 mb-6">
              <Brain className="w-5 h-5 text-epic-gold" />
              <span className="text-sm font-medium text-white">AI-Powered Analysis</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Arena <span className="text-gradient">Scanner</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Upload a screenshot of enemy arena team and get AI-powered counter suggestions with 95% accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-epic-gold" />
                  <h2 className="text-2xl font-bold text-white">Upload Arena Screenshot</h2>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-epic-gold/30 rounded-xl p-8 text-center hover:border-epic-gold/50 transition-all duration-200">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-2xl flex items-center justify-center mx-auto">
                        {selectedFile ? (
                          <CheckCircle className="w-8 h-8 text-black" />
                        ) : (
                          <Upload className="w-8 h-8 text-black" />
                        )}
                      </div>
                      
                      <div>
                        <p className="text-lg font-medium text-white">
                          {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-epic-text-secondary">
                          PNG, JPG, WebP up to 10MB
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Tips */}
                <div className="mt-6 p-4 bg-epic-secondary/50 rounded-xl border border-epic-gold/20">
                  <div className="flex items-start space-x-3">
                    <Camera className="w-5 h-5 text-epic-gold mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Tips for best results:</h3>
                      <ul className="text-sm text-epic-text-secondary space-y-1">
                        <li>• Clear screenshot of enemy team formation</li>
                        <li>• Heroes should be clearly visible</li>
                        <li>• Include artifacts if visible</li>
                        <li>• Avoid cropped or blurry images</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analyze Button */}
                <button
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full mt-6 btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing with AI...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Analyze Team</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {analysisResult ? (
                <>
                  {/* Enemy Team Analysis */}
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-6">
                      <Users className="w-6 h-6 text-epic-gold" />
                      <h3 className="text-xl font-bold text-white">Detected Team</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {analysisResult.enemyTeam.map((hero: any, index: number) => (
                        <div key={index} className="p-4 bg-epic-secondary/50 rounded-xl border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white">{hero.name}</h4>
                            <span className="text-xs text-epic-gold font-medium">
                              {hero.confidence}% confidence
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              hero.threat === 'High' ? 'bg-red-400' : 
                              hero.threat === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'
                            }`} />
                            <span className="text-sm text-epic-text-secondary">
                              {hero.threat} Threat
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Counter Suggestions */}
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-6">
                      <Zap className="w-6 h-6 text-epic-gold" />
                      <h3 className="text-xl font-bold text-white">Recommended Counters</h3>
                    </div>

                    <div className="space-y-4">
                      {analysisResult.counters.map((counter: any, index: number) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-epic-gold/10 to-epic-gold-dim/10 rounded-xl border border-epic-gold/20">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white">{counter.name}</h4>
                            <span className="px-2 py-1 bg-gradient-to-r from-epic-gold to-epic-gold-dim text-black text-xs font-bold rounded-lg">
                              {counter.winRate}% Win Rate
                            </span>
                          </div>
                          <p className="text-sm text-epic-text-secondary">
                            {counter.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategy */}
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-4">
                      <Brain className="w-6 h-6 text-epic-gold" />
                      <h3 className="text-xl font-bold text-white">AI Strategy</h3>
                    </div>
                    <p className="text-epic-text-secondary leading-relaxed">
                      {analysisResult.strategy}
                    </p>
                  </div>
                </>
              ) : (
                /* Placeholder */
                <div className="glass-card">
                  <div className="text-center py-12">
                    <FileImage className="w-16 h-16 text-epic-text-tertiary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No Analysis Yet</h3>
                    <p className="text-epic-text-secondary">
                      Upload an arena screenshot to get AI-powered counter suggestions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Why Use Arena Scanner?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">95% Accuracy</h3>
                <p className="text-epic-text-secondary text-sm">
                  Advanced ML models trained on thousands of arena matches for precise hero detection.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Instant Analysis</h3>
                <p className="text-epic-text-secondary text-sm">
                  Get counter suggestions in seconds, not minutes. Perfect for live arena battles.
                </p>
              </div>

              <div className="glass-card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-epic-gold to-epic-gold-dim rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meta Awareness</h3>
                <p className="text-epic-text-secondary text-sm">
                  Always updated with current meta strategies and optimal counter compositions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 