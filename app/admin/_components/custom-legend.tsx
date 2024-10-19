import { data } from "@/data";



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



interface CustomLegendProps {
    payload: LegendPayload[]
}

export const CustomLegend = ({
    payload
}: CustomLegendProps) => {
    const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
    const totalVisitors = data.reduce((sum, item) => sum + item.visitors, 0);

    return (
        <div className="flex flex-col space-y-2 pr-4">
            {payload.map((entry, index) => (
                <div
                    key={`item-${index}`}
                    className="flex items-center space-x-2"
                >
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            backgroundColor: entry.color,
                            color: '#fff',
                            borderRadius: '50%',
                        }}
                    />
                    <span className="text-xs">{entry.value}</span>
                </div>
            ))}
        </div>
    );
};
