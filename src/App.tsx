import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/order" element={<div className="min-h-screen pt-32">Страница заказа</div>} />
          <Route path="/profile" element={<div className="min-h-screen pt-32">Страница профиля</div>} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App; 