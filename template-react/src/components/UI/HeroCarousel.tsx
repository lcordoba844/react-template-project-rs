import { useState, useEffect } from "react";
import fotoSlide0 from "../../assets/dubai123.jpg";
import fotoSlide1 from "../../assets/19bb0fc2c7ce-dubai-panoramica-t.jpg";
import fotoSlide2 from "../../assets/foto_fondo.jpg";

export default function HeroCarousel() {
  const slides = [fotoSlide0, fotoSlide1, fotoSlide2];

  const [current, setCurrent] = useState(0);

  // autoplay cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Fondo carrusel */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}