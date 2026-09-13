"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroAnimation = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
});

export default function HeroAnimationWrapper() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 740px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (isDesktop === null || !isDesktop) {
    return null;
  }

  return <HeroAnimation theme="light" />;
}
