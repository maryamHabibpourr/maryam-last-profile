import  { useEffect, useRef } from "react";
import man from "../assets/man.mp4";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Publication = () => {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    vidRef.current?.play();
  }, []);



  
  return (
    <div className="relative w-full h-screen  flex items-center justify-center overflow-hidden">
      <video
        className="w-full h-full object-cover"
        ref={vidRef}
        src={man}
        // type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="absolute w-full  inset-0  bg-gradient-to-b from-black to-[rgba(0,0,0,0.60)] ">
        <div className="flex flex-col items-start justify-start sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto">
          <motion.div variants={textVariant(1)}>
            <p className={`${styles.sectionSubText} `}>What I staudid in AI</p>
            <h2 className={`${styles.sectionHeadText}`}>
              Research and Publication
            </h2>
          </motion.div>
          <motion.div variants={textVariant(1)}>
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
              className="mt-2 text-white text-[11px] md:text-[17px] max-w-3xl leading-[30px] border-b border-solid border-[#f12711] cursor-pointer"
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
              className="mt-2 text-white text-[11px] md:text-[17px]  max-w-3xl leading-[30px] border-b border-solid border-[#f12711] cursor-pointer"
            >
              An uncertainty-aware deep learning framework for defect detection
              in casting products
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
