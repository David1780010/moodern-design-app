import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
    >
      <h1 className="text-6xl font-bold text-gray-800 mb-4 font-['Unbounded']">
        Moodern design
      </h1>
    </motion.div>
  );
};

export default Welcome; 