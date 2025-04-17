import React, { useRef } from 'react';
import Welcome from './components/Welcome';
import { useFullscreen } from './hooks/useFullscreen';

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const { launchIntoFullscreen } = useFullscreen();

  const handleFullscreenClick = () => {
    if (appRef.current) {
      launchIntoFullscreen(appRef.current);
    }
  };

  return (
    <div className="App" ref={appRef}>
      <Welcome />
    </div>
  );
}

export default App; 