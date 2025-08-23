"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      img: "/pexels-goumbik-292999.jpg",
      title: "Step Into Style",
      promo: "Discover the latest sneaker trends and elevate your streetwear look with our curated collection of stylish and comfortable shoes.",
    },
    {
      img: "/pexels-pixabay-60619.jpg",
      title: "Run With Comfort",
      promo: "Experience unmatched comfort with every step. Our premium shoes combine innovative design with ergonomic support for your active lifestyle.",
    },
    {
      img: "/pexels-pluyar-786003.jpg",
      title: "Urban Vibes",
      promo: "Make a statement with bold designs that fit your urban lifestyle. Shop the latest releases and set your style apart.",
    },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay with blur */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 
                              bg-black/40">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base text-white mb-6 max-w-3xl drop-shadow-md">
                  {slide.promo}
                </p>
                <button className="btn btn-outline btn-lg rounded-2xl text-white border-white hover:bg-white hover:text-black transition-all">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

