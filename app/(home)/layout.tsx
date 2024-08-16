import { UpArrow } from "@/components/up-arrow"
import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

type Props = {
    children: React.ReactNode
}

const HomeLayout = ({
    children
}: Props) => {
    return (
        <>
            <Navbar />
            <div className="w-full px-3">
                <main className="max-w-[1170px] mx-auto">
                    {children}
                </main>
            </div>
            <Footer />
            <UpArrow />
        </>
    )
}

export default HomeLayout