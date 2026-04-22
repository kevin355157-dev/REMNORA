
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const products = [
  { id: 1, name: '拾情話憶 - 經典原味', price: 1280, category: '綠茶', img: 'https://media.discordapp.net/attachments/1332392764947693670/1496503354090852373/Gemini_Generated_Image_7i0lrv7i0lrv7i0l.png_20260422205366.jpg?ex=69ea1edb&is=69e8cd5b&hm=c10b152b78d73cb439b09169c284698b81fef42119ee553b86229b48580bc9fb&' },
  { id: 2, name: '清翠之林 - 森林呼吸', price: 1450, category: '烏龍', img: 'https://media.discordapp.net/attachments/1332392764947693670/1496503370104443051/Gemini_Generated_Image_7i0lrv7i0lrv7i0l.png_202604222053965956.jpg?ex=69ea1edf&is=69e8cd5f&hm=3366a90acd8d5b81e98ed246929e173286b61f9e160586a97729daa8e2a523e9&' },
  { id: 3, name: '暖陽茶座 - 恬靜時光', price: 1100, category: '白茶', img: 'https://media.discordapp.net/attachments/1332392764947693670/1496503404237815961/Gemini_Generated_Image_7i0lrv7i0lrv7i0l.png_202604222053.jpeg?ex=69ea1ee7&is=69e8cd67&hm=01e5cbaa427c301f17b02cd69b87ec1a7ec8347f006a8a6331c4888f5c9e22c5&' },
  { id: 4, name: '月光漫步 - 舒緩好眠', price: 1680, category: '草本', img: 'https://media.discordapp.net/attachments/1332392764947693670/1496503404237815961/Gemini_Generated_Image_7i0lrv7i0lrv7i0l.png_202604222053.jpeg?ex=69ea1ee7&is=69e8cd67&hm=01e5cbaa427c301f17b02cd69b87ec1a7ec8347f006a8a6331c4888f5c9e22c5&' },
];

export function Products({ onAddToCart }: { onAddToCart: (product: any) => void }) {
  const { toast } = useToast();

  const handleAdd = (product: any) => {
    onAddToCart(product);
    toast({
      title: "已加入購物車",
      description: `${product.name} 已成功加入您的清單。`,
    });
  };

  return (
    <section id="products" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Collection</span>
            <h2 className="font-headline text-5xl md:text-6xl text-primary mt-4">嚴選系列茶品</h2>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-bold tracking-widest hover:no-underline">
            查看所有商品 →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted mb-6 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <Button 
                  onClick={() => handleAdd(product)}
                  className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl bg-primary text-white"
                >
                  <ShoppingBag className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-1">
                <Badge variant="secondary" className="bg-accent/30 text-primary border-none mb-2 rounded-full px-4">{product.category}</Badge>
                <h3 className="font-headline text-2xl text-primary group-hover:text-primary/70 transition-colors">{product.name}</h3>
                <p className="text-foreground/50 text-sm font-medium tracking-widest uppercase">NT$ {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
