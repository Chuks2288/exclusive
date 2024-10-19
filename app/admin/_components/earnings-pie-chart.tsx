import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    data: {
        name: string;
        earnings: number;
    }[];
}

export const EarningsPieChart = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="earnings"
                    nameKey="name"
                    cx="50%" cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#4f46e5"
                    label={(entry) => `${entry.name}: $${entry.earnings}`}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                    }}
                    itemStyle={{ color: '#333' }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};
