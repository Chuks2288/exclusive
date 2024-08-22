import { Footer } from "../(home)/_components/footer"
import { Navbar } from "../(home)/_components/navbar"

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({
    children
}: Props) => {
    return (
        <>
            <div className="w-full px-3">
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default AuthLayout