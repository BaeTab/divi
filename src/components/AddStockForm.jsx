import React, { useState } from 'react';
import { PlusCircle, RotateCcw } from 'lucide-react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

const PRESETS = [
    { label: '1, 4, 7, 10월 (분기 A)', months: [1, 4, 7, 10] },
    { label: '2, 5, 8, 11월 (분기 B)', months: [2, 5, 8, 11] },
    { label: '3, 6, 9, 12월 (분기 C)', months: [3, 6, 9, 12] },
    { label: '매월 (월배당)', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];

export default function AddStockForm({ onAdd }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amountPerShare, setAmountPerShare] = useState('');
    const [selectedMonths, setSelectedMonths] = useState([]);

    const toggleMonth = (month) => {
        setSelectedMonths(prev =>
            prev.includes(month)
                ? prev.filter(m => m !== month)
                : [...prev, month].sort((a, b) => a - b)
        );
    };

    const applyPreset = (months) => {
        setSelectedMonths(months);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity || !amountPerShare || selectedMonths.length === 0) {
            alert('모든 필드를 입력하고 배당월을 최소 하나 이상 선택해주세요.');
            return;
        }

        onAdd({
            id: Date.now(),
            name,
            quantity: Number(quantity),
            amountPerShare: Number(amountPerShare),
            months: selectedMonths
        });

        // Log Analytics Event
        if (analytics) {
            logEvent(analytics, 'add_stock', {
                stock_name: name,
                preset_used: selectedMonths.length === 12 ? 'monthly' : 'custom'
            });
        }

        // Reset
        setName('');
        setQuantity('');
        setAmountPerShare('');
        setSelectedMonths([]);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-600" />
                자산 추가
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">종목명</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                            placeholder="예: 삼성전자"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">보유 수량</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                            placeholder="0"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">주당 배당금(원)</label>
                        <input
                            type="number"
                            value={amountPerShare}
                            onChange={(e) => setAmountPerShare(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">배당 월 설정</label>

                    {/* Presets */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {PRESETS.map((preset) => (
                            <button
                                key={preset.label}
                                type="button"
                                onClick={() => applyPreset(preset.months)}
                                className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-full transition border border-emerald-100"
                            >
                                {preset.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => setSelectedMonths([])}
                            className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full transition flex items-center gap-1 border border-gray-200"
                        >
                            <RotateCcw className="w-3 h-3" /> 초기화
                        </button>
                    </div>

                    {/* Month Toggles */}
                    <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
                        {[...Array(12)].map((_, i) => {
                            const month = i + 1;
                            const isSelected = selectedMonths.includes(month);
                            return (
                                <button
                                    key={month}
                                    type="button"
                                    onClick={() => toggleMonth(month)}
                                    className={`py-2 rounded-lg text-sm font-bold transition-all ${isSelected
                                        ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                                        }`}
                                >
                                    {month}월
                                </button>
                            );
                        })}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition transform active:scale-95"
                >
                    등록하기
                </button>
            </form>
        </div>
    );
}
