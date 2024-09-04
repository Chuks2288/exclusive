import Link from "next/link"

export const CartCrumb = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Link href="/" className="text-xs text-muted-foreground cursor-pointer">
                Home
            </Link>
            <div className="">
                /
            </div>
            <p className="text-xs underline cursor-pointer">
                Cart
            </p>
        </div>
    )
}

