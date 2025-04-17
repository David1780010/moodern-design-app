import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start min-h-screen p-4 text-center pt-32"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded']">
        Moodern design
      </h1>
    </motion.div>
  );
};

export default Welcome; 