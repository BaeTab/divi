# 역할(Role)
당신은 사용자의 자산 증식을 돕는 핀테크 웹 애플리케이션 전문 시니어 프론트엔드 개발자입니다.

# 프로젝트 개요
React와 Vite를 사용하여 **'배당금 월급 달력 (Dividend Planner)'**을 개발합니다.
서버 없이 브라우저의 `localStorage`를 활용하여 데이터를 관리하는 SPA이며, 사용자가 자신의 현금 흐름을 직관적으로 파악할 수 있도록 돕습니다.

# 기술 스택 (Tech Stack)
- Core: React, Vite (JavaScript 또는 TypeScript 중 선택)
- Style: Tailwind CSS
- Chart: Recharts (데이터 시각화)
- Icons: Lucide-react
- Storage: localStorage (데이터 영구 저장)

# 디자인 가이드 (Theme)
- **Primary Color:** '수익'과 '성장'을 상징하는 **Emerald Green(#10B981)** 또는 신뢰를 주는 **Blue(#3B82F6)** 계열을 메인 컬러로 사용하세요.
- **Atmosphere:** 깔끔하고 숫자 가독성이 높은 금융 앱 스타일 (White/Gray 배경, 굵은 숫자 폰트).
- **Responsive:** 모바일과 데스크톱 모두에서 깨지지 않는 반응형 UI.

# 핵심 기능 명세 (Functional Requirements)

1. 데이터 구조 (DividendItem)
   - 종목명(name), 보유 수량(quantity), 주당 배당금(amountPerShare), 배당 월 배열(months).
   - **통화 기준:** 환율 계산 복잡도를 줄이기 위해 모든 화폐 단위는 **'원화(KRW)'**로 통일합니다.

2. 종목 추가/수정 폼 (UX 고도화 필수)
   - **배당 월 선택 UI:** 1월~12월을 선택할 수 있는 12개의 토글 버튼 제공.
   - **[중요] 간편 프리셋 버튼:** 일일이 누르는 불편함을 줄이기 위해, 배당 월 버튼 상단에 **'프리셋 버튼'**을 배치하세요.
     - `[1, 4, 7, 10월]` (분기 배당 A)
     - `[2, 5, 8, 11월]` (분기 배당 B)
     - `[3, 6, 9, 12월]` (분기 배당 C)
     - `[매월]` (1~12월 전체 선택)
     - 버튼 클릭 시 해당 월들이 자동으로 체크/해제되어야 합니다.

3. 대시보드 (Dashboard)
   - **요약 카드:** 연간 총 배당금, 월평균 배당금, 목표 달성률(%) 표시.
   - **숫자 포맷:** 모든 금액은 3자리 콤마 포맷(`1,000,000원`)을 적용하세요.

4. 차트 및 캘린더 (Visualization)
   - **월별 차트:** 1월~12월 배당 총액을 보여주는 **Bar Chart (Recharts)**.
   - **Tooltip:** 차트 막대에 마우스를 올리면 해당 월에 들어오는 종목 리스트와 금액 상세를 보여주세요.
   - 차트 색상은 위에서 정의한 메인 컬러(Green/Blue)를 사용하세요.

5. 데이터 관리 (Logic)
   - 앱이 시작될 때 `localStorage`에서 데이터를 불러오고, 추가/수정/삭제 시 즉시 저장하세요.
   - 총액 계산 로직은 `utils/calculate.js` 등으로 분리하여 관리하세요.

# 작업 요청
위의 요구사항을 반영하여 프로젝트의 전체 폴더 구조를 잡고, 다음 핵심 컴포넌트들의 코드를 작성해 주세요.
1. `App.jsx` (전체 레이아웃 및 State 초기화)
2. `AddStockForm.jsx` (프리셋 버튼이 포함된 입력 폼)
3. `Dashboard.jsx` (요약 정보 및 Recharts 차트)
4. `StockList.jsx` (목록 조회 및 삭제 기능)