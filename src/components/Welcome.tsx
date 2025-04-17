import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 w-full"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded'] mb-16 text-center">
        Moodern design
      </h1>
      <div className="w-full pl-8">
        <div className="text-[26px] leading-normal font-bold font-['SF Pro Rounded'] max-w-[500px] text-black text-left">
          тут вы найдете{' '}<br />
          современный,{' '}<br />
          стильный,{' '}<br />
          проффесиональный{' '}<br />
          дизайн от moodern{' '}<br />
          design,вы можете{' '}<br />
          заказать:
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[26px] leading-normal font-bold font-['SF Pro Rounded'] max-w-[500px] text-black text-left mt-8"
        >
          ui/ux design{' '}<br />
          анимированные авы/баннера{' '}<br />
          статичные авы/баннера{' '}<br />
          разработка стикеров/эмодзи
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Welcome; 