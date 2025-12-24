import React from 'react';
import { BookOpen, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react';
import SEO from '../components/SEO';
import KakaoAdFit from '../components/KakaoAdFit';

export default function Guide() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
            <SEO
                title="배당주 투자 가이드"
                description="배당주 투자란 무엇인가? 배당락일, 지급일 등 필수 용어와 월 배당 포트폴리오 만드는 법을 알려드립니다."
                keywords="배당주, 투자가이드, 배당락일, 월배당, 포트폴리오, 주식공부"
                url="/guide"
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">배당주 투자 가이드 (Dividend Investing 101)</h1>
                <p className="text-xl text-gray-500">초보자부터 전문가까지, 성공적인 배당 투자를 위한 필수 지식</p>
            </div>

            <div className="space-y-16">
                {/* Section 1 */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">1. 배당주 투자란?</h2>
                            <p className="text-gray-600 leading-relaxed">
                                배당주 투자는 기업이 벌어들인 이익의 일부를 주주에게 나눠주는 '배당금'을 꾸준히 받아가는 투자 방식입니다.
                                시세 차익(주가 상승)뿐만 아니라, 정기적인 현금 흐름(Cash Flow)을 창출할 수 있다는 점이 가장 큰 장점입니다.
                                특히 은퇴 준비나 파이어족(FIRE)을 꿈꾸는 투자자들에게 인기가 높습니다.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl text-sm text-gray-700 space-y-2">
                        <p><strong>💡 핵심 포인트:</strong></p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>주가가 하락해도 배당금이라는 안전마진이 존재합니다.</li>
                            <li>복리 효과(배당 재투자)를 통해 자산을 기하급수적으로 늘릴 수 있습니다.</li>
                            <li>인플레이션 헷지(Hedge) 수단으로 유용합니다.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                            <CalendarCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">2. 반드시 알아야 할 용어</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                배당 투자를 시작하기 전, 다음 4가지 날짜와 용어는 반드시 숙지해야 합니다.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-emerald-500 transition cursor-default">
                            <h3 className="font-bold text-gray-800 mb-1">배당락일 (Ex-Dividend Date)</h3>
                            <p className="text-sm text-gray-600">이 날짜 전날까지 주식을 매수해야 배당금을 받을 수 있습니다. 배당락일 당일에 사면 이번 배당은 받지 못합니다.</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-emerald-500 transition cursor-default">
                            <h3 className="font-bold text-gray-800 mb-1">배당지급일 (Payment Date)</h3>
                            <p className="text-sm text-gray-600">실제로 증권 계좌에 현금이 입금되는 날짜입니다.</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-emerald-500 transition cursor-default">
                            <h3 className="font-bold text-gray-800 mb-1">배당성향 (Payout Ratio)</h3>
                            <p className="text-sm text-gray-600">순이익 중 얼마를 배당으로 주는지 나타내는 비율입니다. 너무 높으면(100% 이상) 배당 삭감 위험이 있습니다.</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-emerald-500 transition cursor-default">
                            <h3 className="font-bold text-gray-800 mb-1">배당성장 (Dividend Growth)</h3>
                            <p className="text-sm text-gray-600">기업이 매년 배당금을 늘려주는지 여부입니다. 배당 성장은 인플레이션을 방어하는 핵심입니다.</p>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">3. 월 배당 포트폴리오 만들기</h2>
                            <p className="text-gray-600 leading-relaxed">
                                많은 투자자들이 매달 월급처럼 배당을 받기를 원합니다. 이를 위해 배당 지급월이 서로 다른 종목을 조합할 수 있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-purple-500">
                            <h3 className="font-bold text-gray-800 mb-2">조합 예시 (미국 주식 기준)</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-20 font-bold bg-white px-2 py-1 rounded border border-gray-200 text-center">Group A</span>
                                    <span>1, 4, 7, 10월 지급 (예: 머크, 나이키, 시스코)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-20 font-bold bg-white px-2 py-1 rounded border border-gray-200 text-center">Group B</span>
                                    <span>2, 5, 8, 11월 지급 (예: AT&T, P&G, 스타벅스)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-20 font-bold bg-white px-2 py-1 rounded border border-gray-200 text-center">Group C</span>
                                    <span>3, 6, 9, 12월 지급 (예: 맥도날드, 화이자, 비자)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-20 font-bold bg-white px-2 py-1 rounded border border-gray-200 text-center">Monthly</span>
                                    <span>매월 지급 (예: 리얼티인컴 O, MAIN)</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-gray-600 text-sm">
                            * Dividend Planner의 '자산 추가' 기능을 활용하여 위 조합을 직접 만들어보고 월별 예상 수령액을 확인해보세요.
                        </p>
                    </div>
                </section>

                {/* Kakao AdFit (In-article) */}
                <KakaoAdFit />
            </div>
        </div>
    );
}
