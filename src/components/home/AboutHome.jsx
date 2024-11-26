import AboutPic from "../../images/about.png"
import "../../css/index.css";
import Navigation from "../navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../../data/transisition";

const AboutHome = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="home-main" ref={ref}>
      <Navigation />
      <div className="home-sub1">
        <motion.label
         initial={{ x: -200, opacity: 0 }}
         animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
         transition={transistion}
          className="home-lbl1"
        >
          ABOUT
        </motion.label>
        <motion.img
           initial={{ x: 200, opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
           transition={transistion}
          src={AboutPic}
          alt="icon"
          className="home-img"
        />
      </div>
    </div>
  );
};

export default AboutHome;

// https://websitedemos.net/portfolio-02/?customize=template
