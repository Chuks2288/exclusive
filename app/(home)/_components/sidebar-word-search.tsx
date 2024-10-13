"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { searchWordItems } from "@/data";
import { Separator } from "@/components/ui/separator";

type SidebarWordSearchProps = {
    onWordClick: (word: string) => void;
};

export const SidebarWordSearch = ({
    onWordClick
}: SidebarWordSearchProps) => {
    return (
        <div className="flex space-x-2">
            <Accordion type="single" collapsible className="w-full h-full -space-y-4">
                {searchWordItems.map((item: any, index: number) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        {item.subCategories ? (
                            <>
                                <AccordionTrigger className="hover:underline">
                                    {item.category}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2">
                                        {item.subCategories.map(
                                            (subCategory: string, subIndex: number) => (
                                                <li
                                                    key={subIndex}
                                                    className="font-medium cursor-pointer hover:underline"
                                                    onClick={() => onWordClick(subCategory)} // Call onWordClick with the subcategory
                                                >
                                                    {subCategory}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </AccordionContent>
                            </>
                        ) : (
                            <button
                                className="w-full text-left font-medium py-4"
                                onClick={() => onWordClick(item.category)} // Call onWordClick with the category
                            >
                                {item.category}
                            </button>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
            <Separator orientation="vertical" className="-mt-4" />
        </div>
    );
};
