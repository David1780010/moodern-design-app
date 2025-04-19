import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#130B2B',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  );
}

export default App; 