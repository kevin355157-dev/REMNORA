
"use client"

import React, { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="mb-8 w-24 h-24 relative overflow-hidden rounded-full">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.image2url.com/r2/default/videos/1776863256110-2f96f72b-8575-4aaa-a9da-ded84494e6c9.webm" type="video/webm" />
          </video>
      </div>
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-primary progress-bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-headline text-primary text-xl font-medium">{progress}%</p>
    </div>
  );
}
