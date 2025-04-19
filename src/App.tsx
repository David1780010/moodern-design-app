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
      // Инициализация WebApp
      twa.ready();
      twa.expand();
      
      // Разрешаем закрытие только через кнопку, блокируем свайп
      twa.setClosingBehavior({ button: true, swipe: false });
      
      // Блокируем все жесты свайпа
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
          overscroll-behavior: none !important;
          touch-action: none !important;
          -webkit-overflow-scrolling: touch !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          -webkit-tap-highlight-color: transparent !important;
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
      `;
      document.head.appendChild(style);

      // Обработчик для блокировки всех жестов
      const preventDefault = (e: Event) => {
        if (location.pathname !== '/order' || (e as TouchEvent).touches?.length > 1) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      // Добавляем обработчики с capture phase для перехвата событий
      document.addEventListener('touchstart', preventDefault, { passive: false, capture: true });
      document.addEventListener('touchmove', preventDefault, { passive: false, capture: true });
      document.addEventListener('gesturestart', preventDefault, { passive: false, capture: true });
      document.addEventListener('gesturechange', preventDefault, { passive: false, capture: true });

      return () => {
        document.removeEventListener('touchstart', preventDefault, { capture: true });
        document.removeEventListener('touchmove', preventDefault, { capture: true });
        document.removeEventListener('gesturestart', preventDefault, { capture: true });
        document.removeEventListener('gesturechange', preventDefault, { capture: true });
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
    <div className="min-h-screen flex items-center justify-center">
      DH
    </div>
  );
}

export default App; 