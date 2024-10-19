import React from 'react'
import { PerformanceAreaChart } from './performance-area-chart'
import { EarningsBarChart } from './earnings-bar-chart'
import { Chart1 } from './chart1'
import { Chart2 } from './chart2'

export const DataCharts = () => {
    return (
        <div className="grid lg:grid-cols-[1.8fr,1fr] gap-6 min-h-[300px]">
            <Chart1 />
            <Chart2 />
            {/* <PerformanceAreaChart /> */}
            {/* <EarningsBarChart /> */}
        </div>
    )
}
