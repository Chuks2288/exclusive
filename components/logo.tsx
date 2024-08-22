import Image from "next/image"


export const Logo = () => {
    return (
        <div className="hidden lg:flex  flex-1 items-center justify-center bg-[#CBE4E9]">
            <Image
                src="/auth-image.png"
                alt="Logo"
                width={520}
                height={520}
            />
        </div>
    )
}

