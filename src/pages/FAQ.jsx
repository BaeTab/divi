import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const FAQS = [
    {
        question: "데이터는 어디에 저장되나요? 서버에 올라가나요?",
        answer: "아니요, Dividend Planner는 '서버리스' 방식으로 동작합니다. 여러분이 입력한 모든 주식 데이터는 여러분이 사용 중인 브라우저의 '로컬 스토리지(Local Storage)'에 안전하게 저장됩니다. 외부 서버로 전송되지 않으므로 해킹이나 개인정보 유출 걱정 없이 안심하고 사용하셔도 됩니다."
    },
    {
        question: "브라우저를 닫아도 데이터가 유지되나요?",
        answer: "네, 그렇습니다. 로컬 스토리지에 저장되므로 브라우저를 닫았다가 다시 열어도 데이터는 그대로 남아있습니다. 다만, 브라우저의 '그릿(방문 기록/캐시) 삭제' 기능을 사용하거나 '시크릿 모드'에서 사용한 경우에는 데이터가 사라질 수 있으니 주의해주세요."
    },
    {
        question: "모바일과 PC에서 데이터를 연동할 수는 없나요?",
        answer: "현재 버전에서는 기기 간 데이터 연동(동기화)을 지원하지 않습니다. 각 기기마다 별도로 데이터가 저장됩니다. 추후 구글 로그인 등을 통한 클라우드 동기화 기능을 도입할 예정입니다."
    },
    {
        question: "배당금 화폐 단위 설정은 어떻게 하나요?",
        answer: "편의성을 위해 모든 금액은 '원화(KRW)' 기준으로 통일하여 입력받고 있습니다. 달러 배당금의 경우, 현재 환율을 곱하여 원화로 환산해 입력해주시면 더 정확한 자산 현황을 파악하실 수 있습니다."
    },
    {
        question: "배당 프리셋 기능은 무엇인가요?",
        answer: "미국 주식 중에는 분기별(3개월마다)로 배당을 주는 기업들이 많습니다. (예: 1/4/7/10월 지급). 매번 4개의 달을 일일이 체크하는 번거로움을 줄이기 위해, 자주 쓰이는 배당 월 조합을 버튼 하나로 선택할 수 있도록 만든 편의 기능입니다."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
            <SEO
                title="자주 묻는 질문"
                description="서비스 이용에 관한 궁금한 점을 해결해드립니다. 데이터 저장 방식, 배당 프리셋 등."
                url="/faq"
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문 (FAQ)</h1>
                <p className="text-gray-500">서비스 이용 중 궁금한 점을 확인해보세요.</p>
            </div>

            <div className="space-y-4">
                {FAQS.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition"
                        >
                            <span className="font-bold text-gray-800 flex items-center gap-3">
                                <HelpCircle className="w-5 h-5 text-emerald-500" />
                                {faq.question}
                            </span>
                            {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </button>

                        {openIndex === index && (
                            <div className="p-5 pt-0 bg-gray-50 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">
                                <div className="mt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
