import { motion } from "framer-motion";

export const Notices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="h-screen bg-white"
    >
      <div className="max-w-[1200px] mx-auto py-20"></div>
    </motion.div>
  );
};
