
"use client"

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { q: "茶葉的最佳沖泡溫度是多少？", a: "不同茶種有不同要求。一般而言，綠茶建議 80°C，烏龍茶建議 90-95°C，紅茶則可以使用 100°C 沸水沖泡。" },
  { q: "你們的茶葉是來自哪裡？", a: "我們的茶葉主要採購自台灣高海拔茶區以及世界各地的永續經營茶園，確保每一片茶葉都符合我們的最高品質標準。" },
  { q: "產品可以存放多久？", a: "未開封狀態下可保存 2 年。建議存放在乾燥、陰涼、避光且無異味的地方。開封後請於 3 個月內飲用完畢以獲得最佳風味。" },
  { q: "你們提供國際配送嗎？", a: "是的，我們提供全球大部分地區的國際配送服務。運費與配送時間將根據您的具體位置在結帳時計算。" },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl text-primary mb-4">常見問題</h2>
          <p className="text-foreground/60 font-light">如果您有其他疑問，歡迎隨時聯絡我們的客服團隊。</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-primary/10">
              <AccordionTrigger className="text-lg font-headline text-primary py-6 hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed font-light text-base pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
