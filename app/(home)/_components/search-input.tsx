import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const SearchInput = () => {
    return (
        <div className="relative">
            <Input
                placeholder="search"
                className="bg-gray-300/25 border-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm text-xs"
            />
            <Search className="md:size-4 size-3 absolute right-2 md:top-3 top-4 stroke-[3]" />
        </div>
    )
}

