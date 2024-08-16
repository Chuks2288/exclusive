"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { flashSalesProducts } from '@/constants';
import { ProductsCard } from './products-card';
import { ourProducts } from '@/constants';

export const BestSellingItems = () => {
    const [showAll, setShowAll] = useState(false);

    // Slice the products array to show only the first 5 items initially
    const displayedProducts = showAll ? ourProducts.slice(8, 20) : ourProducts.slice(8, 14);

    return (
        <div className="relative w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {displayedProducts.map((product) => (
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
            {/* View More/Show Less Products Button */}
            <div className="absolute -top-14 right-4">
                <Button
                    size="default"
                    onClick={() => setShowAll(!showAll)}
                    className="text-xs text-center bg-red-500 dark:bg-red-700 text-white"
                >
                    {showAll ? "View Less" : "View All"}
                </Button>
            </div>
        </div>
    );
};
