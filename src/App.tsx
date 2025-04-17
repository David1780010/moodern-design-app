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

  return (
    <div className="App" ref={appRef}>
      <Welcome />
    </div>
  );
}

export default App;
