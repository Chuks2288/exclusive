"use server";

import { db } from "@/lib/db";

type IParams = {
    id: string;
};

export const getBillingAddress = async ({
    id
}: IParams) => {

    const address = await db.address.findUnique({
        where: {
            id
        },
    });

    if (!address) {
        throw new Error("Address not found");
    }

    return address;
};
