# 💰 Dividend Planner (배당금 월급 달력)

![Dividend Planner Thumbnail](https://divi-plan.web.app/og-image.png)

> **"매달 들어오는 배당금, 월급처럼 관리하세요."**  
> Dividend Planner는 복잡한 엑셀 없이도 쉽고 직관적으로 배당금 포트폴리오를 관리하고, 월별 현금 흐름을 시각화해주는 핀테크 웹 애플리케이션입니다.

<br/>

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.6.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Recharts](https://img.shields.io/badge/Recharts-3.5.1-22b5bf?style=for-the-badge)

<br/>

## ✨ Key Features

### 1. 📊 직관적인 대시보드
- **자산 요약**: 연간 총 배당금, 월 평균 배당금, 목표 달성률(%)을 한눈에 확인합니다.
- **시각화 차트**: Recharts를 활용하여 월별 예상 배당금 흐름을 바 차트로 제공합니다.
- **툴팁 기능**: 차트 막대에 마우스를 올리면 해당 월의 상세 종목과 금액을 보여줍니다.

### 2. 📝 간편한 자산 관리
- **스마트 입력**: 분기 배당(1,4,7,10월 등) 및 매월 배당 프리셋 버튼으로 클릭 한 번에 배당월을 설정합니다.
- **데이터 영속성**: 별도의 회원가입 없이 브라우저 `localStorage`에 데이터가 안전하게 저장됩니다.
- **반응형 디자인**: PC, 태블릿, 모바일 등 모든 기기에서 최적화된 UI를 제공합니다.

### 3. 🔍 SEO & Analytics
- **SEO 최적화**: 페이지별 동적 Meta Tag(Title, Description) 변경으로 검색 노출 극대화.
- **Google AdSense**: 자동 광고 스크립트 탑재 및 수익화 준비 완료.
- **Firebase Analytics**: 사용자 방문 통계 및 페이지뷰 추적.

<br/>

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/dividend-planner.git

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정 (.env 파일 생성)
# VITE_FIREBASE_API_KEY=...

# 4. 개발 서버 실행
npm run dev
```

<br/>

## 📂 Project Structure

```bash
divi/
├── public/              # 정적 파일 (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # 재사용 가능한 UI 컴포넌트 (Chart, Form, SEO...)
│   ├── pages/           # 라우팅 페이지 (Guide, FAQ, Privacy...)
│   ├── utils/           # 계산 로직 (배당금 합산 등)
│   ├── App.jsx          # 라우팅 및 레이아웃 설정
│   └── main.jsx         # 진입점 (Provider 설정)
├── .firebaserc          # Firebase 프로젝트 설정
├── firebase.json        # Firebase 호스팅 설정
└── vite.config.js       # Vite 설정
```

<br/>

## 📄 License

This project is licensed under the MIT License.
