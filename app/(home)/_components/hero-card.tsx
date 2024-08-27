"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SafeIphoneListing } from '@/types';

type Props = {
    products: any;
}

export const HeroCard = ({
    products
}: Props) => {

    const iphonesQuery = products.slice(0, 3);

    const onClick = () => { };

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
                {iphonesQuery.map((product: any) => (
                    <SwiperSlide
                        key={product.id}
                        className="bg-black dark:bg-white text-white dark:text-black"
                    >
                        <div className="flex justify-between items-center p-4 h-full">
                            <div className="flex flex-col justify-center items-start lg:pl-8 pl-0 space-y-4">
                                <div className="flex items-center gap-x-4">
                                    <Image
                                        src={product.images[0] || '/home/hero1.png'} // Fallback image
                                        alt={product.name}
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-sm">{`${product.name}`} series</p>
                                </div>
                                {product.discount && (
                                    <h1 className="lg:text-5xl text-3xl max-w-[290px] font-semibold leading-16 tracking-wide">
                                        {product.discount.amount}% Off Voucher
                                    </h1>
                                )}
                                <Button
                                    variant="ghost"
                                    className='flex items-center gap-x-2'
                                    onClick={onClick}
                                >
                                    <span className="underline-custom">
                                        Shop Now
                                    </span>
                                    <ArrowRight className='size-4' />
                                </Button>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={product.images[0] || '/home/hero1.png'} // Fallback image
                                    alt={product.name}
                                    width={440}
                                    height={440}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
