import React from 'react';
import SEO from '../components/SEO';

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in text-gray-700">
            <SEO title="이용약관" description="Dividend Planner 이용약관입니다." />
            <h1 className="text-3xl font-bold text-gray-900 mb-8">이용약관 (Terms of Service)</h1>

            <div className="space-y-6 text-sm leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">제1조 (목적)</h2>
                    <p>
                        본 약관은 'Dividend Planner'(이하 '서비스')가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 서비스의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">제2조 (서비스의 제공 및 변경)</h2>
                    <p>
                        1. 서비스는 사용자의 배당금 자산을 관리하고 시각화하는 기능을 제공합니다.<br />
                        2. 서비스는 언제든지 기능의 일부 또는 전부를 수정하거나 중단할 수 있습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">제3조 (면책 조항)</h2>
                    <p>
                        1. 본 서비스에서 제공하는 모든 금융 정보와 계산 결과는 사용자의 투자를 돕기 위한 참고 자료일 뿐이며, 정확성이나 완전성을 보장하지 않습니다.<br />
                        2. 본 서비스의 정보를 바탕으로 한 투자 결정의 책임은 전적으로 사용자 본인에게 있으며, 서비스 제공자는 이에 대한 법적 책임을 지지 않습니다.<br />
                        3. 데이터 유실: 본 서비스는 서버가 아닌 사용자의 로컬 브라우저에 데이터를 저장하므로, 브라우저 캐시 삭제 또는 기기 변경 시 데이터가 유실될 수 있습니다. 이에 대해 서비스 제공자는 책임지지 않습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">제4조 (약관의 개정)</h2>
                    <p>
                        본 약관은 관련 법령을 위배하지 않는 범위에서 개정될 수 있으며, 개정 시에는 서비스 내 공지사항을 통해 공지합니다.
                    </p>
                </section>
            </div>
        </div>
    );
}
