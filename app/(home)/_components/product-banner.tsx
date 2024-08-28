"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductBannerCard } from "./product-banner-card";
import { ProductBannerSkeleton } from "./skeleton/product-banner-skeleton";


type Props = {
    products: any[];
    isLoading: boolean;
};

export const ProductBanner = ({
    products = [],
    isLoading,
}: Props) => {

    if (isLoading) {
        return <ProductBannerSkeleton />
    }

    return (
        <ProductBannerCard
            products={products as any}
        />
    )
};
