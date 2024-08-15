"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface heroItemsProps {
    image: string;
    logo: string;
    series: string;
    voucher: string;
    shop: string;
    icon: LucideIcon;
}

const heroItems = [
    {
        image: "/home/hero1.png",
        logo: "/home/apple-logo.svg",
        series: "IPhone 14 Series",
        voucher: "Up to 10% off Voucher",
        shop: "Shop Now",
        icon: ArrowRight,
    },
    {
        image: "/home/hero1.png",
        logo: "/home/apple-logo.svg",
        series: "IPhone 14 Series",
        voucher: "Up to 10% off Voucher",
        shop: "Shop Now",
        icon: ArrowRight,
    },
    {
        image: "/home/hero1.png",
        logo: "/home/apple-logo.svg",
        series: "IPhone 14 Series",
        voucher: "Up to 10% off Voucher",
        shop: "Shop Now",
        icon: ArrowRight,
    },
] as heroItemsProps[];

export const HeroCard = () => {
    return (
        <div className="w-full">
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: rgba(255, 255, 255, 0.5);
                }
                .swiper-pagination-bullet-active {
                    background-color: #ffffff;
                }
            `}</style>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-[350px] flex justify-center items-center"
            >
                {heroItems.map((hero) => (
                    <SwiperSlide
                        key={hero.shop}
                        className="bg-black dark:bg-white text-white dark:text-black"
                    >
                        <div className="flex justify-between items-center p-4 h-full">
                            <div className="flex flex-col justify-center items-start lg:pl-8 pl-0 space-y-4">
                                <div className="flex items-center gap-x-4">
                                    <Image
                                        src={hero.logo}
                                        alt={hero.logo}
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-sm">{hero.series}</p>
                                </div>
                                <h1 className="lg:text-5xl text-3xl max-w-[290px] font-semibold leading-16 tracking-wide">
                                    {hero.voucher}
                                </h1>
                                <Button
                                    variant="ghost"
                                    className='flex items-center gap-x-2'
                                >
                                    <span className="underline-custom">
                                        {hero.shop}
                                    </span>
                                    <hero.icon className='size-4' />
                                </Button>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={hero.image}
                                    alt={hero.image}
                                    width={480}
                                    height={480}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
