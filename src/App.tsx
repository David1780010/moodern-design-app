import React, { useEffect } from 'react';
import Welcome from './components/Welcome';

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
