import UIIamge from "../images/icons/user-experience.png";
import WebImage from "../images/icons/web-development.png";
import MobileImage from "../images/icons/software-development.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../data/transisition";

const AboutTwo = () => {
  const [rel, useIN] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <div className="about-two-main" ref={rel}>
      <motion.h1
        className="about-two-main-h"
        initial={{ y: 300, opacity: 0 }}
        animate={useIN ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        What I do
      </motion.h1>
      <motion.p
        className="about-main-p"
        initial={{ y: 300, opacity: 0 }}
        animate={useIN ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </motion.p>
      <div className="about-two-sub1">
        <motion.div
          className="about-two-sub2"
          initial={{ y: 600, opacity: 0 }}
          animate={useIN ? { y: 0, opacity: 1 } : { y: 600, opacity: 0 }}
          transition={transistion}
        >
          <img src={UIIamge} alt="icon" className="about-two-img" />
          <div style={{ marginTop: "5%" }}>
            <label className="about-two-label">UI/UX Design</label>
            <p className="about-two-p">
              An effective UI/UX is what captures attention and spreads a clear
              message. I make sure the design is innovative and neat with all of
              this.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="about-two-sub2"
          initial={{ y: 400, opacity: 0 }}
          animate={useIN ? { y: 0, opacity: 1 } : { y: 400, opacity: 0 }}
          transition={transistion}
        >
          <img src={WebImage} alt="icon" className="about-two-img" />
          <div style={{ marginTop: "5%" }}>
            <label className="about-two-label">Web Development</label>
            <p className="about-two-p">
              If you are looking for a developer who’ll take over the research
              and development of your website, I am a well-established
              professional to help you with this
            </p>
          </div>
        </motion.div>
        <motion.div
          className="about-two-sub3"
          initial={{ y: 200, opacity: 0 }}
          animate={useIN ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={transistion}
        >
          <img src={MobileImage} alt="icon" className="about-two-img" />
          <div style={{ marginTop: "5%" }}>
            <label className="about-two-label">App Development</label>
            <p className="about-two-p">
              If you are looking for a user-friendly app that will attract more
              mobile users, I can help you design and build a platform with the
              latest and trendiest look and feel.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTwo;
