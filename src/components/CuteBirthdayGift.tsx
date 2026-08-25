"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import { birthdayConfig } from "@/data/birthday";

const letters = (word: string, start: number) => word.split("").map((letter, index) => (
  <span key={index} style={{ animationDelay: `${start + index * 90}ms` }}>{letter}</span>
));

export function CuteBirthdayGift() {
  return <div className="cute-gift-scene" aria-label={`A birthday card for ${birthdayConfig.name}`}>
    <div className="gift-flags" aria-hidden="true"><Image src="/gift/flag.png" alt="" width={220} height={95}/><Image src="/gift/flag.png" alt="" width={220} height={95}/></div>
    <i className="gift-star one">✦</i><i className="gift-star two">✦</i><i className="gift-star three">✦</i>
    <div className="gift-copy"><div className="gift-title"><h3>{letters("Happy", 100)}</h3><h3>{letters("Birthday", 560)}</h3><Image className="gift-hat" src="/gift/hat.png" alt="" width={84} height={84}/></div><p className="gift-name"><Heart fill="currentColor" size={15}/>{birthdayConfig.name}<Heart fill="currentColor" size={15}/></p></div>
    <div className="gift-photo-wrap"><Image className="gift-balloon rose" src="/gift/balloon-rose.png" alt="" width={70} height={100}/><Image className="gift-balloon purple" src="/gift/balloon-purple.png" alt="" width={70} height={100}/><div className="gift-photo"><Image src="/gift/portrait.png" alt="A birthday keepsake" width={250} height={250}/></div><div className="gift-seal"><span>happy · birthday · happy · birthday · </span><Heart fill="currentColor" size={25}/></div></div>
  </div>;
}
