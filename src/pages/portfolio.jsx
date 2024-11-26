import Pro1 from "../images/pro1.png";
import Pro2 from "../images/pro2.png";
import Pro3 from "../images/pro3.jpeg";
import Pro4 from "../images/pro4.jpeg";
import Pro5 from "../images/pro5.png";
import More from "../images/icons/right-arrow.png";
import "../css/index.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../data/transisition";

const data = [
  {
    icon: Pro1,
    name: "//recat native vehicle service center mobile app",
    href: "https://github.com/Nadeesha699/react-native-vehicle-service-center-mobile-app",
  },
  {
    icon: Pro2,
    name: "//android think you mobile game",
    href: "https://github.com/Nadeesha699/android-think-you-mobile-game",
  },
  {
    icon: Pro3,
    name: "//vue simple web app",
    href: "https://github.com/Nadeesha699/vue-simple-web-responsive-frontend",
  },
  {
    icon: Pro4,
    name: "//recat simple web app",
    href: "https://github.com/Nadeesha699/react-simple-web-frontend",
  },
  {
    icon: Pro5,
    name: "//angular simple mobile app",
    href: "https://github.com/Nadeesha699/angular-simple-responsive-web-frontend",
  },
];

const Portfolio = () => {
  const [rel, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <div className="portfolio-main" ref={rel}>
      <motion.div
        className="portfolio-sub"
        initial={{ y: 300, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        <h1 style={{color: "white" }}>Portfolio</h1>
        <a href="https://github.com/Nadeesha699">
          <img src={More} alt="icon" className="portfolio-img2" />
        </a>
      </motion.div>
      <motion.div
        className="portfolio-sub2 "
        initial={{ y: 300, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        {data.map((e, index) => {
          return (
            <a href={e.href} key={index}>
              <img src={e.icon} alt="icon" className="portfolio-img" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
