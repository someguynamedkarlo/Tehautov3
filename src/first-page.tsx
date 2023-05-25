import { motion } from "framer-motion";
function FirstPage() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5, y: -100, x: -100 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      Tehauto
    </motion.h1>
  );
}

export default FirstPage;
