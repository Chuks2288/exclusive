import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type Props = {
    id: any;
    image: string[];
    name: string;
    price: number;
    // shippingFee: number;
    // subTotal: number;
    // total: number;
}

export const CheckoutCard = ({
    id,
    image,
    name,
    price,
}: Props) => {
    return (
        <div className="flex items-center justify-between w-full py-4">
            <div className="flex items-center gap-x-3">
                <Image
                    src={image[0]}
                    alt="Image"
                    width={30}
                    height={30}
                />
                <p className="text-sm">
                    {name}
                </p>
            </div>
            <p className="font-medium text-sm">
                ${price}
            </p>
        </div>
    )
}

