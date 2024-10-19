import {
    AreaChart,
    // @ts-ignore
    linearGradient,
    XAxis,
    YAxis,
    CartesianGrid,
    Area,
    Tooltip,
    ResponsiveContainer,
    Legend,
    // @ts-ignore
    LegendPayload
} from "recharts";
import { CustomLegend } from "./custom-legend";

type Props = {
    data: {
        date: string;
        sales: number;
        visitors: number;
    }[];
}


export const PerformanceAreaChart = ({
    data
}: Props) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="date"
                        className="text-sm"
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip />
                    {/* @ts-ignore */}
                    <Legend content={<CustomLegend payload={data} />} verticalAlign="center" align="center" layout="horizontal" />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorSales)" />
                    <Area type="monotone" dataKey="visitors" stroke="#82ca9d" fillOpacity={1} fill="url(#colorVisitors)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
