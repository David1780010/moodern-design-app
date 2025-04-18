import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[320px] h-[64px] bg-[#FDFCFC] border border-[#DBDBDB] rounded-3xl shadow-lg flex items-center justify-around px-6">
      <Link 
        to="/" 
        className="relative flex items-center p-3"
      >
        {location.pathname === '/' && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
        className="relative flex items-center p-3"
      >
        {location.pathname === '/order' && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
        className="relative flex items-center p-3"
      >
        {location.pathname === '/profile' && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 bg-black/10 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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