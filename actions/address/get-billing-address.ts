"use server";

import { db } from "@/lib/db";

type IParams = {
    id: string;
};

export const getBillingAddress = async ({ id }: IParams) => {
    if (!id) {
        throw new Error("ID parameter is required");
    }

    const address = await db.address.findUnique({
        where: { id },
    });

    if (!address) {
        console.error("Address not found for ID:", id);
        return null; // Instead of throwing an error
    }

    return address;
};
