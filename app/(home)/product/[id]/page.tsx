"use client";

import { flashSalesProducts } from "@/constants"
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

const ProductIdPage = () => {

    // const productId = URLSearchParams.get("id");
    const { id: productId } = useParams();



    const product = flashSalesProducts.find((product) => product.id === productId);

    return (
        <div>
            {product?.name}
            <div className="">
                <Image
                    src={product?.images[0] || ""}
                    alt="name"
                    width={200}
                    height={300}
                />
            </div>
        </div>
    )
}

export default ProductIdPage