import { ProductsCard } from "@/app/(home)/_components/products-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type RelatedProductsProps = {
    products: any[];
};

export const RelatedProducts = ({
    products
}: RelatedProductsProps) => {

    const generateRelatedProducts = (products: any[]) => {
        const relatedProducts: any[] = [];

        products.forEach((product) => {
            const related = products.filter(
                (p) =>
                    p.id === product.id &&
                    (p.category === product.category || p.subcategory === product.subcategory)
            );

            related.forEach((relProduct) => {
                relatedProducts.push({
                    id: `${product.id}`,
                    images: relProduct.images,
                    discount: relProduct.discount,
                    name: relProduct.name,
                    price: relProduct.price,
                    initialPrice: relProduct.initialPrice,
                    rating: relProduct.rating,
                    isNew: relProduct.isNew,
                    category: relProduct.category,
                    subcategory: relProduct.subcategory,
                });
            });
        });

        return relatedProducts;
    };

    const relatedProducts = generateRelatedProducts(products).slice(0, 10);

    return (
        <div className="relative w-full">
            <Swiper
                spaceBetween={10}
                navigation={{
                    nextEl: '.custom-next-related',
                    prevEl: '.custom-prev-related',
                }}
                grabCursor={true}
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
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
                {relatedProducts.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        className="h-full flex items-center justify-center"
                    >
                        <ProductsCard
                            id={product.id}
                            image={product.images}
                            discount={product?.discount?.amount as number}
                            name={product.name}
                            price={product.price}
                            initialPrice={product.initialPrice as number}
                            rating={product.rating.average}
                            reviews={product.rating.reviews}
                            isNew={product.isNew === true}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-prev-related w-6 h-6 mx-4 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-4 -translate-y-1/2 cursor-pointer z-10">
                <ArrowLeft className='text-black dark:text-white size-4' />
            </div>
            <div className="custom-next-related w-6 h-6 rounded-full border-none flex justify-center items-center bg-gray-200 dark:bg-gray-800 absolute -top-8 right-0 -translate-y-1/2 cursor-pointer z-10">
                <ArrowRight className='text-black dark:text-white size-4' />
            </div>

        </div>
    );
};
