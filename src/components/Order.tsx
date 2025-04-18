import { motion } from 'framer-motion';

const Order = () => {
  return (
    <motion.div
      key="order"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-6"
    >
      <h1 className="text-2xl font-['Unbounded'] mb-8 text-center">
        Выберите нужную вам услугу
      </h1>

      <div className="grid grid-cols-1 gap-4 max-w-[480px] mx-auto">
        <div className="h-[125px] rounded-[24px] bg-gradient-to-b from-[#D581FF] via-[#ECCEFA] to-[#EAEAEA] p-4 flex flex-col justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-['Unbounded'] text-black">UI / UX design</h2>
            <p className="text-sm text-black/70 font-['Unbounded']">профессиональный дизайн который сделают быстро</p>
          </div>
          <button className="bg-black text-white font-['Unbounded'] text-sm py-2 px-4 rounded-full w-fit">
            заказать
          </button>
        </div>

        <div className="h-[125px] rounded-[24px] bg-gradient-to-b from-[#D581FF] via-[#ECCEFA] to-[#EAEAEA] p-4 flex items-end shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-lg">Stops</span>
            <span className="text-black font-['Unbounded'] text-lg">43%</span>
          </div>
        </div>

        <div className="h-[125px] rounded-[24px] bg-gradient-to-b from-[#D581FF] via-[#ECCEFA] to-[#EAEAEA] p-4 flex items-end shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-lg">Stops</span>
            <span className="text-black font-['Unbounded'] text-lg">70%</span>
          </div>
        </div>

        <div className="h-[125px] rounded-[24px] bg-gradient-to-b from-[#D581FF] via-[#ECCEFA] to-[#EAEAEA] p-4 flex items-end shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-lg">Stops</span>
            <span className="text-black font-['Unbounded'] text-lg">95%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Order; 