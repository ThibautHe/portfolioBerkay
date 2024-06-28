import { motion } from "framer-motion";

export function AnimatedDiv({ children, className, style, staggerChildren }) {
  const transition = {
    duration: 0.8,
    staggerChildren: 1.6,
  };

  return (
    <motion.div
      className={className}
      style={style}
      whileInView={{ opacity: [0, 1], y: [-50, 0] }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
