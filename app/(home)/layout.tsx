import { Navbar } from "./_components/navbar"

type Props = {
    children: React.ReactNode
}

const HomeLayout = ({
    children
}: Props) => {
    return (
        <div className="w-full px-3">
            <div className="max-w-[1170px] mx-auto">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default HomeLayout