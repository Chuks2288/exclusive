"use client";

import React from 'react';
import { LucideProps } from "lucide-react";

type Props = {
    name: string;
    icon: React.ElementType<LucideProps>;
    selectedCategory: boolean;
};

export const CategoryQueryCard = ({
    name,
    icon: Icon,
    selectedCategory
}: Props) => {
    return (
        <div className={`group flex flex-col items-center justify-center border-2 shadow-sm h-[130px] w-full rounded-md bg-gray-100 hover:bg-red-500 transition ${selectedCategory ? "bg-red-500" : null}`}>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <Icon className={`size-12 text-black group-hover:text-white ${selectedCategory ? "text-white" : null}`} strokeWidth={1} />
                <p className={`font-medium text-xs text-black group-hover:text-white ${selectedCategory ? " text-white" : null}`}>
                    {name}
                </p>
            </div>
        </div>
    );
};
