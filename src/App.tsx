import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    const twa = window.Telegram?.WebApp;
    if (twa) {
      // Сообщаем, что приложение готово
      twa.ready();
      
      // Разворачиваем на весь экран
      twa.expand();
      
      // Включаем подтверждение закрытия
      twa.enableClosingConfirmation();
      
      // Устанавливаем цвет фона
      twa.setBackgroundColor('#ffffff');
      
      // Блокируем все touch-события на документе
      const preventDefaultTouch = (e: TouchEvent) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      };

      const preventZoom = (e: TouchEvent) => {
        e.preventDefault();
      };

      const preventScroll = (e: Event) => {
        e.preventDefault();
      };

      // Добавляем обработчики событий
      document.addEventListener('touchstart', preventDefaultTouch, { passive: false });
      document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
      document.addEventListener('gesturestart', preventZoom as EventListener, { passive: false });
      document.addEventListener('gesturechange', preventZoom as EventListener, { passive: false });
      document.addEventListener('gestureend', preventZoom as EventListener, { passive: false });
      
      // Разрешаем скролл только внутри #root
      const root = document.getElementById('root');
      if (root) {
        document.body.addEventListener('touchmove', preventScroll, { passive: false });
        root.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
      }
      
      // Блокируем нативные жесты через CSS
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
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          touch-action: pan-y !important;
        }
        
        * {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          touch-action: none !important;
        }
      `;
      document.head.appendChild(style);

      // Очистка при размонтировании
      return () => {
        document.removeEventListener('touchstart', preventDefaultTouch);
        document.removeEventListener('touchmove', preventDefaultTouch);
        document.removeEventListener('gesturestart', preventZoom as EventListener);
        document.removeEventListener('gesturechange', preventZoom as EventListener);
        document.removeEventListener('gestureend', preventZoom as EventListener);
        if (root) {
          document.body.removeEventListener('touchmove', preventScroll);
        }
      };
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App; 