"use client";

import { useEffect, useState } from "react";

type HeroSliderProps = {
  images: string[];
  mainCopy: string;
  subCopy: string;
  hostMessage: string;
};

export function HeroSlider({ images, mainCopy, subCopy, hostMessage }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" aria-label="LIFE ARTS LIVE メインビジュアル">
      <div className="hero__slides" aria-hidden="true">
        {images.map((image, index) => (
          <div
            className={`hero__slide ${index === current ? "is-active" : ""}`}
            key={image}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__copy">{mainCopy}</p>
        <p className="hero__subcopy">{subCopy}</p>
        <p className="hero__message">{hostMessage}</p>
        <a className="hero__scroll" href="#about">
          Scroll
        </a>
      </div>
    </section>
  );
}
