import { Bell, Github, Download } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/50 fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Bell className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">StartupSound</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it works</a>
        <a href="https://github.com/shethshlok/StartupSoundMac" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a href="/assets/StartupSound.dmg">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          Download
        </button>
        </a>
      </div>
    </nav>
  );
}