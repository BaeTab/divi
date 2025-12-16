import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Plus, LayoutDashboard, Wallet, Menu, X } from 'lucide-react'
import AddStockForm from './components/AddStockForm'
import AdWall from './components/AdWall'
import StockList from './components/StockList'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import SEO from './components/SEO'
import PageTracker from './components/PageTracker'
import Guide from './pages/Guide'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import FAQ from './pages/FAQ'
import { calculateDividends } from './utils/calculate'

import LandingPage from './components/LandingPage'

function MainApp() {
  const [stocks, setStocks] = useState(() => {
    try {
      const saved = localStorage.getItem('dividend_stocks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load data", e);
      return [];
    }
  });

  const [analysis, setAnalysis] = useState(() => calculateDividends(stocks));
  const [isStarted, setIsStarted] = useState(false);
  const [hasClickedAd, setHasClickedAd] = useState(() => {
    return sessionStorage.getItem('dividend_ad_clicked') === 'true';
  });

  const handleAdClick = () => {
    setHasClickedAd(true);
    sessionStorage.setItem('dividend_ad_clicked', 'true');
  };

  useEffect(() => {
    localStorage.setItem('dividend_stocks', JSON.stringify(stocks));
    setAnalysis(calculateDividends(stocks));
  }, [stocks]);

  const handleAddStock = (newStock) => {
    setStocks((prev) => [newStock, ...prev]);
  };

  const handleDeleteStock = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setStocks((prev) => prev.filter(stock => stock.id !== id));
    }
  };

  // Show Landing Page if no data and user hasn't clicked start
  if (stocks.length === 0 && !isStarted) {
    return (
      <>
        <SEO
          title="Dividend Planner - 배당금 월급 계산기"
          description="나만의 배당 포트폴리오를 만들고 매달 들어오는 예상 배당금을 확인하세요. 복잡한 엑셀 없이 간편하게 관리할 수 있습니다."
        />
        <LandingPage onStart={() => setIsStarted(true)} />
      </>
    );
  }

  return (
    <div className="space-y-12">
      <SEO
        title="대시보드"
        description="나만의 배당금 월급 달력. 매달 들어오는 배당금을 관리하고 목표 달성률을 확인하세요."
      />
      {/* Dashboard Section */}
      <section className="animate-fade-in">
        <div className="mb-5 flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-800">대시보드</h2>
        </div>
        {hasClickedAd ? (
          <Dashboard analysis={analysis} />
        ) : (
          <AdWall onAdClick={handleAdClick} />
        )}
      </section>

      {/* Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <section className="lg:col-span-5 sticky top-28 animate-slide-in-left">
          <div className="mb-5 flex items-center gap-2">
            <Plus className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-800">자산 등록</h2>
          </div>
          <AddStockForm onAdd={handleAddStock} />
        </section>

        {/* List */}
        <section className="lg:col-span-7 animate-slide-in-right">
          <StockList stocks={stocks} onDelete={handleDeleteStock} />
        </section>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 border-b border-slate-200 sticky top-0 z-30 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-md text-white">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Dividend<span className="text-emerald-600">Planner</span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">나만의 배당금 월급 달력</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-emerald-600 transition">홈</Link>
              <Link to="/guide" className="hover:text-emerald-600 transition">가이드</Link>
              <Link to="/faq" className="hover:text-emerald-600 transition">FAQ</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full left-0 z-40">
              <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <Link to="/" className="block py-2 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>홈</Link>
                <Link to="/guide" className="block py-2 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>가이드</Link>
                <Link to="/faq" className="block py-2 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content with Routes */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-grow w-full">
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
