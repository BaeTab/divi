import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { formatCurrency, formatCurrencySimple } from '../utils/calculate';
import { DollarSign, Calendar, Target } from 'lucide-react';

const MONTHLY_GOAL = 1000000; // Target: 1 million KRW per month

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-4 border border-emerald-100 shadow-xl rounded-xl z-50">
                <p className="font-bold text-gray-800 mb-2">{label}</p>
                <p className="text-emerald-600 font-bold text-xl mb-2">
                    {formatCurrencySimple(data.total)}
                </p>
                {data.items.length > 0 && (
                    <div className="pt-2 border-t border-gray-100 space-y-1">
                        {data.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-600 gap-6">
                                <span className="font-medium">{item.name}</span>
                                <span className="font-mono">{formatCurrencySimple(item.amount)}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
    return null;
};

export default function Dashboard({ analysis }) {
    const { annualTotal, monthlyAverage, monthlyData } = analysis;
    const achievementRate = (monthlyAverage / MONTHLY_GOAL) * 100;

    return (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Annual Total */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 flex items-center justify-between hover:translate-y-[-2px] transition duration-300">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">연간 총 배당금</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1 tracking-tight">{formatCurrency(annualTotal)}</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
                        <DollarSign className="w-6 h-6" />
                    </div>
                </div>

                {/* Monthly Average */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 flex items-center justify-between hover:translate-y-[-2px] transition duration-300">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">월 평균 배당금</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1 tracking-tight">{formatCurrency(monthlyAverage)}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                        <Calendar className="w-6 h-6" />
                    </div>
                </div>

                {/* Goal Achievement (Monthly Base) */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 flex items-center justify-between hover:translate-y-[-2px] transition duration-300">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">목표 달성률 <span className="text-xs text-gray-400">(월 100만원)</span></p>
                        <p className="text-2xl font-bold text-gray-800 mt-1 tracking-tight">{achievementRate.toFixed(1)}%</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                        <Target className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    월별 배당금 흐름
                </h2>
                <div className="h-80 w-full animate-fade-in-up">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                tickFormatter={(value) => value === 0 ? '0' : `${Math.floor(value / 10000)}만`}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ECFDF5' }} />
                            <Bar dataKey="total" radius={[8, 8, 0, 0]} maxBarSize={40} animationDuration={1000}>
                                {monthlyData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.total > 0 ? '#10B981' : '#E5E7EB'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
