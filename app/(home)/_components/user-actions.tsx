import { Popover, PopoverClose, PopoverTrigger } from "@/components/ui/popover";
import { userProfileRoutes } from "@/data";
import { PopoverContent } from "@radix-ui/react-popover";
import { Heart, LayoutDashboard, LogOut, ShoppingCart, User } from "lucide-react";
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
import { useIsAdmin } from "@/hooks/use-isAdmin";
import { isAdmin } from "@/lib/admin";
import { useIsModerator } from "@/hooks/use-isModerator";

interface UserActionRoutesProps {
    icon: any;
    path: string;
    label: string;
    item: number;
}

type Props = {
    isLoading: boolean;
}

export const UserActions = ({
    isLoading,
}: Props) => {

    // const isAdmin = await isAdmin();
    const isAdmin = useIsAdmin();
    const isModerator = useIsModerator();



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

    // Select cart and wishlist item counts from the Redux store
    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
    const wishlistItemCount = useSelector((state: RootState) => state.wishlist.items.length);

    const userActionRoutes: UserActionRoutesProps[] = [
        {
            icon: Heart,
            path: "/wishlist",
            label: "Wishlist",
            item: wishlistItemCount, // Dynamically show wishlist count
        },
        {
            icon: ShoppingCart,
            path: "/cart",
            label: "Cart",
            item: cartItemCount, // Dynamically show cart count
        },
    ];
    return (
        <>
            <div className="flex items-center gap-x-8">
                {userActionRoutes.map((route) => (
                    <ActionTooltip
                        label={route.label}
                        side="top"
                        align="start"
                        key={route.path}
                    >
                        <Link
                            href={route.path}
                            className="relative"
                        >
                            <route.icon className="size-5" />
                            {route.item > 0 && (
                                <span className="absolute -top-3.5 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex justify-center items-center text-white">
                                    {route.item}
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
                                {(isAdmin || isModerator) && (
                                    <Button
                                        variant="ghost"
                                        asChild
                                        className={"w-full rounded-none text-white"}
                                    >
                                        <Link
                                            href="/admin/dashboard"
                                            className="gap-x-4 flex"
                                        >
                                            <LayoutDashboard
                                                className="size-5"
                                            />
                                            <h4 className="text-sm font-medium w-full">
                                                Admin Dashboard
                                            </h4>
                                        </Link>
                                    </Button>
                                )}
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

                                {user && (
                                    <p className="text-xs py-6 pt-3 pl-4">
                                        {user?.email}
                                    </p>
                                )}
                            </PopoverContent>
                        </Popover>
                    </>
                )}
            </div>
        </>
    );
};
