import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in text-gray-700">
            <SEO title="개인정보처리방침" description="Dividend Planner의 개인정보 처리방침입니다." url="/privacy" />
            <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침 (Privacy Policy)</h1>

            <div className="space-y-6 text-sm leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">1. 개인정보의 처리 목적</h2>
                    <p>
                        'Dividend Planner'(이하 '서비스')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br />
                        - 서비스 제공: 배당금 계산 및 포트폴리오 관리 기능 제공
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">2. 처리하는 개인정보의 항목 및 저장 방식</h2>
                    <p>
                        본 서비스는 **서버 없이 동작하는 웹 애플리케이션**으로, 사용자의 어떤 개인정보도 수집하여 외부 서버로 전송하거나 저장하지 않습니다.<br />
                        사용자가 입력한 모든 데이터(주식 보유 현황, 수량 등)는 사용자의 브라우저 내 **로컬 스토리지(LocalStorage)**에만 저장됩니다.
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-4">
                        <li>저장 항목: 사용자가 직접 입력한 종목명, 수량, 배당금 정보</li>
                        <li>저장 위치: 사용자 기기(브라우저) 내부</li>
                        <li>수집 방법: 사용자의 직접 입력</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">3. 쿠키(Cookie) 및 광고 식별자 사용</h2>
                    <p>
                        본 서비스는 사용자 편의를 위해 쿠키를 사용할 수 있으며, Google AdSense 광고 게재를 위해 서드파티(Google)가 쿠키를 수집할 수 있습니다.
                        사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">4. 개인정보의 파기</h2>
                    <p>
                        브라우저 캐시 및 로컬 스토리지 데이터를 삭제함으로써 사용자는 즉시 자신의 모든 데이터를 파기할 수 있습니다. 별도의 회원 탈퇴 절차가 필요하지 않습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">5. 문의처</h2>
                    <p>
                        본 서비스의 개인정보 처리와 관련하여 문의사항이 있으신 경우 아래 연락처로 문의 주시기 바랍니다.<br />
                        - 이메일: (이메일 주소를 입력하세요)
                    </p>
                </section>
            </div>
        </div>
    );
}
