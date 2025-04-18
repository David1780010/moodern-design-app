import { motion } from 'framer-motion';

const Profile = () => {
  // TODO: Здесь будет получение данных пользователя из Telegram
  const userNickname = "NickName"; // Временные данные
  const userBalance = 0;
  const avatarUrl = ""; // Здесь будет URL аватарки из Telegram

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 px-6 flex flex-col items-center font-['Unbounded']"
    >
      <div className="w-[140px] h-[140px] rounded-full bg-gray-200 relative mb-4">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt="Аватар пользователя" 
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-200 shadow-[0_0_20px_rgba(167,87,255,0.5)]" />
        )}
      </div>

      <h2 className="text-[32px] font-bold mb-1">
        {userNickname}
      </h2>

      <p className="text-lg mb-6">
        баланс: {userBalance}$
      </p>

      <div className="w-full max-w-[220px] space-y-3">
        <button className="w-full bg-black text-white py-3 px-6 rounded-xl text-base">
          ПОПОЛНИТЬ
        </button>
        <button className="w-full bg-black text-white py-3 px-6 rounded-xl text-base">
          ЗАКАЗАТЬ
        </button>
        <button className="w-full bg-black text-white py-3 px-6 rounded-xl text-base">
          ИСТОРИЯ ЗАКАЗОВ
        </button>
      </div>
    </motion.div>
  );
};

export default Profile; 