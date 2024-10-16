import { AdminNavbar } from "./_components/admin-navbar";
import { AdminSidebar } from "./_components/admin-side-bar";

type Props = {
    children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
    return (
        <>
            <AdminNavbar />
            <div className="flex">
                <AdminSidebar className="lg:flex hidden" />

                <div className="flex-1 lg:pl-[256px] pl-0 h-full pt-[10px] lg:pt-0">
                    <main className="max-w-[1200px] mx-auto pt-6 mt-[5.2rem] h-full px-4 bg-gray-50 dark:bg-gray-800">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
