import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

type Props = {
    data: {
        name: string;
        earnings: number;
    }[]
}

export const EarningsBarChart = ({
    data
}: Props) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
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
                    formatter={(value) => `${value}K`}
                />
                {/* @ts-ignore */}
                <Legend verticalAlign="center" align="center" layout="horizontal" />
                <Bar
                    dataKey="earnings"
                    fill="#4f46e5"
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
