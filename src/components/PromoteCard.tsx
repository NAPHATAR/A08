"use client"

import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import useWindowListener from '../hooks/useWindowListener';

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  useWindowListener('contextmenu', (e) => {
    e.preventDefault();
  });

  return (
    <div className="bg-[#f5e7d3] rounded-lg p-4 shadow-md w-full my-4">
      <div className="flex items-center space-x-4">
        <div className="w-1/2 bg-white rounded-lg p-2">
          <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={isPlaying} />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-[#8b4513]">Get your vaccine today.</h2>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#4a90e2] text-white px-6 py-2 rounded-full hover:bg-[#3a7bd5] transition-colors duration-200"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  );
}