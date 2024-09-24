import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/features/cart/use-add-to-cart";
import { useRemoveFromCart } from "@/features/cart/use-remove-from-cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCreateWishlist } from "@/features/wishlist/api/use-create-wishlist";
import { useDeleteWishlistById } from "@/features/wishlist/api/use-delete-wishlist-by-id";
import { useCurrentUser } from "@/hooks/use-current-user";
import { toast } from "sonner";
import { useGetWishlistById } from "@/features/wishlist/api/use-get-wishlist-by-id";

type Props = {
    id: any;
    image: string[];
    discount: number;
    name: string;
    price: number;
    initialPrice: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
};

export const ProductsCard = ({
    id,
    image,
    discount,
    name,
    price,
    initialPrice,
    rating,
    reviews,
    isNew,
}: Props) => {
    const user = useCurrentUser();
    const router = useRouter();
    const { mutate: addToCart } = useAddToCart();
    const { mutate: removeFromCart } = useRemoveFromCart(id);
    const { mutate: addToWishlist } = useCreateWishlist({ userId: user?.id, productId: id });
    const { mutate: removeFromWishlist } = useDeleteWishlistById({ userId: user?.id, product: id });
    const { data: wishlistItems = [] } = useGetWishlistById(id);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [isInWishlist, setIsInWishlist] = useState(false);
    const isInCart = cartItems.some((item) => item.id === id);

    useEffect(() => {
        if (Array.isArray(wishlistItems)) {
            const existsInWishlist = wishlistItems.some((item: any) => item.productId === id);
            setIsInWishlist(existsInWishlist);
        }
    }, [wishlistItems, id]);

    const handleCartAction = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart({
                id,
                name,
                image,
                price,
                initialPrice,
                rating,
                quantity: 1,
            });
        }
    };

    const handleAddToWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (user?.id) {
            if (isInWishlist) {
                removeFromWishlist(id, {
                    onSuccess: () => {
                        setIsInWishlist(false);
                        toast.success("Removed from wishlist");
                    },
                    onError: () => {
                        toast.error("Failed to remove from wishlist");
                    },
                });
            } else {
                addToWishlist(id, {
                    onSuccess: () => {
                        setIsInWishlist(true);
                        toast.success("Added to wishlist");
                    },
                    onError: () => {
                        toast.error("Failed to add to wishlist");
                    },
                });
            }
        } else {
            toast.error("Please log in to add items to your wishlist");
        }
    };

    return (
        <div>
            <div
                onClick={() => router.push(`/product/${id}`)}
                className="relative cursor-pointer overflow-hidden group"
            >
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
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <span
                    onClick={handleAddToWishlist}
                    className={`absolute top-2 right-2 flex justify-center items-center w-6 h-6 bg-white hover:bg-gray-100 rounded-full text-[10px] cursor-pointer ${isInWishlist ? "text-red-500" : "text-black"}`}
                >
                    <Heart className="size-3" />
                </span>

                <span className="absolute top-10 right-2 flex justify-center items-center w-6 h-6 bg-white hover:bg-gray-100 rounded-full text-[10px] cursor-pointer">
                    <Eye className="size-3 text-black" />
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-none py-2 absolute bottom-0 left-0 flex justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xs"
                    onClick={handleCartAction}
                >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                </Button>
            </div>

            <div className="flex flex-col gap-y-2 mt-4">
                <h4 className="text-sm font-bold">{name}</h4>
                <div className="flex items-center gap-x-2">
                    <p className="text-xs text-red-500">{`$${price}`}</p>
                    {initialPrice > price && (
                        <p className="text-xs line-through">{`$${initialPrice}`}</p>
                    )}
                </div>
                <div className="flex items-center gap-x-2">
                    <div className="max-w-[90px]">
                        <Rating
                            value={rating}
                            readOnly
                            itemStyles={{
                                itemShapes: Star,
                                activeFillColor: "#FFAD33",
                                inactiveFillColor: "#D3D3D3",
                            }}
                        />
                    </div>
                    <span className="text-gray-500 text-xs">{`(${reviews} reviews)`}</span>
                </div>
            </div>
        </div>
    );
};
