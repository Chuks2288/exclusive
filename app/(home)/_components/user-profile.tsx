import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
    label: string;
    Icon: any;
    path: string;
    isActive: boolean;
}

export const UserProfile = ({
    label,
    Icon,
    path,
    isActive,
}: Props) => {

    return (
        <Button
            variant="ghost"
            asChild
            className={cn(
                "w-full rounded-none",
                isActive && "bg-gray-800 text-white" // Highlight active state
            )}
        >
            <Link
                href={path}
                className="gap-x-4 flex"
            >
                <Icon
                    className="size-5"
                />
                <h4 className="text-sm font-medium w-full">
                    {label}
                </h4>
            </Link>
        </Button>
    )
}
