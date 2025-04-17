import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 w-full"
    >
      <h1 className="text-3xl font-bold text-black font-['Unbounded'] mb-16">
        Moodern design
      </h1>
      <div className="w-full pl-8">
        <div className="text-[26px] leading-normal font-bold max-w-[500px] text-black text-left">
          тут вы найдете{' '}<br />
          современный,{' '}<br />
          стильный,{' '}<br />
          проффесиональный{' '}<br />
          дизайн от moodern{' '}<br />
          design,вы можете{' '}<br />
          заказать:
        </div>
        <img 
          src="https://github.com/David1780010/moodern-design-app/blob/main/Screenshot%202025-04-17%20at%2021.20.10.png?raw=true"
          alt="Moodern Design Preview"
          className="mt-8 max-w-full -ml-4"
        />
      </div>
    </motion.div>
  );
};

export default Welcome; 