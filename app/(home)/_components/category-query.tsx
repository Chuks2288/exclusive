"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { categoryQueryItems } from '@/data';
import { CategoryQueryCard } from './category-query-card';

export const CategoryQuery = () => {
    return (
        <div className="relative w-full">
            <Swiper
                spaceBetween={10}
                navigation={{
                    nextEl: '.category-next',  // Unique class name for next button
                    prevEl: '.category-prev',  // Unique class name for prev button
                }}
                grabCursor={true}
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="categorySwiper"  // Ensure Swiper takes full height
            >
                {categoryQueryItems.map((category) => (
                    <SwiperSlide
                        key={category.category}
                        className="h-full flex items-center justify-center"
                    >
                        <CategoryQueryCard
                            name={category.category}
                            icon={category.imageIcon}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation arrows */}
            <div className="category-prev w-6 h-6 mx-4 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-4 -translate-y-1/2 cursor-pointer z-10">
                <ArrowLeft className='text-black dark:text-white size-4' />
            </div>
            <div className="category-next w-6 h-6 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-0 -translate-y-1/2 cursor-pointer z-10">
                <ArrowRight className='text-black dark:text-white size-4' />
            </div>
        </div>
    );
};
