import { motion } from 'framer-motion';

const Order = () => {
  return (
    <motion.div
      key="order"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded'] mb-16 text-center">
        Выберите нужную вам услугу
      </h1>
    </motion.div>
  );
};

export default Order; 