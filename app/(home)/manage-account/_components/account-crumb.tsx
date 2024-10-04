import Link from "next/link"

export const AccountCrumb = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Link href="/" className="text-xs text-muted-foreground cursor-pointer">
                Home
            </Link>
            <div className="">
                /
            </div>
            <p className="text-xs underline cursor-pointer">
                My Account
            </p>
        </div>
    )
}
