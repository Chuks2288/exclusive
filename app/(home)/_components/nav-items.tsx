"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { routes } from "@/data";

import { NavButton } from "./nav-button";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { MenuButton } from "./menu-button";
import { ModeToggle } from "@/components/mode-toggle";


export const NavItems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    if (isMobile) {
        return (
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className="font-normal border-none bg-gray-300/30 hover:bg-gray-300/40"
                    >
                        <Menu className="size-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) => (
                            <MenuButton
                                key={route.label}
                                href={() => onClick(route.href)}
                                isActive={pathname === route.href}
                                label={route.label}
                            />
                        ))}
                    </nav>
                    <div className="pl-4 mt-3">
                        <ModeToggle />
                    </div>
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <div className="">
            <div className="hidden md:flex items-center gap-x-8">
                {routes.map((route) => (
                    <NavButton
                        key={route.label}
                        href={route.href}
                        isActive={pathname === route.href}
                        label={route.label}
                    />
                ))}
                <ModeToggle />
            </div>
        </div>
    )
}