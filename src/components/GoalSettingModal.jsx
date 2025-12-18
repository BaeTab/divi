import React, { useState, useEffect } from 'react';
import { X, Target, Coffee, Smartphone, Home, Plane } from 'lucide-react';
import { formatCurrencySimple } from '../utils/calculate';

export default function GoalSettingModal({ isOpen, onClose, currentGoal, onSave }) {
    const [goal, setGoal] = useState(currentGoal);

    useEffect(() => {
        setGoal(currentGoal);
    }, [currentGoal]);

    if (!isOpen) return null;

    const milestones = [
        { label: '커피값 해결', amount: 150000, icon: Coffee },
        { label: '통신비 해결', amount: 300000, icon: Smartphone },
        { label: '주거비 해결', amount: 1000000, icon: Home },
        { label: '경제적 자유', amount: goal, icon: Plane },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-scale-in">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <Target className="w-6 h-6 text-emerald-600" />
                        목표 설정
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            월 배당금 목표액 (원)
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={goal}
                                onChange={(e) => setGoal(Number(e.target.value))}
                                className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-lg font-bold text-gray-800 transition"
                                placeholder="1000000"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">원</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-right">
                            현재 설정: {formatCurrencySimple(goal)}
                        </p>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-4 space-y-3">
                        <p className="text-sm font-bold text-emerald-800 mb-2">이 금액을 달성하면?</p>
                        {milestones.map((m, idx) => (
                            goal >= m.amount && (
                                <div key={idx} className="flex items-center gap-3 text-sm text-emerald-700 opacity-80">
                                    <m.icon className="w-4 h-4" />
                                    <span>{m.label} ({formatCurrencySimple(m.amount)}) 달성 가능!</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-gray-50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-200 rounded-xl transition"
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            onSave(goal);
                            onClose();
                        }}
                        className="flex-1 py-3 bg-emerald-600 text-white font-bold hover:bg-emerald-700 rounded-xl shadow-lg transition"
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </div>
    );
}
