import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      key="contacts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* ... existing code ... */}
    </motion.div>
  );
};

export default Contacts; 