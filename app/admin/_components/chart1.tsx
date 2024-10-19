import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, FileSearch, LineChart } from 'lucide-react';
import React, { useState } from 'react'
import { PerformanceLineChart } from './performance-line-chart';
import { data } from '@/data';
import { PerformanceAreaChart } from './performance-area-chart';

export const Chart1 = () => {
    const [chartType, setChartType] = useState("area");

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
                        <SelectItem value="area">
                            <div className="flex items-center">
                                <AreaChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Area Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="line">
                            <div className="flex items-center">
                                <LineChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Line Chart
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
                        {chartType === "area" && <PerformanceAreaChart data={data} />}
                        {chartType === "line" && <PerformanceLineChart data={data} />}
                    </>
                )}
            </div>
        </div>
    )
}
