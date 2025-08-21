"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // ✅ correct import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      img: "/pexels-goumbik-292999.jpg",
      title: "Step Into Style",
      promo: "Discover the latest trends in sneakers",
    },
    {
      img: "/pexels-pixabay-60619.jpg",
      title: "Run With Comfort",
      promo: "Experience ultimate comfort with every step",
    },
    {
      img: "/pexels-pluyar-786003.jpg",
      title: "Urban Vibes",
      promo: "Make your street style stand out",
    },
  ];

  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 
                bg-black/40">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    {slide.title}
  </h1>
  <p className="text-lg md:text-2xl text-white mb-6">{slide.promo}</p>
  <button className="btn btn-primary btn-lg">Explore</button>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
