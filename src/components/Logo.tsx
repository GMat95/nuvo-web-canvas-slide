
import { motion } from "framer-motion";

export const Logo = ({ className = "", animated = false }: { className?: string; animated?: boolean }) => {
  if (animated) {
    return (
      <div className={`flex items-center ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="font-bold text-2xl relative"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            E
          </motion.span>
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block"
          >
            D
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-block"
          >
            G
          </motion.span>
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block"
          >
            E
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="absolute -top-1 -right-2 text-xs"
          >
            ®
          </motion.span>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className={`font-bold text-2xl relative ${className}`}>
      EDGE<span className="absolute -top-1 -right-2 text-xs">®</span>
    </div>
  );
};

export default Logo;
