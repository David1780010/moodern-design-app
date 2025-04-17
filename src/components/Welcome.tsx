import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start px-8 justify-start min-h-screen pt-32"
    >
      <h1 className="text-4xl font-bold text-black font-['Unbounded'] mb-16 mx-auto">
        Moodern design
      </h1>
      <div className="text-2xl leading-normal font-sans max-w-[600px] text-black text-left">
        тут вы найдете современный, стильный, проффесиональный дизайн от moodern design,вы можете заказать:
      </div>
    </motion.div>
  );
};

export default Welcome; 