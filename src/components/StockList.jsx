import React from 'react';
import { Trash2, TrendingUp } from 'lucide-react';
import { formatCurrencySimple } from '../utils/calculate';

export default function StockList({ stocks, onDelete }) {
    if (stocks.length === 0) {
        return (
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 mt-6 text-center">
                <p className="text-gray-400">아직 등록된 자산이 없습니다.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                보유 자산 목록
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="py-3 px-2 text-sm text-gray-500 font-medium">종목명</th>
                            <th className="py-3 px-2 text-sm text-gray-500 font-medium text-right">수량</th>
                            <th className="py-3 px-2 text-sm text-gray-500 font-medium text-right">주당 배당금</th>
                            <th className="py-3 px-2 text-sm text-gray-500 font-medium text-center">배당월</th>
                            <th className="py-3 px-2 text-sm text-gray-500 font-medium text-center">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                <td className="py-4 px-2 font-bold text-gray-800">{stock.name}</td>
                                <td className="py-4 px-2 text-right text-gray-600">{stock.quantity}주</td>
                                <td className="py-4 px-2 text-right text-gray-600 font-mono">{formatCurrencySimple(stock.amountPerShare)}</td>
                                <td className="py-4 px-2 text-center">
                                    <div className="flex flex-wrap gap-1 justify-center max-w-[200px] mx-auto">
                                        {stock.months.sort((a, b) => a - b).map(m => (
                                            <span key={m} className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded">
                                                {m}월
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-4 px-2 text-center">
                                    <button
                                        onClick={() => onDelete(stock.id)}
                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                                        title="삭제"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
