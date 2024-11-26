import { useState } from "react";
import "../css/index.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../data/transisition";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [rel, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="about-main" ref={rel}>
      <motion.h1
        initial={{ y: 300, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
        style={{ color: "#3f8fff",
          fontFamily:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}
      >
        About me
      </motion.h1>
      <motion.p
        className="about-p"
        initial={{ y: 300, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        Hello, I’m Nadessha Ruwandima, a passionate web developer based in
        Australlia with over 6 months of experience in website and product
        design. With a solid foundation in both front-end and back-end
        development, I specialize in creating professional and visually
        appealing websites that align with the latest industry trends.
      </motion.p>
      <div className="about-sub">
        <div style={{ width: "40%" }}>
          <motion.p
            className="about-p1"
            initial={{ y: 300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            transition={transistion}
          >
            I Design professional and beautiful web & mobile, desktop app
          </motion.p>
        </div>
        <div style={{ width: "50%" }}>
          <motion.p
            className="about-p2"
            initial={{ y: 300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            transition={transistion}
          >
            Over the years, I’ve had the privilege of working with a diverse
            range of businesses, allowing me to fine-tune my understanding of
            client needs across different niches. My expertise spans various
            design domains—landing pages, email templates, app UI/UX, and mobile
            platforms—enabling me to offer unique insights and solutions for
            each project.
          </motion.p>
          <motion.label
            className="btn-readmore"
            initial={{ y: 300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            transition={transistion}
            onClick={() => {
              visible ? setVisible(false) : setVisible(true);
            }}
          >
            {visible ? "" : "read more"}
          </motion.label>
          <motion.p
            className="about-p2"
            initial={{ y: 300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            style={{
              display: visible ? "flex" : "none",
            }}
          >
            My approach prioritizes collaboration; I provide multiple options
            and work closely with you to bring your vision to life without
            compromise. Whether it’s web, mobile, or desktop design, I’m
            committed to delivering results that exceed expectations and elevate
            your digital presence.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
