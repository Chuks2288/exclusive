"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { WishlistCard } from './_components/wishlist-card';
const Wishlist = () => {
    const router = useRouter();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    return (
        <div>
            {wishlistItems.length === 0 ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <p>No items in the wishlist.</p>
                        <p>Please click the button below to go back home.</p>
                        <Button onClick={() => router.push("/")}>Go Back Home</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10'>
                        {wishlistItems.map((item) => {
                            return (
                                <WishlistCard
                                    id={item.id}
                                    key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    size={item.size}
                                    description={item.description}
                                    availability={item.availability}
                                    color={item.color}
                                    initialPrice={item.initialPrice}
                                    rating={item.rating}
                                    quantity={item.quantity}
                                    reviews={item.reviews}
                                    discount={item.discount}
                                    isNew={item.isNew}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
