import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
    name: string;
    path: string;
    icon: LucideIcon;
    isActive: boolean;
}

export const SidebarCard = ({
    name,
    path,
    icon: Icon,
    isActive
}: Props) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(path)}
            className={cn(
                "transition-all duration-300 ease-in-out rounded-lg",
                isActive ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-600" // No default background color
            )}
        >
            <div className={cn(
                "px-4 py-2 cursor-pointer flex items-center gap-x-3 group transition-transform duration-300 ease-in-out",
                isActive ? "translate-x-4" : "hover:translate-x-4"
            )}>
                <Icon className={cn(
                    "size-4 transition-transform duration-300 ease-in-out group-hover:scale-110",
                    isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
                )} />
                <p className={cn(
                    "text-sm transition-colors duration-300 ease-in-out",
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600"
                )}>
                    {name}
                </p>
            </div>
        </div>
    )
}
