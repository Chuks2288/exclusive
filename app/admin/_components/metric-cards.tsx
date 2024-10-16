"use client";

import { useGetAllProducts } from "@/features/products/api/use-get-all-products";
import { formatValue } from "@/lib/utils";
import { Eye, ShoppingCart, Box, DollarSign, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type MetricsProps = {
    value: number;
    label: string;
    unit: string;
    icon: ReactNode;
    bgColor: string;
    textColor: string;
}

export const MetricCards = () => {
    const { data: products } = useGetAllProducts();


    const metrics: MetricsProps[] = [
        {
            value: 250000,
            label: "Views",
            unit: "views",
            icon: <Eye className="size-5 text-indigo-500" />,
            bgColor: "bg-indigo-100",
            textColor: "text-indigo-700",
        },
        {
            value: 24000000,
            label: "Sales",
            unit: "sales",
            icon: <ShoppingCart className="size-5 text-green-500" />,
            bgColor: "bg-green-100",
            textColor: "text-green-700",
        },
        {
            value: products?.length || 15000,
            label: "Products",
            unit: "products",
            icon: <Box className="size-5 text-orange-500" />,
            bgColor: "bg-orange-100",
            textColor: "text-orange-700",
        },
        {
            value: 18000000,
            label: "Revenue",
            unit: "USD",
            icon: <DollarSign className="size-5 text-teal-500" />,
            bgColor: "bg-teal-100",
            textColor: "text-teal-700",
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg ${metric.bgColor}`} // Applied background color
                >
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white">
                            {metric.icon}
                        </div>
                        <div>
                            <p className={`text-lg font-semibold ${metric.textColor}`}>
                                {/* {metric.value.toLocaleString()} */}
                                {formatValue(metric.value).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">
                                {metric.label}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
