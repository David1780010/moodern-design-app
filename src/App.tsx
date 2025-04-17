import React, { useEffect, useRef } from 'react';
import Welcome from './components/Welcome';
import { useFullscreen } from './hooks/useFullscreen';

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const { launchIntoFullscreen } = useFullscreen();

  useEffect(() => {
    // Инициализация Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }

    // Запрос на полноэкранный режим
    if (appRef.current) {
      launchIntoFullscreen(appRef.current);
    }
  }, [launchIntoFullscreen]);

  const handleFullscreenClick = () => {
    if (appRef.current) {
      launchIntoFullscreen(appRef.current);
    }
  };

  return (
    <div className="App" ref={appRef}>
      <Welcome />
      <button
        onClick={handleFullscreenClick}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Полноэкранный режим
      </button>
    </div>
  );
}

export default App;
