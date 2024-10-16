"use client";

import { useEffect } from "react";
import { useIsAdmin } from "@/hooks/use-isAdmin";
import { redirect } from "next/navigation";
import { useIsModerator } from "@/hooks/use-isModerator";

import { MetricCards } from "./_components/metric-cards";
import { PerformanceLineChart } from "./_components/performance-line-chart";
import { EarningsBarChart } from "./_components/earnings-bar-chart";
import { RecentOrders } from "./_components/recent-orders";
import { PerformanceAreaChart } from "./_components/performance-area-chart";
import { EarningsPieChart } from "./_components/earnings-pie-chart";

const AdminPage = () => {
    const isAdmin = useIsAdmin();
    const isModerator = useIsModerator();

    useEffect(() => {
        if (isAdmin === false && isModerator === false) {
            redirect("/");
        }
    }, [isAdmin, isModerator]);

    return (
        <div className="pb-10  flex flex-col space-y-4">
            <MetricCards />
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-6 min-h-[300px]">
                <PerformanceAreaChart />
                <EarningsBarChart />
            </div>
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-6 min-h-[300px]">
                <PerformanceLineChart />
                <EarningsPieChart />
            </div>
            <RecentOrders />
        </div>
    );
};

export default AdminPage;
