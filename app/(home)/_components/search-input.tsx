import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const SearchInput = () => {
    return (
        <div className="relative">
            <Input
                placeholder="search"
                className="bg-gray-300/25 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Search className="lg:size-4 size-2 absolute right-2 top-3 stroke-[3]" />
        </div>
    )
}

