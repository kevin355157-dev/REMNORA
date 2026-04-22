
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
      <div className="mb-8 w-32 h-32 relative overflow-hidden rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-primary/10">
         {logo && (
           <Image 
             src={logo.imageUrl} 
             alt={logo.description} 
             width={128} 
             height={128} 
             className="w-full h-full object-contain p-4"
             data-ai-hint="brand logo"
           />
         )}
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
