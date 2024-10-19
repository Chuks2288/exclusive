import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";

type Props = {
    data: {
        date: string;
        sales: number;
        visitors: number;
    }[];
}

export const PerformanceLineChart = ({
    data
}: Props) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
                <XAxis
                    dataKey="date"
                    className="text-sm text-gray-500 dark:text-gray-400"
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                    }}
                    itemStyle={{ color: '#333' }}
                    cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number) => `${value}`}
                />
                <Legend verticalAlign="top" align="right" iconType="circle" />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
