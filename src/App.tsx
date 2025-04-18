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
      
      // Блокируем нативные жесты
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          overscroll-behavior: none !important;
          touch-action: none !important;
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        #root {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
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