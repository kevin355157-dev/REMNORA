
"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const notes = [
  { 
    title: '前調 (Top Note)', 
    subtitle: '草本與清新', 
    desc: '初入唇齒的瞬間，是如晨露般剔透的綠茶清香與野薄荷的凉意。',
    img: 'https://picsum.photos/seed/herb1/400/300'
  },
  { 
    title: '中調 (Middle Note)', 
    subtitle: '花香與溫潤', 
    desc: '茶湯滑過喉間，隱約透出白玉蘭的幽雅與烏龍茶特有的岩骨花香。',
    img: 'https://picsum.photos/seed/herb2/400/300'
  },
  { 
    title: '後調 (Base Note)', 
    subtitle: '木質與回甘', 
    desc: '飲畢，舌根生津，餘韻繚繞著淡雅的檀香與老樅的沉穩底蘊。',
    img: 'https://picsum.photos/seed/herb3/400/300'
  },
];

export function TeaIntro() {
  return (
    <section id="tea-intro" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <img src="https://picsum.photos/seed/leaves/1000/1000" alt="bg" className="w-[800px] rotate-45" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl md:text-6xl mb-6">三階段感官之旅</h2>
          <p className="max-w-2xl mx-auto opacity-70 font-light text-lg">
            我們以調香師的視角，為每一款茶定義了獨特的層次感。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note) => (
            <Card key={note.title} className="bg-white/5 border-white/10 text-primary-foreground backdrop-blur-sm hover:bg-white/10 transition-colors border-none rounded-3xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={note.img} alt={note.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl mb-1">{note.title}</h3>
                <p className="text-secondary text-sm mb-4 font-bold tracking-widest">{note.subtitle}</p>
                <p className="opacity-70 font-light leading-relaxed">{note.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
