
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    <section className="py-32 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden bg-background">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-primary p-12 text-primary-foreground flex flex-col justify-center">
              <Sparkles className="w-12 h-12 mb-6 text-accent" />
              <h2 className="font-headline text-4xl mb-4">智能侍茶師</h2>
              <p className="opacity-70 font-light leading-relaxed">
                只需告訴我們您的心情、正在享用的美食或當下的時間，我們的 AI 侍茶師將為您挑選最契合的靈魂伴侶。
              </p>
            </div>
            <div className="md:col-span-3 p-12">
              {!recommendation ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">此刻心情</Label>
                    <Input 
                      placeholder="例如：平靜、疲憊、愉悅..." 
                      className="rounded-xl border-border bg-muted/20"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">正在吃什麼？</Label>
                    <Input 
                      placeholder="例如：黑巧克力、草莓蛋糕、牛排..." 
                      className="rounded-xl border-border bg-muted/20"
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-primary font-bold uppercase tracking-widest text-xs">現在時間</Label>
                    <Input 
                      placeholder="例如：慵懶午後、靜謐深夜..." 
                      className="rounded-xl border-border bg-muted/20"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest text-lg transition-all"
                  >
                    {isLoading ? <Loader2 className="animate-spin" /> : "獲取推薦"}
                  </Button>
                </form>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom duration-500">
                  <h3 className="font-headline text-2xl text-primary mb-4">為您推薦：</h3>
                  <div className="p-6 bg-accent/10 rounded-3xl border border-accent/20 mb-8 italic text-foreground/80 leading-relaxed">
                    "{recommendation}"
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setRecommendation('')}
                    className="w-full rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" /> 重新測試
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
