import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { formatCurrency, formatCurrencySimple } from '../utils/calculate';
import { DollarSign, Calendar, Target, Settings, Coffee, Smartphone, Home, Plane, Pencil } from 'lucide-react';
import GoalSettingModal from './GoalSettingModal';

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

const FinancialFreedomRoadmap = ({ monthlyAverage, goal }) => {
    const milestones = [
        { label: '커피값', amount: 150000, icon: Coffee, color: 'text-amber-600', bg: 'bg-amber-100' },
        { label: '통신비', amount: 300000, icon: Smartphone, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: '주거비', amount: 1000000, icon: Home, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        { label: '경제적자유', amount: goal, icon: Plane, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    ];

    // Filter milestones that are smaller than or equal to the goal (except the final one which is always the goal)
    // Actually, we usually want to show the path. If the goal is small (e.g. 50k), showing "Phone (300k)" is weird.
    // So let's filter milestones to only show those <= goal OR the goal itself if it's unique.
    // For simplicity, I'll show all milestones up to the goal.

    // Calculate progress for the bar (capped at 100%)
    // We want a non-linear or segmented progress bar, but a simple % is easier for V1.
    const progressPercent = Math.min((monthlyAverage / goal) * 100, 100);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5 text-emerald-500" />
                경제적 자유를 향한 여정
            </h2>

            <div className="relative pt-6 pb-2 px-2">
                {/* Progress Bar Background */}
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {/* Milestones Markers */}
                <div className="flex justify-between mt-4 relative">
                    {milestones.map((milestone, idx) => {
                        // Only show milestone if it's within reasonable range of the goal
                        // If goal is 150k, don't show 300k, 1m milestones.
                        if (milestone.amount > goal && milestone.amount !== goal) {
                            if (idx < milestones.length - 1) return null; // Skip intermediate ones bigger than goal
                        }

                        const isReached = monthlyAverage >= milestone.amount;
                        // Determine position roughly? 
                        // Flex justify-between handles spacing evenly, which isn't mathematically accurate to amount, 
                        // but visually better for a "roadmap" of stages.

                        return (
                            <div key={idx} className="flex flex-col items-center group relative">
                                <div className={`p-2 rounded-full mb-2 transition-all duration-500 ${isReached ? milestone.bg + ' scale-110 shadow-md ring-2 ring-offset-2 ring-emerald-400' : 'bg-gray-100 grayscale opacity-50'}`}>
                                    <milestone.icon className={`w-5 h-5 ${isReached ? milestone.color : 'text-gray-400'}`} />
                                </div>
                                <span className={`text-xs font-bold whitespace-nowrap ${isReached ? 'text-gray-800' : 'text-gray-400'}`}>
                                    {milestone.label}
                                </span>
                                <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                                    {formatCurrencySimple(milestone.amount)}
                                </span>

                                {/* Current Value Indicator bubble if this is the next unfinished milestone? No, keep it simple */}
                            </div>
                        );
                    })}
                </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6 bg-gray-50 py-3 rounded-lg">
                현재 <span className="font-bold text-gray-800">{formatCurrencySimple(monthlyAverage)}</span>으로
                목표의 <span className="font-bold text-emerald-600">{progressPercent.toFixed(1)}%</span>를 달성했습니다! 🔥
            </p>
        </div>
    );
};

export default function Dashboard({ analysis, goal: initialGoal = 1000000, onGoalChange }) {
    const { annualTotal, monthlyAverage, monthlyData } = analysis;
    const [goal, setGoal] = useState(initialGoal);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sync local state if prop changes (e.g. from localStorage load)
    React.useEffect(() => {
        setGoal(initialGoal);
    }, [initialGoal]);

    const handleGoalSave = (newGoal) => {
        setGoal(newGoal);
        if (onGoalChange) onGoalChange(newGoal);
    };

    const achievementRate = (monthlyAverage / goal) * 100;

    return (
        <div className="space-y-6">
            {/* Goal Setting Modal */}
            <GoalSettingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                currentGoal={goal}
                onSave={handleGoalSave}
            />

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
                <div className="group bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 flex items-center justify-between hover:translate-y-[-2px] transition duration-300 relative">
                    <div className="flex flex-col items-start h-full justify-between">
                        <p className="text-sm text-gray-500 font-medium mb-1">목표 달성률</p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 pl-2 pr-3 py-1 bg-purple-50 hover:bg-purple-100 border border-purple-100 hover:border-purple-200 rounded-lg transition-all duration-200 text-xs text-purple-700 mb-1 active:scale-95 group/btn w-full sm:w-auto cursor-pointer"
                            title="클릭하여 목표 수정"
                        >
                            <span className="font-semibold text-purple-600/70">목표:</span>
                            <span className="font-bold">{formatCurrencySimple(goal)}</span>
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm ml-auto group-hover/btn:bg-purple-600 group-hover/btn:text-white transition-colors">
                                <Pencil className="w-3 h-3" />
                            </div>
                        </button>

                        <p className="text-2xl font-bold text-gray-800 tracking-tight">{achievementRate.toFixed(1)}%</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-full text-purple-600 self-center">
                        <Target className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Financial Freedom Roadmap */}
            <FinancialFreedomRoadmap monthlyAverage={monthlyAverage} goal={goal} />

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
