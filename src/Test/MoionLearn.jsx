import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Test = () => {
  const [rel, useIn] = useInView({ threshold: 0.3, triggerOnce: false });
  return (
    <div ref={rel}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={useIn ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          delay: 2,
          stiffness: 500,
          damping: 10,
          //   repeat:10
          // repeatType:"loop"
        }}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      ></motion.div>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: "tween", ease: "easeIn" }}
        style={{ backgroundColor: "yellow", width: "100px", height: "100px" }}
      ></motion.div>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        style={{ backgroundColor: "green", width: "100px", height: "100px" }}
      ></motion.div>
      <motion.div
        initial={{ y: [200, 300, 400] }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        style={{ backgroundColor: "black", width: "100px", height: "100px" }}
      ></motion.div>
      <motion.div
        initial={false}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      ></motion.div>
    </div>
  );
};

export default Test;
