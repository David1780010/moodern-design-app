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

      <div className="grid grid-cols-1 gap-6 max-w-[400px] mx-auto">
        <div className="aspect-square rounded-[32px] bg-gradient-to-b from-[#D581FF]/70 to-white p-6 flex items-end shadow-lg">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-xl">Stops</span>
            <span className="text-black font-['Unbounded'] text-xl">0%</span>
          </div>
        </div>

        <div className="aspect-square rounded-[32px] bg-gradient-to-b from-[#ECCEFA]/70 to-white p-6 flex items-end shadow-lg">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-xl">Stops</span>
            <span className="text-black font-['Unbounded'] text-xl">43%</span>
          </div>
        </div>

        <div className="aspect-square rounded-[32px] bg-gradient-to-b from-[#D581FF]/70 to-white p-6 flex items-end shadow-lg">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-xl">Stops</span>
            <span className="text-black font-['Unbounded'] text-xl">70%</span>
          </div>
        </div>

        <div className="aspect-square rounded-[32px] bg-gradient-to-b from-[#EAEAEA]/70 to-white p-6 flex items-end shadow-lg">
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-['Unbounded'] text-xl">Stops</span>
            <span className="text-black font-['Unbounded'] text-xl">95%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Order; 