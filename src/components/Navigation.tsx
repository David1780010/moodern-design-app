import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[320px] h-[64px] bg-[#FDFCFC] border border-[#DBDBDB] rounded-3xl shadow-lg flex items-center justify-around px-6">
      <Link 
        to="/" 
        className="relative flex items-center px-5 py-3"
      >
        {location.pathname === '/' && (
          <motion.div
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/mooder-main.png?raw=true" 
          alt="Главная"
          className="w-7 h-7 relative z-10"
        />
      </Link>
      <Link 
        to="/order" 
        className="relative flex items-center px-5 py-3"
      >
        {location.pathname === '/order' && (
          <motion.div
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-order.png?raw=true" 
          alt="Заказать"
          className="w-7 h-7 relative z-10"
        />
      </Link>
      <Link 
        to="/profile" 
        className="relative flex items-center px-5 py-3"
      >
        {location.pathname === '/profile' && (
          <motion.div
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-profile.png?raw=true" 
          alt="Профиль"
          className="w-7 h-7 relative z-10"
        />
      </Link>
    </nav>
  );
};

export default Navigation; 