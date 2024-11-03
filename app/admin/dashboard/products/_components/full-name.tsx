"use client";

import { cn } from "@/lib/utils";

type Props = {
    id: string;
    firstName: string | null;
    lastName: string | null;
    isBanned: boolean;
}

export const FullName = ({
    id,
    firstName,
    lastName,
    isBanned
}: Props) => {
    return (
        <div
            className={cn(
                isBanned && "text-gray-400"
            )}
        >
            {`${lastName} ${firstName}`}
        </div>
    )
}
