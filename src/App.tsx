import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      // Блокируем закрытие при свайпе вниз
      window.Telegram.WebApp.setBackgroundColor('#ffffff');
      window.Telegram.WebApp.enableClosingConfirmation();
      
      // Отключаем zoom
      window.Telegram.WebApp.expand();
      
      // Блокируем нативные жесты
      const style = document.createElement('style');
      style.textContent = `
        body {
          overscroll-behavior: none;
          touch-action: pan-y pinch-zoom;
          -webkit-overflow-scrolling: touch;
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
        #root {
          overflow-y: auto;
          height: 100%;
          width: 100%;
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