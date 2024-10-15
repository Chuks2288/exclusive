import { Navbar } from "../(home)/_components/navbar";
import { Footer } from "../(home)/_components/footer";
import { UpArrow } from "@/components/up-arrow";
import { AdminSidebar } from "./_components/admin-side-bar";

type Props = {
    children: React.ReactNode;
};

const AdminLayout = ({
    children
}: Props) => {

    return (
        <>
            <Navbar />
            <div className="w-full px-3">
                <main className="max-w-[1170px] mx-auto">
                    <main className="flex gap-x-2">
                        <AdminSidebar />
                        {children}
                    </main>
                </main>
            </div>
            <Footer />
            <UpArrow />
        </>
    );
};

export default AdminLayout;
