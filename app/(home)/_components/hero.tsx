import { HeroCard } from "./hero-card"
import { SidebarWordSearch } from "./sidebar-word-search"


export const Hero = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
            <div className="md:col-span-1 md:grid hidden pt-4">
                <SidebarWordSearch />
            </div>
            <div className="md:col-span-3 pt-4 lg:pl-4 pl-0">
                <HeroCard />
            </div>
        </div>
    )
}

