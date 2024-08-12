import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "./logo";
import { NavItems } from "./nav-items";
import { SearchInput } from "./search-input";
import { UserActions } from "./user-actions";

export const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-between py-6 border-2 gap-x-6">
            <Logo />
            <NavItems />
            <div className="flex items-center gap-x-6">
                <SearchInput />
                <UserActions />
            </div>
        </div>
    )
}