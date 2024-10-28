import React, { useState } from 'react';
import { Play, VolumeX } from 'lucide-react';

interface SoundPreviewProps {
  name: string;
  description: string;
}

export function SoundPreview({ name, description }: SoundPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 flex items-center gap-6 border border-gray-100 hover:border-blue-200 transition-colors group">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
      >
        {isPlaying ? (
          <VolumeX className="w-6 h-6 text-blue-600" />
        ) : (
          <Play className="w-6 h-6 text-blue-600" />
        )}
      </button>
      <div>
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}