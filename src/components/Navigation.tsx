import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[320px] h-[72px] bg-[#FDFCFC] border border-[#DBDBDB] rounded-3xl shadow-lg flex items-center justify-around px-6">
      <Link to="/" className="flex flex-col items-center gap-1">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/mooder-main.png?raw=true" 
          alt="Главная"
          className="w-7 h-7"
        />
        <span className="text-xs text-[#333333]">Главная</span>
      </Link>
      <Link to="/order" className="flex flex-col items-center gap-1">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-order.png?raw=true" 
          alt="Заказать"
          className="w-7 h-7"
        />
        <span className="text-xs text-[#333333]">Заказать</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center gap-1">
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/moodern-profile.png?raw=true" 
          alt="Профиль"
          className="w-7 h-7"
        />
        <span className="text-xs text-[#333333]">Профиль</span>
      </Link>
    </nav>
  );
};

export default Navigation; 