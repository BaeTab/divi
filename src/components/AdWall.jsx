import React from 'react';
import { Lock, ExternalLink } from 'lucide-react';

const AdWall = ({ onAdClick }) => {
    const handleClick = () => {
        // Open the ad in a new tab
        window.open('https://deg.kr/799c1ba', '_blank');
        // Call the callback to unlock the dashboard
        onAdClick();
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                <Lock className="w-8 h-8" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">결과 잠금</h3>
                <p className="text-slate-600">
                    배당금 분석 결과를 확인하려면<br />
                    아래 버튼을 눌러 광고를 확인해주세요.
                </p>
            </div>

            <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                <span>광고 보고 결과 확인하기</span>
                <ExternalLink className="w-4 h-4" />
            </button>

            <p className="text-xs text-slate-400 mt-4">
                * 광고 클릭 후 자동으로 결과가 표시됩니다.
            </p>
        </div>
    );
};

export default AdWall;
