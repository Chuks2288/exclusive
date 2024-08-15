import Image from "next/image";
import { Eye, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

type Props = {
    id: string;
    image: string[];
    discount: number;
    name: string;
    price: number;
    initialPrice: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
}
export const ProductCard = ({
    image,
    discount,
    name,
    price,
    initialPrice,
    rating,
    reviews,
    isNew,
}: Props) => {

    return (
        <div>
            <div className="relative cursor-pointer overflow-hidden group">
                <div className="relative bg-gray-200 rounded-sm w-full h-[200px] flex justify-center items-center p-4">
                    {discount > 0 && (
                        <span className="absolute top-2 left-2 flex justify-center items-center text-white w-10 h-5 bg-red-500 rounded-sm text-[10px]">
                            {`-${discount}%`}
                        </span>
                    )}
                    {isNew && (
                        <span className="absolute top-2 left-14 flex justify-center items-center text-white w-10 h-5 bg-green-500 rounded-sm text-[10px]">
                            New
                        </span>
                    )}
                    <Image
                        src={image[0]}
                        alt={name}
                        width={160}
                        height={160}
                        priority
                        objectFit="cover"
                    />
                </div>
                <span className="absolute top-2 right-2 flex justify-center items-center text-white w-6 h-6 bg-white hover:bg-gray-100 rounded-full text-[10px] cursor-pointer">
                    <Heart className="size-3 text-black" />
                </span>
                <span className="absolute top-10 right-2 flex justify-center items-center text-white w-6 h-6 bg-white hover:bg-gray-100 rounded-full text-[10px] cursor-pointer">
                    <Eye className="size-3 text-black" />
                </span>

                {/* Add to Cart Button */}
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-none py-2 absolute bottom-0 left-0 flex justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xs"
                >
                    Add to Cart
                </Button>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <h4 className="text-sm font-bold">
                    {name}
                </h4>
                <div className="flex items-center gap-x-2">
                    <p className="text-xs text-red-500">
                        {`$${price}`}
                    </p>
                    {initialPrice > price && (
                        <p className="text-xs line-through">
                            {`$${initialPrice}`}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-x-2">
                    <Rating
                        value={rating}
                        readOnly
                        itemStyles={{
                            itemShapes: Star,
                            activeFillColor: "#FFAD33",
                            inactiveFillColor: "#D3D3D3",
                        }}
                        style={{
                            fontSize: "2px",
                        }}
                    />
                    <span className="text-gray-500 text-xs">{`(${reviews} reviews)`}</span>
                </div>
            </div>
        </div>
    );
};
