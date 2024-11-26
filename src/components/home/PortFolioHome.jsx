import PortfolioPic from "../../images/portfolio.jpg";
import "../../css/index.css";
import Navigation from "../navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../../data/transisition";

const PortfolioHome = () => {
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
          PORTFOLIO
        </motion.label>
        <motion.img
           initial={{ x: 200, opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
           transition={transistion}
          src={PortfolioPic}
          alt="icon"
          className="home-img"
        />
      </div>
    </div>
  );
};

export default PortfolioHome;

// https://websitedemos.net/portfolio-02/?customize=template
