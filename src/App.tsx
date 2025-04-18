import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const twa = window.Telegram?.WebApp;
    if (twa) {
      // Блокируем закрытие свайпом
      twa.enableClosingConfirmation();
      twa.expand();
      twa.ready();
      twa.setBackgroundColor('#ffffff');
      twa.setViewportHeight(100);
      
      // Блокируем все жесты свайпа
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          overscroll-behavior: none !important;
          touch-action: none !important;
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          -webkit-tap-highlight-color: transparent !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
          -webkit-overflow-scrolling: touch !important;
          touch-action: manipulation !important;
          -webkit-user-drag: none !important;
          -ms-touch-action: none !important;
          -ms-content-zooming: none !important;
          -ms-scroll-chaining: none !important;
          -ms-content-zooming: none !important;
          -ms-touch-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
          pointer-events: auto !important;
        }
        
        #root {
          height: 100% !important;
          overflow-y: ${location.pathname === '/order' ? 'auto' : 'hidden'} !important;
          overflow-x: hidden !important;
          position: relative !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-y: contain !important;
          touch-action: ${location.pathname === '/order' ? 'pan-y' : 'none'} !important;
        }
        
        * {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          touch-action: ${location.pathname === '/order' ? 'pan-y' : 'none'} !important;
          -webkit-user-drag: none !important;
          -ms-touch-action: none !important;
        }
      `;
      document.head.appendChild(style);

      // Блокируем все события touch
      const preventDefault = (e: Event) => {
        if (location.pathname !== '/order' || (e as TouchEvent).touches?.length > 1) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchstart', preventDefault, { passive: false });
      document.addEventListener('touchmove', preventDefault, { passive: false });
      document.addEventListener('gesturestart', preventDefault, { passive: false });
      document.addEventListener('gesturechange', preventDefault, { passive: false });

      return () => {
        document.removeEventListener('touchstart', preventDefault);
        document.removeEventListener('touchmove', preventDefault);
        document.removeEventListener('gesturestart', preventDefault);
        document.removeEventListener('gesturechange', preventDefault);
        style.remove();
      };
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navigation />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 