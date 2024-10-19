import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    BarChart,
    FileSearch,
    PieChart
} from 'lucide-react';

import React, { useState } from 'react'
import { EarningsBarChart } from './earnings-bar-chart';
import { EarningsPieChart } from './earnings-pie-chart';

const data = [
    { "name": "Jan", "earnings": 4 },
    { "name": "Feb", "earnings": 3 },
    { "name": "Mar", "earnings": 2 },
    { "name": "Apr", "earnings": 2.78 },
    { "name": "May", "earnings": 1.89 },
    { "name": "Jun", "earnings": 2.39 },
    { "name": "Jul", "earnings": 3.49 }
];

export const Chart2 = () => {
    const [chartType, setChartType] = useState("bar");

    const onTypeChange = (type: string) => {
        setChartType(type);
    }

    return (
        <div className="shadow-md border max-w-full rounded-lg h-full lg:p-3 p-1.5 bg-white dark:bg-black">
            <div className='flex justify-end'>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger
                        className="max-w-[150px] h-9 rounded-md px-3"
                    >
                        <SelectValue placeholder="Chart Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bar">
                            <div className="flex items-center">
                                <BarChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Bar Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="pie">
                            <div className="flex items-center">
                                <PieChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Pie Chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">
                            No data for this period
                        </p>
                    </div>
                ) : (
                    <>
                        {chartType === "bar" && <EarningsBarChart data={data} />}
                        {chartType === "pie" && <EarningsPieChart data={data} />}
                    </>
                )}
            </div>
        </div>
    )
}
