import React, { useEffect } from 'react';
import Welcome from './components/Welcome';

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }

    // Запрос на полноэкранный режим
    const requestFullscreen = async () => {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          await (document.documentElement as any).msRequestFullscreen();
        }
      } catch (error) {
        console.error('Ошибка при запросе полноэкранного режима:', error);
      }
    };

    requestFullscreen();
  }, []);

  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
