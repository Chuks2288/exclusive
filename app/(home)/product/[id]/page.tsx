"use client";

import { flashSalesProducts, ourProducts } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductIdPage = () => {
    const products = [...flashSalesProducts, ...ourProducts];
    const { id: productId } = useParams();

    const product = products.find((product) => product.id === productId);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">{product?.name}</h1>
            <div className="mb-4">
                <Image
                    src={product?.images[0] || ""}
                    alt=""
                    width={200}
                    height={300}
                    priority
                />
            </div>
            <p className="text-lg mb-2">Price: ${product?.price}</p>
            <p className="text-sm text-gray-600">Rating: {product?.rating.average} ({product?.rating.reviews} reviews)</p>
        </div>
    );
}

export default ProductIdPage;
