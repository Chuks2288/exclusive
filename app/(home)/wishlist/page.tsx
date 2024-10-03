"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WishlistCard } from "./_components/wishlist-card";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setWishlist } from "@/store/wishlist-slice";
import { useEffect } from "react";
import { WishlistCardSkeleton } from "./_components/skeleton/wishlist-card-skeleton";
import { useGetAllWishlists } from "@/features/wishlist/api/use-get-all-wishlist";
import { ProductsCard } from "../_components/products-card";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteAllWishlist } from "@/features/wishlist/api/use-delete-all-wishlist";

const Wishlist = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to Clear your wishlist?"
    );

    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const wishlistItemCount = useSelector((state: RootState) => state.wishlist.items.length);

    const { data, isLoading } = useGetAllWishlists();
    const { mutate: clearAllWishlist } = useDeleteAllWishlist();

    useEffect(() => {
        if (data && wishlistItems.length === 0) {
            dispatch(setWishlist(data));
        }
    }, [data, dispatch, wishlistItems.length]);

    if (isLoading && wishlistItems.length === 0) {
        return (
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">

                    {[...Array(5)].map((_, index) => (
                        <WishlistCardSkeleton key={index} />
                    ))}
                </ul>
            </div>
        );
    }

    const items = wishlistItems || [];

    const onDeleteAll = async () => {
        const ok = await confirm();

        if (ok) {
            clearAllWishlist();
        }
    };

    return (
        <>
            <ConfirmDialog />
            <div>
                {items.length === 0 ? (
                    <div className="flex items-center justify-center h-[70vh]">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <p>No items in the wishlist.</p>
                            <p>Please click the button below to go back home.</p>
                            <Button onClick={() => router.push("/")}>Go Back Home</Button>
                        </div>
                    </div>
                ) : (
                    <div className="py-10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-medium">
                                Wishlist ({`${wishlistItemCount}`})
                            </h3>
                            {wishlistItemCount > 1 &&
                                <Button
                                    variant="destructive"
                                    onClick={onDeleteAll}
                                >
                                    Delete All
                                </Button>
                            }

                        </div>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {items.map((product) => (
                                <ProductsCard
                                    id={product.id}
                                    image={product?.images || "/no-image.png"}
                                    name={product.name}
                                    price={product.price}
                                    initialPrice={product.initialPrice}
                                    rating={product?.rating}
                                    reviews={product?.reviews}
                                    discount={product?.discount}
                                    isNew={product.isNew === true}
                                    isWishlistPage={true}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Wishlist;
