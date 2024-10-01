import { Popover, PopoverClose, PopoverTrigger } from "@/components/ui/popover";
import { userProfileRoutes } from "@/data";
import { PopoverContent } from "@radix-ui/react-popover";
import { Heart, LogOut, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserProfile } from "./user-profile";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useLogout } from "@/features/user/api/use-logout";
import { useConfirm } from "@/features/user/hooks/use-confirm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ActionTooltip from "@/components/action-tooltip";

interface UserActionRoutesProps {
    icon: any;
    path: string;
    label: string;
    item: number;
}

type Props = {
    isLoading: boolean;
}

export const UserActions = ({ isLoading }: Props) => {
    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to logout"
    );

    const { mutate: logout } = useLogout();
    const pathname = usePathname();
    const user = useCurrentUser();

    const onLogout = async () => {
        const ok = await confirm();
        if (ok) {
            logout();
        }
    };

    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
    const wishlistItemCount = useSelector((state: RootState) => state.wishlist.items.length); // Get wishlist count from Redux state

    const userActionRoutes: UserActionRoutesProps[] = [
        {
            icon: Heart,
            path: "/wishlist",
            label: "Wishlist",
            item: wishlistItemCount,
        },
        {
            icon: ShoppingCart,
            path: "/cart",
            label: "Cart",
            item: cartItemCount,
        },
    ];

    return (
        <>
            <div className="flex items-center gap-x-8">
                {userActionRoutes.map((item) => (
                    <ActionTooltip
                        label={item.label}
                        side="top"
                        align="start"
                        key={item.path}
                    >
                        <Link
                            href={item.path}
                            className="relative"
                        >
                            <item.icon className="size-5" />
                            {item.item > 0 && (
                                <span className="absolute -top-3.5 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex justify-center items-center text-white">
                                    {item.item}
                                </span>
                            )}
                        </Link>
                    </ActionTooltip>
                ))}
                {user && (
                    <>
                        <ConfirmDialog />
                        <Popover>
                            <PopoverTrigger>
                                <span className="w-8 h-8 transition flex justify-center items-center rounded-full hover:bg-red-500 focus:bg-red-500 hover:text-white">
                                    <User className="size-5" />
                                </span>
                            </PopoverTrigger>
                            <PopoverContent
                                side="left"
                                align="start"
                                sideOffset={-25}
                                alignOffset={35}
                                className="flex flex-col items-start justify-start gap-y-2 py-1 bg-[#2f4f4f] text-white rounded-md z-50"
                            >
                                {userProfileRoutes.map((route) => (
                                    <PopoverClose asChild key={route.label}>
                                        <UserProfile
                                            label={route.label}
                                            Icon={route.icon}
                                            path={route.path}
                                            isActive={route.path === pathname}
                                        />
                                    </PopoverClose>
                                ))}
                                <Button
                                    onClick={onLogout}
                                    variant="ghost"
                                    className="gap-x-4 rounded-none flex justify-start text-white w-full"
                                >
                                    <LogOut className="size-5" />
                                    <h4 className="text-sm font-medium">Logout</h4>
                                </Button>
                            </PopoverContent>
                        </Popover>
                    </>
                )}
            </div>
        </>
    );
};
