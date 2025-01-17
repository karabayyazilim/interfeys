'use client';

import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ISliderProps {
    images: string[];
    className?: string;
    width?: number;
    height?: number;
    slidesPerView?: number;
    spaceBetween?: number;
}

export default function Slider({ images, width, height, className, slidesPerView = 1, spaceBetween = 20 }: ISliderProps) {
    return (
        <Swiper
            className={className}
            width={width}
            height={height}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
