"use client";

import Lottie from "lottie-react";
import heroAnimation from "@/public/lottie/hero-animation.json";

const HeroAnimation = () => {
  return (
    <Lottie animationData={heroAnimation} autoplay loop className="h-[600px]" />
  );
};

export default HeroAnimation;
