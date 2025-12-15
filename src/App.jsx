import { useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthProvider.jsx';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import AuthError from './Pages/AuthError';
import AuthSuccess from './Pages/AuthSuccess';
import Bans from './Pages/Bans';
import Earners from './Pages/Earners';
import Forums from './Pages/Forums';
import Gangs from './Pages/Gangs';
import EventsLeaderboard from './Pages/Leaderboard/EventsLeaderboard';
import GangLeaderboard from './Pages/Leaderboard/GangLeaderboard';
import TokensLeaderboard from './Pages/Leaderboard/TokensLeaderboard';
import Policy from './Pages/Policy';
import Profile from './Pages/Profile';
import Punishments from './Pages/Punishments';
import Rules from './Pages/Rules/Rules';
import Service from './Pages/Service';
import ShelveDetail from './Pages/Shelves/ShelveDetail';
import Shelves from './Pages/Shelves/Shelves';
import Staff from './Pages/Staff';
import Store from './Pages/Store';

function App() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="flex min-h-screen relative">
        <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isMobileMenuOpen={isMobileMenuOpen} />
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} onCloseMobileMenu={() => setIsMobileMenuOpen(false)} />
        <div className="flex flex-col flex-1 min-w-0">
          <main className="container flex-1 pt-[100px] xl:pl-[140px] xl:pr-[40px]">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/bans" element={<Bans />} />
              <Route path="/punishments" element={<Punishments />} />
              <Route path="/gangs" element={<Gangs />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/earners" element={<Earners />} />
              <Route path="/leaderboard" element={<Outlet />}>
                <Route index element={<Navigate to="/leaderboard/tokens" replace />} />
                <Route path="tokens" element={<TokensLeaderboard />} />
                <Route path="events" element={<EventsLeaderboard />} />
                <Route path="gangs" element={<GangLeaderboard />} />
              </Route>
              <Route path="/rules/*" element={<Rules />} />
              <Route path="/shelves" element={<Shelves />} />
              <Route path="/shelves/:shelfId" element={<ShelveDetail />} />
              <Route path="/shelves/:shelfId/:bookId" element={<ShelveDetail />} />
              <Route path="/shelves/:shelfId/:bookId/:pageId" element={<ShelveDetail />} />
              <Route path="/store" element={<Store />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/service" element={<Service />} />
              <Route path="/privacy" element={<Policy />} />
              <Route path="/auth/success" element={<AuthSuccess />} />
              <Route path="/auth/error" element={<AuthError />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
        {pathname === '/store' && (
          <div className="hidden xl:block absolute bottom-[88px] -z-1 right-0 w-[618px] h-[494px] bg-[url(/img/bg_buy_tokens.png)]  bg-contain bg-no-repeat bg-right"></div>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
