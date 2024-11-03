"use client";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { useCurrentUser } from "@/hooks/use-current-user";
import { DataTableSkeleton } from "./_components/skeleton/datatable-skeleton";
import { useGetAllProducts } from "@/features/products/api/use-get-all-products";


const ProductsPage = () => {
    const { data: products, isLoading } = useGetAllProducts();

    if (isLoading) {
        return (
            <div className="h-full">
                <DataTableSkeleton />
            </div>
        );
    }


    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <p className="text-md font-bold">No Products</p>
            </div>
        );
    }

    return (
        <div className="h-full">
            <DataTable
                columns={columns}
                data={products}
            />
        </div>
    );
};

export default ProductsPage;
