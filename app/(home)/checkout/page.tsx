"use client";

import { BillingDetailsForm } from "./_components/billing-details-form";
import { CheckoutDetails } from "./_components/checkout-details";
import { HeadCrumbs } from "./_components/head-crumbs";
import { useGetBillingAddress } from "@/features/address/api/use-get-billing-address";
import { BillingDetailsSkeleton } from "./_components/skeleton/billing-details";
import { HeadCrumbsSkeleton } from "@/components/skeleton/head-crumb-skeleton";
import { CheckoutDetailsSkeleton } from "./_components/skeleton/checkout-details-skeleton";
import { Address } from "@prisma/client";
import { useUpsertBillingAddress } from "@/features/address/api/use-upsert-billing-address";
import { billingInfoSchema } from "@/schema";
import { z } from "zod";

type FormValues = z.input<typeof billingInfoSchema>;

type Props = {
    id: string | any;
};

const CheckoutPage = ({ id }: Props) => {
    const { data: billingAddress, isLoading: isBillingAddressLoading } = useGetBillingAddress(id);
    const mutation = useUpsertBillingAddress();

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values);
    };

    const addressComplete =
        billingAddress &&
        billingAddress.street &&
        billingAddress.city &&
        billingAddress.phoneNumber;

    const isAddressComplete = !!addressComplete;

    // Properly returning the skeleton UI during loading
    if (isBillingAddressLoading) {
        return (
            <main className="py-4 space-y-6">
                <HeadCrumbsSkeleton />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <BillingDetailsSkeleton />
                    <CheckoutDetailsSkeleton />
                </div>
            </main>
        );
    }

    return (
        <main className="py-4 space-y-6">
            <HeadCrumbs />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <BillingDetailsForm
                    id={id}
                    billingAddress={billingAddress as Address}
                    isBillingAddressLoading={isBillingAddressLoading}
                />
                <CheckoutDetails
                    isAddressComplete={isAddressComplete}
                    onSubmit={onSubmit}
                />
            </div>
        </main>
    );
};

export default CheckoutPage;
