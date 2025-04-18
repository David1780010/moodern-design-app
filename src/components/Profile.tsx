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
      className="min-h-screen pt-20 px-6 flex flex-col items-center"
    >
      <div className="w-[200px] h-[200px] rounded-full bg-gray-200 relative mb-6">
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

      <h2 className="text-[40px] font-['Unbounded'] font-bold mb-2">
        {userNickname}
      </h2>

      <p className="text-xl font-['Unbounded'] mb-8">
        баланс: {userBalance}$
      </p>

      <div className="w-full max-w-[400px] space-y-4">
        <button className="w-full bg-black text-white font-['Unbounded'] py-4 px-8 rounded-full text-xl">
          ПОПОЛНИТЬ
        </button>
        <button className="w-full bg-black text-white font-['Unbounded'] py-4 px-8 rounded-full text-xl">
          ЗАКАЗАТЬ
        </button>
        <button className="w-full bg-black text-white font-['Unbounded'] py-4 px-8 rounded-full text-xl">
          ИСТОРИЯ ЗАКАЗОВ
        </button>
      </div>
    </motion.div>
  );
};

export default Profile; 