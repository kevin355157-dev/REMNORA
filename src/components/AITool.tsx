
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { aiTeaSuggestion } from '@/ai/flows/ai-tea-suggestion-flow';

export function AITool() {
  const [mood, setMood] = useState('');
  const [food, setFood] = useState('');
  const [time, setTime] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await aiTeaSuggestion({ mood, foodChoices: food, timeOfDay: time });
      setRecommendation(res.recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-48 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-background">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-primary p-16 text-primary-foreground flex flex-col justify-center">
              <Sparkles className="w-16 h-16 mb-8 text-accent animate-pulse" />
              <h2 className="font-headline text-5xl mb-6 leading-tight">智能侍茶師</h2>
              <p className="opacity-80 font-light leading-relaxed text-lg">
                只需告訴我們您的心情、正在享用的美食或當下的時間，我們的 AI 侍茶師將為您挑選最契合的靈魂伴侶。
              </p>
            </div>
            <div className="md:col-span-3 p-16 bg-white/50 backdrop-blur-sm">
              {!recommendation ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">此刻心情</Label>
                    <Input 
                      placeholder="例如：平靜、疲憊、愉悅..." 
                      className="rounded-2xl border-primary/10 bg-white h-14 px-6 text-lg"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">正在吃什麼？</Label>
                    <Input 
                      placeholder="例如：黑巧克力、草莓蛋糕..." 
                      className="rounded-2xl border-primary/10 bg-white h-14 px-6 text-lg"
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">現在時間</Label>
                    <Input 
                      placeholder="例如：慵懶午後、靜謐深夜..." 
                      className="rounded-2xl border-primary/10 bg-white h-14 px-6 text-lg"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-[0.2em] text-xl transition-all shadow-xl shadow-primary/20"
                  >
                    {isLoading ? <Loader2 className="animate-spin" /> : "獲取靈感"}
                  </Button>
                </form>
              ) : (
                <div className="animate-in fade-in zoom-in duration-700">
                  <h3 className="font-headline text-3xl text-primary mb-6">為您推薦：</h3>
                  <div className="p-8 bg-accent/20 rounded-[2rem] border border-accent/30 mb-10 italic text-foreground/90 leading-loose text-xl shadow-inner">
                    "{recommendation}"
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setRecommendation('')}
                    className="w-full rounded-full h-14 border-primary text-primary hover:bg-primary hover:text-white font-bold tracking-widest"
                  >
                    <RefreshCw className="w-5 h-5 mr-3" /> 重新探索
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
