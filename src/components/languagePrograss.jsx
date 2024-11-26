import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transistion } from "../data/transisition";

const LanguagePrograss = () => {
  const data = [
    { value: "70", language: "Java" },
    { value: "80", language: "React" },
    { value: "60", language: "Vue" },
    { value: "75", language: "PHP" },
    { value: "82", language: "Angular" },
    { value: "79", language: "C#" },
  ];


  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="lng-main" ref={ref}>
      <motion.h1
        className="lng-lbl1"
        initial={{ y: 300, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={transistion}
      >
        Skills
      </motion.h1>
      <motion.div
        className="lng-sub1"
        initial={{ y: 300, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={transistion}
      >
        {data.map((e, index) => (
          <div key={index}>
            <label style={{ color: "white", fontWeight: "bold" }}>
              {e.language}
            </label>
            <div className="lng-sub2">
              <progress
                value={e.value}
                max="100"
                className="lng-progress-bar"
              ></progress>
              <label style={{ color: "white" }}> {e.value}%</label>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguagePrograss;
