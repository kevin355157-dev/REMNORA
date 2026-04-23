
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

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
      <div className="mb-12 w-64 h-auto relative flex items-center justify-center animate-pulse">
         {logo && (
           <Image 
             src={logo.imageUrl} 
             alt={logo.description} 
             width={1341} 
             height={362} 
             className="w-full h-auto object-contain"
             data-ai-hint="brand logo"
           />
         )}
      </div>
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-headline text-primary text-xl font-medium tracking-widest">{progress}%</p>
    </div>
  );
}
