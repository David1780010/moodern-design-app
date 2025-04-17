import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start min-h-screen pt-32"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded'] mb-16">
        Moodern design
      </h1>
      <div className="text-[26px] leading-normal font-semibold font-sans max-w-[500px] text-black text-left ml-16">
        тут вы найдете{' '}<br />
        современный,{' '}<br />
        стильный,{' '}<br />
        проффесиональный{' '}<br />
        дизайн от moodern{' '}<br />
        design,вы можете{' '}<br />
        заказать:
      </div>
    </motion.div>
  );
};

export default Welcome; 