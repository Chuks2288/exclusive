import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
    id: string | any;
    image: string[];
    name: string;
}

export const ProductInfo = ({
    id,
    image,
    name
}: Props) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/product/${id}`)}
            className="flex gap-x-2 items-center text-left cursor-pointer hover:underline w-[220px]">
            {image && Array.isArray(image) && image.length > 0 ? (
                <Image
                    src={image[0]}
                    alt="image"
                    className="w-12 h-12 mr-4"
                    width={48}
                    height={48}
                />
            ) : (
                <div className="w-12 h-12 mr-4 flex items-center justify-center">
                    <span>No Image</span>
                </div>
            )}
            <span className="lg:text-sm text-xs">{name}</span>
        </div>
    )
}

