import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence mode="wait">
                <Welcome />
              </AnimatePresence>
            }
          />
          <Route
            path="/order"
            element={
              <AnimatePresence mode="wait">
                <Order />
              </AnimatePresence>
            }
          />
          <Route
            path="/profile"
            element={
              <AnimatePresence mode="wait">
                <Profile />
              </AnimatePresence>
            }
          />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App; 