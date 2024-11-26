import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transistion } from "../data/transisition";

const Footers = () => {
  const [rel, aI] = useInView({ threshold: 0.3, triggerOnce: false });
  return (
    <div className="footer-main" ref={rel}>
      <div className="footer-sub1">
        <motion.div
          className="footer-sub2"
          initial={{ y: 300, opacity: 0 }}
          animate={aI ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={transistion}
        >
          <label className="footer-lbl1">
            Based in Australia, working worldwide
          </label>
          <a href="https://github.com/Nadeesha699" className="footer-link1">
            Get in touch
          </a>
        </motion.div>
        <motion.div
          className="footer-sub3"
          initial={{ y: 300, opacity: 0 }}
          animate={aI ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={transistion}
        >
          <div className="footer-sub4">
            <label className="footer-lbl2">Social</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100039332113797&mibextid=ZbWKwL"
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer" // Adds security, prevents access to window.opener
                className="footer-link2"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/nadeesha-ruwandima-b5a356259"
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer" // Adds security, prevents access to window.opener
                className="footer-link2"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/+94711764232"
                target="_blank" // This opens the link in a new tab
                rel="noopener noreferrer" // Adds security, prevents access to window.opener
                className="footer-link2"
              >
                whatsapp
              </a>
            </div>
          </div>
          <div className="footer-sub4">
            <label className="footer-lbl2">Service</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/service" className="footer-link2">
                UI/UX Design
              </Link>
              <Link to="/service" className="footer-link2">
                Web Development
              </Link>
              <Link to="/service" className="footer-link2">
                Mobile Development
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.label
        className="footer-link3"
        initial={{ y: 300, opacity: 0 }}
        animate={aI ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={transistion}
      >
        Copyright © Nadeesha Ruwandima
      </motion.label>
    </div>
  );
};

export default Footers;
