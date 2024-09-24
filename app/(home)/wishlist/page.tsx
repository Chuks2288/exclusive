"use client";

import { Button } from "@/components/ui/button";
import { useGetAllWishlists } from "@/features/wishlist/api/use-get-all-wishlist";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WishlistPage = () => {
    const router = useRouter();
    const { data: wishlists, error, isLoading } = useGetAllWishlists();



    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="animate-spin size-6" />
            </div>
        )
    }


    if (!wishlists || wishlists.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <p>
                        No item in the wishlist.
                    </p>
                    <p>
                        Please click the button below to go back home
                    </p>
                    <Button
                        onClick={() => router.push("/")}
                        className=""
                    >
                        Go Back Home
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {wishlists?.map(wishlist => (
                <div key={wishlist.id}>{wishlist.name}</div>
            ))}
        </div>
    );
};

export default WishlistPage;
