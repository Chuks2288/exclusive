import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"

type Props = {
    href: string,
    label: string,
    isActive: boolean,
}


export const NavButton = ({
    href,
    label,
    isActive
}: Props) => {
    const router = useRouter();

    return (
        <Button
            key={label}
            size="sm"
            variant="outline"
            className={cn(
                "w-full lg:w-auto justify-between font-normal bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition",
                isActive && "underline",
            )}
            onClick={() => router.push(href)}
        >
            {label}
        </Button>
    )
}

