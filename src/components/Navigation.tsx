import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[320px] h-[64px] bg-[#FDFCFC] border border-[#DBDBDB] rounded-full shadow-lg flex items-center justify-around px-6">
      <Link to="/" className="flex flex-col items-center">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/mooder-main.png?raw=true" 
          alt="Главная"
          className="w-6 h-6"
        />
      </Link>
      <Link to="/order" className="flex flex-col items-center">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-order.png?raw=true" 
          alt="Заказать"
          className="w-6 h-6"
        />
      </Link>
      <Link to="/profile" className="flex flex-col items-center">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-profile.png?raw=true" 
          alt="Профиль"
          className="w-6 h-6"
        />
      </Link>
    </nav>
  );
};

export default Navigation; 