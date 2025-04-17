import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start min-h-screen p-4 text-center pt-32"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded'] mb-8">
        Moodern design
      </h1>
      <div className="text-lg leading-[1.1] font-sans max-w-[1200px] text-black text-left">
        тут вы найдете современный, стильный, проффесиональный дизайн от moodern design,вы можете заказать:
      </div>
    </motion.div>
  );
};

export default Welcome; 