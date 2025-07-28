'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Settings, 
  User,
  Palette,
  Bell,
  Shield,
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="container-epic py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-epic-text-secondary text-lg max-w-2xl mx-auto">
              Customize your Epic Seven Assistant experience with these configuration options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Settings Menu */}
            <div className="lg:col-span-1">
              <div className="glass-card">
                <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
                <nav className="space-y-2">
                  {[
                    { id: 'general', name: 'General', icon: Settings },
                    { id: 'appearance', name: 'Appearance', icon: Palette },
                    { id: 'notifications', name: 'Notifications', icon: Bell },
                    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
                    { id: 'data', name: 'Data Management', icon: Download }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left hover:bg-epic-gold/10 hover:border-epic-gold/30 border border-transparent transition-all duration-200 group"
                      >
                        <Icon className="w-5 h-5 text-epic-text-tertiary group-hover:text-epic-gold" />
                        <span className="text-epic-text-secondary group-hover:text-white">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* General Settings */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">General Settings</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Auto-save preferences</label>
                      <p className="text-epic-text-secondary text-sm">Automatically save your settings and preferences</p>
                    </div>
                    <button
                      onClick={() => setAutoSave(!autoSave)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        autoSave ? 'bg-epic-gold' : 'bg-epic-secondary'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          autoSave ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Language</label>
                      <p className="text-epic-text-secondary text-sm">Choose your preferred language</p>
                    </div>
                    <select className="bg-epic-secondary border border-white/10 rounded-lg px-3 py-2 text-white focus:border-epic-gold focus:ring-1 focus:ring-epic-gold">
                      <option>English</option>
                      <option>Português</option>
                      <option>한국어</option>
                      <option>日本語</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Appearance */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">Appearance</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Dark mode</label>
                      <p className="text-epic-text-secondary text-sm">Use dark theme for better viewing experience</p>
                    </div>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        darkMode ? 'bg-epic-gold' : 'bg-epic-secondary'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          darkMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <label className="text-white font-medium">Theme Color</label>
                    <p className="text-epic-text-secondary text-sm mb-3">Current: Epic Gold Refined</p>
                    <div className="flex space-x-3">
                      {[
                        { name: 'Epic Gold', color: 'from-epic-gold to-epic-gold-dim' },
                        { name: 'Blue', color: 'from-blue-500 to-cyan-500' },
                        { name: 'Purple', color: 'from-purple-500 to-pink-500' },
                        { name: 'Green', color: 'from-green-500 to-emerald-500' }
                      ].map((theme) => (
                        <button
                          key={theme.name}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.color} hover:scale-110 transition-transform duration-200`}
                          title={theme.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Bell className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">Notifications</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Push notifications</label>
                      <p className="text-epic-text-secondary text-sm">Get notified about meta changes and updates</p>
                    </div>
                    <button
                      onClick={() => setNotifications(!notifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications ? 'bg-epic-gold' : 'bg-epic-secondary'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {[
                      'New hero releases',
                      'Meta updates',
                      'Arena scanner improvements',
                      'Build optimizer results'
                    ].map((item) => (
                      <label key={item} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-epic-gold bg-epic-secondary border-white/20 rounded focus:ring-epic-gold focus:ring-2"
                          defaultChecked
                        />
                        <span className="text-white">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Management */}
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Download className="w-6 h-6 text-epic-gold" />
                  <h3 className="text-xl font-bold text-white">Data Management</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="btn-secondary flex items-center justify-center space-x-2 py-3">
                      <Download className="w-4 h-4" />
                      <span>Export Data</span>
                    </button>
                    <button className="btn-secondary flex items-center justify-center space-x-2 py-3">
                      <Upload className="w-4 h-4" />
                      <span>Import Data</span>
                    </button>
                  </div>

                  <div className="p-4 bg-red-600/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <Trash2 className="w-5 h-5 text-red-400" />
                      <span className="text-red-400 font-medium">Danger Zone</span>
                    </div>
                    <p className="text-epic-text-secondary text-sm mb-4">
                      Clear all your saved data including builds, preferences, and scan history.
                    </p>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200">
                      Clear All Data
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button className="btn-primary flex items-center space-x-2 px-6 py-3">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 