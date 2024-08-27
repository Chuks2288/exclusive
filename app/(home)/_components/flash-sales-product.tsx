"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsCard } from './products-card';
import { Product } from '@prisma/client';

type Props = {
    products: any;
}

export const FlashSalesProduct = ({
    products
}: Props) => {
    const [showAll, setShowAll] = useState(false);

    // Determine which products to display based on the `showAll` state
    const displayedProducts = showAll ? products.slice(0, 20) : products.slice(0, 10);

    // Slice the products array to limit to a maximum of 20
    const flashSalesProducts = products.slice(0, 20);

    return (
        <div className="relative w-full">
            {!showAll ? (
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        grabCursor={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {displayedProducts.map((product: any) => (
                            <SwiperSlide
                                key={product.id}
                                className="h-full flex items-center justify-center"
                            >
                                <ProductsCard
                                    id={product.id}
                                    image={product.images}
                                    // Add optional chaining to handle cases where discount might be null
                                    discount={product.discount?.amount || 0}
                                    name={product.name}
                                    price={product.price}
                                    initialPrice={product.initialPrice}
                                    rating={product.rating.average}
                                    reviews={product.rating.reviews}
                                    isNew={product.isNew === true}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation arrows */}
                    <div className="custom-prev w-6 h-6 mx-4 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-4 -translate-y-1/2 cursor-pointer z-10">
                        <ArrowLeft className='text-black dark:text-white size-4' />
                    </div>
                    <div className="custom-next w-6 h-6 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-0 -translate-y-1/2 cursor-pointer z-10">
                        <ArrowRight className='text-black dark:text-white size-4' />
                    </div>

                    {/* View More Products Button */}
                    {flashSalesProducts.length > 10 && (
                        <div className="flex justify-center mt-4">
                            <Button
                                size="sm"
                                onClick={() => setShowAll(true)}
                                className="text-xs text-center bg-red-500 dark:bg-red-700 text-white py-2"
                            >
                                View More Products
                            </Button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {flashSalesProducts.map((product: any) => (
                            <div
                                key={product.id}
                                className="h-full max-w-[350px] flex flex-col items-center justify-center"
                            >
                                <ProductsCard
                                    id={product.id}
                                    image={product.images}
                                    // Add optional chaining to handle cases where discount might be null
                                    discount={product.discount?.amount || 0}
                                    name={product.name}
                                    price={product.price}
                                    initialPrice={product.initialPrice}
                                    rating={product.rating.average}
                                    reviews={product.rating.reviews}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Show Less Button */}
                    <div className="flex justify-center mt-4">
                        <Button
                            size="sm"
                            onClick={() => setShowAll(false)}
                            className="text-xs text-center bg-red-500 dark:bg-red-700 text-white py-2"
                        >
                            Show Less Products
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};
