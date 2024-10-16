import { Logo } from "@/app/(home)/_components/logo";
import { NavItems } from "@/app/(home)/_components/nav-items";
import { SearchInput } from "@/app/(home)/_components/search-input";
import { UserActions } from "@/app/(home)/_components/user-actions";

export const AdminNavbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-200 bg-white dark:bg-gray-900"> {/* Adjusted for dark mode */}
            <div className="w-full px-3">
                <div className="max-w-[1170px] mx-auto">
                    <div className="flex flex-row items-center justify-between py-6 gap-x-6">
                        <Logo />
                        <NavItems />
                        <div className="flex items-center gap-x-6">
                            <SearchInput />
                            <UserActions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
