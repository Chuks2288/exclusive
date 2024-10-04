"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {
    title: string;
    subItems: {
        label: string;
        path: string;
    }[]
}
export const SidebarItemsCard = ({
    title,
    subItems
}: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div>
            <h4 className="text-md font-semibold mb-2">{title}</h4>
            <div className="pl-6 flex flex-col gap-3">
                {subItems.map((item) => {

                    const isActive = item.path === pathname;
                    return (
                        <div
                            key={item.label}
                            onClick={() => router.push(item.path)}
                            className={cn(
                                "text-sm cursor-pointer",
                                isActive && "text-red-500"
                            )}
                        >
                            {item.label}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
