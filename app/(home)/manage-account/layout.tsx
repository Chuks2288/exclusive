import { currentUser } from "@/lib/auth";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

type Props = {
    children: React.ReactNode
}

const ManageAccountLayout = async ({
    children
}: Props) => {

    const user = await currentUser();

    return (
        <>
            <Header
                firstName={user?.firstName as string}
                lastName={user?.lastName as string}
            />
            <main className="flex gap-x-2">
                <Sidebar />
                <div className="w-full border pl-0 h-screen">
                    {children}
                </div>
            </main>
        </>
    )
}

export default ManageAccountLayout;