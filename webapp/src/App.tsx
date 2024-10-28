import React from 'react';
import { Volume2, Lock, Bell, Settings, Download, Shield, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SoundPreview } from './components/SoundPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto flex items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 blur-3xl opacity-10 rounded-full transform -translate-y-1/2"></div>
              <h1 className="relative text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock your Mac with <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Style</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Add personality to your Mac with custom unlock sounds. Choose from our curated collection or use your own. Simple, lightweight, and seamlessly integrated.
            </p>
            <div className="flex items-center gap-4">
              <a href="/assets/StartupSound.dmg" download className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/20 group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download for macOS
              </a>
              <div className="text-sm text-gray-500">
                Version 1.0.0 • Free
                <br />
                Requires macOS 12.0 or later
              </div>
            </div>
          </div>
            <div className="flex-1">
            <video 
              src="/assets/video.mov" 
              controls 
              className="rounded-2xl shadow-2xl shadow-blue-500/20 transform hover:scale-[1.02] transition-transform duration-300"
            />
            </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              StartupSound runs silently in the background, playing your chosen sound every time you unlock your Mac
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">1. Install StartupSound</h3>
              <p className="text-gray-500 text-sm">Download and install our lightweight app</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Volume2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">2. Choose your sound</h3>
              <p className="text-gray-500 text-sm">Select from our collection or add your own</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">3. Unlock and enjoy</h3>
              <p className="text-gray-500 text-sm">Your sound plays automatically on unlock</p>
            </div>
          </div>
        </div>
      </section>


      {/* Security Notice */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Privacy & Security</h3>
                <p className="text-blue-100 leading-relaxed">
                  StartupSound runs entirely on your Mac without any internet connection required. 
                  We don't collect any data or track your usage. Your security is our priority, 
                  which is why we've made the app open-source and available for audit on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">StartupSound</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">How it works</a>
              <a href="#sounds" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Sounds</a>
              <a href="https://github.com" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">GitHub</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 StartupSound. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;