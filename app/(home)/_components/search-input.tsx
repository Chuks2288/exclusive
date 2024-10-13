"use client";

import * as React from "react";
import { Search, Check, Loader } from "lucide-react"; // Import Loader icon for loading state
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useGetSearchSuggestions } from "@/features/products/api/use-get-search-suggestions";

interface ProductSuggestion {
    id: string;
    name: string;
}

export const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Debounce effect for updating search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);


    const {
        data: suggestions = [],
        isFetching
    } = useGetSearchSuggestions(debouncedSearchTerm) as {
        data: ProductSuggestion[];
        isFetching: boolean;
    };

    useEffect(() => {
        if (isFetching) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [isFetching]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = { term: searchTerm };
        const url = qs.stringifyUrl({
            url: "/search",
            query
        });
        router.push(url);
        setOpen(false);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        const query = { term: suggestion };
        const url = qs.stringifyUrl({
            url: "/search",
            query
        });
        router.push(url);
        setOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setOpen(true);
    };

    return (
        <div className="relative">
            <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex items-center relative">
                    <Input
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="bg-gray-300/25 border-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm text-xs"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 md:top-2.3 top-4 stroke-[3]"
                    >
                        <Search className="md:size-4 size-3" />
                    </button>
                </div>

                {open && (
                    <ul className="absolute top-4.2 z-10 bg-white shadow-md border border-t-0 rounded-md mt-1 w-full max-h-56 overflow-y-auto">
                        {loading && (
                            <li className="flex justify-center items-center py-2">
                                <Loader className="animate-spin h-4 w-4" />
                                <span className="ml-2">Loading...</span>
                            </li>
                        )}

                        {!loading && suggestions.length > 0 && (
                            suggestions.map((suggestion: ProductSuggestion) => (
                                <li
                                    key={suggestion.id}
                                    onClick={() => handleSuggestionClick(suggestion.name)}
                                    className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 text-xs"
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${searchTerm === suggestion.name ? "opacity-100" : "opacity-0"}`}
                                    />

                                    {suggestion.name}
                                </li>
                            ))
                        )}

                        {!loading && suggestions.length === 0 && debouncedSearchTerm && (
                            <li className="px-4 py-2 text-xs text-center">No products found.</li>
                        )}
                    </ul>
                )}
            </form>
        </div>
    );
};
