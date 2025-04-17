import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-8 pt-32 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-black font-['Unbounded'] mb-16">
        Moodern design
      </h1>
      <div className="w-full max-w-[500px]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[32px] leading-tight font-bold font-['SF Pro Rounded'] text-black mb-8"
        >
          тут вы найдете<br />
          современный,<br />
          стильный,<br />
          проффесиональный<br />
          дизайн от moodern<br />
          design,вы можете<br />
          заказать:
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[32px] leading-tight font-bold font-['SF Pro Rounded'] text-black relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-black before:rounded-full"
        >
          ui/ux design<br />
          анимированные авы/баннера<br />
          статичные авы/баннера<br />
          разработка стикеров/эмодзи
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Welcome; 