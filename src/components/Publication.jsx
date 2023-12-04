//@ts-nocheck
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Publication = () => {


  return (
      <div className=" w-full h-screen overflow-hidden flex flex-col items-start justify-start ">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What I staudid in AI</p>
            <h2 className={`${styles.sectionHeadText}`}>
              Research and Publication
            </h2>
          </motion.div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>
              Exceptionally adept professional, proficient in researching,
              coding, and deploying deep learning models. Passionate for
              opportunities in research work that will open the door of career
              progression in AI industry.{" "}
            </p>
          </motion.div>
          <div className="w-full flex">
            <motion.p
              whileHover={{ color: "red" }}
              onClick={() =>
                window.open(
                  "https://www.sciencedirect.com/science/article/abs/pii/S0952197623004323",
                  "_blank"
                )
              }
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-2 text-white text-[11px] md:text-[17px] max-w-3xl leading-[30px] border-b border-solid border-[#dcff50] cursor-pointer"
            >
              Uncertainty-aware credit card fraud detection using deep learning
            </motion.p>
          </div>
          <div className="w-full flex ">
            <motion.p
              whileHover={{ color: "red" }}
              onClick={() =>
                window.open("https://arxiv.org/abs/2107.11643", "_blank")
              }
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-2 text-white text-[11px] md:text-[17px]  max-w-3xl leading-[30px] border-b border-solid border-[#dcff50] cursor-pointer"
            >
              An uncertainty-aware deep learning framework for defect detection
              in casting products
            </motion.p>
          </div>
      </div>

  );
};



export default SectionWrapper(Publication, "publication");
// export default Publication;
