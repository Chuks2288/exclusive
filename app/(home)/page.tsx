"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";

import { Separator } from "@/components/ui/separator";

import { Hero } from "./_components/hero";
import { Products } from "./_components/products";
import { FlashSales } from "./_components/flash-sales";
import { CategoryProducts } from "./_components/category-product";
import { ProductBanner } from "./_components/product-banner";
import { BestSellingProducts } from "./_components/best-selling-products";
import { NewArrivalProducts } from "./_components/new-arrival-products";
import { ServiceHighlights } from "./_components/service-highlights";

import { useGetAllProducts } from "@/features/products/api/use-get-all-products";
import { useGetIphoneProducts } from "@/features/products/api/use-get-iphone-products";
import { useGetBestSellingProducts } from "@/features/products/api/use-get-best-selling-products";
import { useGetSpeakerProduct } from "@/features/products/api/use-get-speaker-product";

const HomePage = () => {
    const router = useRouter();
    const [selectedWord, setSelectedWord] = useState<string | null>(null);

    const {
        data: products = [],
        isLoading: productIsLoading
    } = useGetAllProducts();
    const {
        data: iphoneProducts = [],
        isLoading: iphoneProductIsLoading
    } = useGetIphoneProducts();
    const {
        data: bestSellingProducts = [],
        isLoading: bestSellingProductsIsLoading
    } = useGetBestSellingProducts();
    const {
        data: speakerProduct = [],
        isLoading: speakerProductIsLoading
    } = useGetSpeakerProduct();

    const isLoading =
        productIsLoading ||
        iphoneProductIsLoading ||
        bestSellingProductsIsLoading ||
        speakerProductIsLoading;

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        const word = queryParams.word ? String(queryParams.word) : null;
        setSelectedWord(word);
    }, []);

    // const handleWordClick = (word: string) => {
    //     const newWord = selectedWord === word ? null : word;
    //     setSelectedWord(newWord);

    //     const queryParams = queryString.stringify({ word: newWord || undefined });
    //     // @ts-ignore
    //     router.push(`?${queryParams}`, undefined, { shallow: true, scroll: false });
    // };
    const handleWordClick = (word: string) => {
        const scrollPosition = window.scrollY;

        const newWord = selectedWord === word ? null : word;
        setSelectedWord(newWord);

        const queryParams = queryString.stringify({ word: newWord || undefined });

        // @ts-ignore
        router.push(`?${queryParams}`, { shallow: true, scroll: false });

        setTimeout(() => {
            window.scrollTo(0, scrollPosition); // Restore scroll position
        }, 0);
    };


    const filteredProducts = selectedWord
        ? products.filter(product => product.category.toLowerCase()
            .includes(selectedWord.toLowerCase()))
        : products;

    const filteredIphoneProducts = selectedWord
        ? iphoneProducts
            .filter(product => product.category.toLowerCase()
                .includes(selectedWord.toLowerCase()))
        : iphoneProducts;

    const filteredBestSellingProducts = selectedWord
        ? bestSellingProducts
            .filter(product => product.category.toLowerCase()
                .includes(selectedWord.toLowerCase()))
        : bestSellingProducts;

    const filteredSpeakerProduct = selectedWord
        ? speakerProduct
            .filter(product => product.category.toLowerCase()
                .includes(selectedWord.toLowerCase()))
        : speakerProduct;

    return (
        <main>
            <Hero
                iphoneProducts={filteredIphoneProducts.length ?
                    filteredIphoneProducts :
                    iphoneProducts
                }
                isLoading={isLoading}
                onWordClick={handleWordClick}
            />
            <FlashSales
                products={filteredProducts.length ?
                    filteredProducts :
                    products
                }
                isLoading={isLoading}
            />
            <Separator className="my-4" />
            <CategoryProducts
                products={filteredProducts.length ?
                    filteredProducts :
                    products
                }
                isLoading={isLoading}
                onCategoryClick={handleWordClick}
                selectedCategory={selectedWord}
            />
            <BestSellingProducts
                bestSellingProducts={filteredBestSellingProducts.length ?
                    filteredBestSellingProducts :
                    bestSellingProducts
                }
                isLoading={isLoading}
                header
            />
            <ProductBanner
                products={filteredSpeakerProduct.length ?
                    filteredSpeakerProduct :
                    speakerProduct
                }
                isLoading={isLoading}
            />
            <Products
                products={filteredProducts.length ?
                    filteredProducts :
                    products
                }
                isLoading={isLoading}
            />
            <NewArrivalProducts isLoading={isLoading} />
            <ServiceHighlights isLoading={isLoading} />
        </main>
    );
};

export default HomePage;
