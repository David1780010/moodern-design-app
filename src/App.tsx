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
      // Инициализация приложения
      twa.ready();
      twa.expand();
      
      // Блокируем закрытие свайпом
      twa.enableClosingConfirmation();
      twa.setBackgroundColor('#ffffff');
      
      // Предотвращаем закрытие через свайп
      const preventClose = (e: TouchEvent) => {
        const touch = e.touches[0];
        const startY = touch?.clientY ?? 0;
        
        const handleTouchMove = (e: TouchEvent) => {
          const moveY = e.touches[0]?.clientY ?? 0;
          const deltaY = moveY - startY;
          
          // Если свайп вниз, блокируем его
          if (deltaY > 10) {
            e.preventDefault();
          }
        };
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        
        const cleanup = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', cleanup);
          document.removeEventListener('touchcancel', cleanup);
        };
        
        document.addEventListener('touchend', cleanup, { once: true });
        document.addEventListener('touchcancel', cleanup, { once: true });
      };
      
      document.addEventListener('touchstart', preventClose, { passive: true });

      const isOrderPage = location.pathname === '/order';
      const root = document.getElementById('root');
      
      // Блокируем все touch-события на документе
      const preventDefaultTouch = (e: TouchEvent) => {
        if (e.touches.length > 1 || !isOrderPage) {
          e.preventDefault();
        }
      };

      const preventZoom = (e: TouchEvent) => {
        e.preventDefault();
      };

      const preventScroll = (e: Event) => {
        if (!isOrderPage) {
          e.preventDefault();
        }
      };

      // Добавляем обработчики событий
      document.addEventListener('touchstart', preventDefaultTouch, { passive: false });
      document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
      document.addEventListener('gesturestart', preventZoom as EventListener, { passive: false });
      document.addEventListener('gesturechange', preventZoom as EventListener, { passive: false });
      document.addEventListener('gestureend', preventZoom as EventListener, { passive: false });
      
      if (root) {
        document.body.addEventListener('touchmove', preventScroll, { passive: false });
        if (isOrderPage) {
          root.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
        }
      }
      
      // Обновляем стили в зависимости от страницы
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          overscroll-behavior: none !important;
          touch-action: none !important;
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          -webkit-tap-highlight-color: transparent;
          max-width: 100vw;
          max-height: 100vh;
          margin: 0;
          padding: 0;
        }
        
        #root {
          height: 100%;
          overflow-y: ${isOrderPage ? 'auto' : 'hidden'};
          overflow-x: hidden;
          position: relative;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          touch-action: ${isOrderPage ? 'pan-y' : 'none'} !important;
        }
        
        * {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          touch-action: ${isOrderPage ? 'pan-y' : 'none'} !important;
        }
      `;
      document.head.appendChild(style);

      // Очистка при размонтировании
      return () => {
        document.removeEventListener('touchstart', preventClose);
        document.removeEventListener('touchstart', preventDefaultTouch);
        document.removeEventListener('touchmove', preventDefaultTouch);
        document.removeEventListener('gesturestart', preventZoom as EventListener);
        document.removeEventListener('gesturechange', preventZoom as EventListener);
        document.removeEventListener('gestureend', preventZoom as EventListener);
        if (root) {
          document.body.removeEventListener('touchmove', preventScroll);
        }
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