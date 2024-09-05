import Link from "next/link"

export const HeadCrumbs = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Link href="/" className="text-xs text-muted-foreground cursor-pointer">
                Home
            </Link>
            <div className="">
                /
            </div>
            <Link href="/cart"
                className="text-xs text-muted-foreground cursor-pointer"
            >
                view cart
            </Link>
            <div className="">
                /
            </div>
            <p className="text-xs underline cursor-pointer">
                Checkout
            </p>
        </div>
    )
}

