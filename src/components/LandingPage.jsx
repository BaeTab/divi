import React from 'react';
import { TrendingUp, Calendar, DollarSign, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-20 px-4 animate-fade-in">
        <div className="inline-block p-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6 px-4">
          ✨ 무료로 시작하는 배당 관리 서비스
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          잠자는 동안에도 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
            돈이 들어오는 시스템
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
          복잡한 엑셀 관리 없이, 월별 배당금 흐름을 한눈에 파악하세요.<br />
          당신의 경제적 자유(FIRE)를 위한 첫 걸음, Dividend Planner가 함께합니다.
        </p>
        <button 
          onClick={onStart}
          className="group bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          지금 바로 시작하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-white rounded-3xl shadow-sm border border-slate-100 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">왜 Dividend Planner인가요?</h2>
            <p className="text-slate-500">성공적인 배당 투자를 돕는 3가지 핵심 기능을 제공합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-emerald-50/50 transition duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">월별 배당 달력</h3>
              <p className="text-slate-600 leading-relaxed">
                매달 언제, 얼마나 들어오는지 한눈에 확인하세요. 1월부터 12월까지 꽉 찬 월급 달력을 만들어드립니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-blue-50/50 transition duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <PieChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">포트폴리오 분석</h3>
              <p className="text-slate-600 leading-relaxed">
                현재 나의 연간 총 배당금은 얼마일까요? 투자 금액 대비 배당률(Yield)을 자동으로 계산해드립니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-purple-50/50 transition duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">안전한 데이터 보안</h3>
              <p className="text-slate-600 leading-relaxed">
                서버에 전송되지 않는 로컬 저장 방식을 사용하여, 개인 투자 정보가 외부로 유출될 걱정이 없습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content for AdSense / SEO */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">경제적 자유를 향한 여정</h2>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700">
            <p>
              <strong>배당주 투자(Dividend Growth Investing)</strong>는 단순히 주식을 사고파는 행위가 아닙니다. 
              그것은 기업의 성과를 공유받으며, 내가 일하지 않아도 돈이 들어오는 <strong>'현금 흐름(Cash Flow)'</strong> 파이프라인을 구축하는 과정입니다.
            </p>
            
            <p>
              많은 투자자들이 주가 상승(Capital Gain)에만 집중하지만, 하락장에서도 우리를 지켜주는 것은 따박따박 들어오는 배당금입니다.
              워렌 버핏 또한 "잠자는 동안에도 돈이 들어오는 방법을 찾지 못한다면, 당신은 죽을 때까지 일해야 할 것이다"라고 말했습니다.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">왜 기록해야 할까요?</h3>
            <p>
              "측정할 수 없으면 관리할 수 없다"는 피터 드러커의 말처럼, 배당 투자도 기록과 관리가 필수적입니다.
              <ul>
                <li>어떤 종목이 <strong>배당 삭감</strong> 없이 꾸준히 지급하는지</li>
                <li>이번 달에 들어올 현금이 얼마인지</li>
                <li>목표한 <strong>월 현금흐름 100만 원</strong>까지 얼마나 남았는지</li>
              </ul>
              Dividend Planner는 이 모든 과정을 직관적인 대시보드로 시각화하여 여러분의 투자를 돕습니다.
              지금 바로 나만의 배당 포트폴리오를 등록하고, 경제적 자유에 한 걸음 더 다가가세요.
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-12 text-center text-slate-400 text-sm">
        <p>© 2024 Dividend Planner. All rights reserved.</p>
        <p className="mt-2">투자의 책임은 투자자 본인에게 있습니다.</p>
      </div>
    </div>
  );
}
