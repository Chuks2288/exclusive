import { Navbar } from "../(home)/_components/navbar"

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({
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

export default AuthLayout