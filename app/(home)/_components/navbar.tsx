"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Logo } from "./logo";
import { NavItems } from "./nav-items";
import { SearchInput } from "./search-input";
import { UserActions } from "./user-actions";

export const Navbar = () => {


    return (
        <div className="border-b-2 navbar">
            <div className="w-full px-3">
                <div className="max-w-[1170px] mx-auto">
                    <div className="flex flex-row items-center justify-between py-6 gap-x-6">
                        <Logo />
                        <NavItems />
                        <div className="flex items-center gap-x-6">
                            <SearchInput />
                            <UserActions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}