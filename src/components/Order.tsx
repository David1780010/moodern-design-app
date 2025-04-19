import { motion } from 'framer-motion';

const Order = () => {
  return (
    <motion.div
      key="order"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex items-center justify-center"
    >
      <h1 className="text-6xl font-['Unbounded']">DH</h1>
    </motion.div>
  );
};

export default Order; 