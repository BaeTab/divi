import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20 pb-10 pt-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Dividend Planner</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            당신의 경제적 자유를 응원합니다.<br />
                            나만의 배당 포트폴리오를 관리하고,<br />
                            매달 들어오는 현금 흐름을 시각화하세요.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">메뉴</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/" className="hover:text-emerald-600">배당금 계산기</a></li>
                            <li><a href="/guide" className="hover:text-emerald-600">배당투자 가이드</a></li>
                            <li><a href="/faq" className="hover:text-emerald-600">자주 묻는 질문</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">법적 고지</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/privacy" className="hover:text-emerald-600">개인정보처리방침</a></li>
                            <li><a href="/terms" className="hover:text-emerald-600">이용약관</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 text-center">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Dividend Planner. All rights reserved.<br />
                        본 사이트에서 제공하는 정보는 투자 참고용이며, 실제 투자의 책임은 본인에게 있습니다.
                    </p>
                </div>
            </div>
        </footer>
    );
}
