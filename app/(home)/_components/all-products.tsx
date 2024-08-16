"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';  // Make sure the Grid CSS is imported
import { Grid, Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsCard } from './products-card';

import { ourProducts } from '@/constants';

export const AllProducts = () => {
    const [showAll, setShowAll] = useState(false);

    // Slice the products array to show only the first 15 items
    const displayedProducts = showAll ? ourProducts : ourProducts.slice(0, 12);

    return (
        <div className="relative w-full">
            {!showAll ? (
                <>
                    <Swiper
                        slidesPerView={1}  // Start with 1 slide per view
                        spaceBetween={10}  // Space between slides
                        navigation={{
                            nextEl: '.custom-next-products',  // Custom next button
                            prevEl: '.custom-prev-products',  // Custom prev button
                        }}
                        grid={{
                            rows: 2,  // Ensure this is correctly set to the number of rows you want
                            fill: 'row',  // Ensure fill is set to 'row' to layout slides horizontally first
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
                        modules={[Grid, Navigation]}
                        className="mySwiper"
                    >
                        {displayedProducts.map((product) => (
                            <SwiperSlide
                                key={product.id}
                                className="h-full flex items-center justify-center"
                            >
                                <ProductsCard
                                    id={product.id}
                                    image={product.images}
                                    discount={product.discount.amount}
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
                    <div className="custom-prev-products w-6 h-6 mx-4 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-4 -translate-y-1/2 cursor-pointer z-10">
                        <ArrowLeft className='text-black dark:text-white size-4' />
                    </div>
                    <div className="custom-next-products w-6 h-6 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-0 -translate-y-1/2 cursor-pointer z-10">
                        <ArrowRight className='text-black dark:text-white size-4' />
                    </div>

                    {/* View More Products Button */}
                    {ourProducts.length > 12 && (
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
                        {ourProducts.map((product) => (
                            <div
                                key={product.id}
                                className="h-full max-w-[350px] flex flex-col items-center justify-center"
                            >
                                <ProductsCard
                                    id={product.id}
                                    image={product.images}
                                    discount={product.discount.amount}
                                    name={product.name}
                                    price={product.price}
                                    initialPrice={product.initialPrice}
                                    rating={product.rating.average}
                                    reviews={product.rating.reviews}
                                    isNew={product.isNew === true}
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
