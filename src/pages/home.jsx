import HomePic from "../images/home_pic.png";
import Email from "../images/icons/mail.png";
import Contact from "../images/icons/telephone.png";
import "../css/index.css";
import Navigation from "../components/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../data/transisition";

const Home = () => {
  const [rel, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <div className="home-main" ref={rel}>
      <Navigation />
      <div className="home-sub1">
        <motion.div
          className="home-sub2"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={transistion}
        >
          <div>
            <label className="home-lbl2">HELLO MY NAME IS,</label>
            <hr></hr>
          </div>
          <div>
            <h1 className="home-m1">A.T.N. Ruwandima</h1>
            <h1 className="home-lbl3">Software Developer</h1>
          </div>
          <div className="home-sub3">
            <div className="home-sub4">
              <img src={Email} alt="icon" />
              <label
                style={{
                  color: "white",
                  fontFamily:
                    ' "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                }}
              >
                nadeesharuwandima@gmail.com
              </label>
            </div>
            <div className="home-sub4">
              <img src={Contact} alt="icon" />
              <label style={{
                  color: "white",
                  fontFamily:
                    ' "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                }}>+94 711764232</label>
            </div>
          </div>
        </motion.div>
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={transistion}
          src={HomePic}
          alt="icon"
          className="home-img"
        />
      </div>
    </div>
  );
};

export default Home;

// https://websitedemos.net/portfolio-02/?customize=template
