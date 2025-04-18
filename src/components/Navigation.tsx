import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[320px] h-[64px] bg-[#FDFCFC] border border-[#DBDBDB] rounded-3xl shadow-lg flex items-center justify-around px-6">
      <Link 
        to="/" 
        className={`relative flex items-center p-2 ${location.pathname === '/' ? 'after:absolute after:inset-0 after:bg-black/10 after:rounded-xl' : ''}`}
      >
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/mooder-main.png?raw=true" 
          alt="Главная"
          className="w-7 h-7 relative z-10"
        />
      </Link>
      <Link 
        to="/order" 
        className={`relative flex items-center p-2 ${location.pathname === '/order' ? 'after:absolute after:inset-0 after:bg-black/10 after:rounded-xl' : ''}`}
      >
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-order.png?raw=true" 
          alt="Заказать"
          className="w-7 h-7 relative z-10"
        />
      </Link>
      <Link 
        to="/profile" 
        className={`relative flex items-center p-2 ${location.pathname === '/profile' ? 'after:absolute after:inset-0 after:bg-black/10 after:rounded-xl' : ''}`}
      >
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