import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link
            href="/"
            className="cursor-pointer"
        >
            <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
            />
        </Link>
    )
}

