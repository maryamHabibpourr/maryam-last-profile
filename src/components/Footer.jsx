
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { insta, twt, link, gitt } from "../assets";


const Footer = () => {

  return (
    <div
      className={` flex xl:flex-row flex-col  overflow-hidden border-t border-dotted border-white`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.55] bg-transparent p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} mb-4`}>ABOUT</p>
        <p className={`${styles.sectionSubTextSmaller} text-justify lowercase`}>
          This is the official website of an unofficial person who try to
          understand more about reasons of things. This site belong to{" "}
          <span className="text-[#f12711] uppercase">Maryam Habibpour</span> .
        </p>
        <p className={`${styles.sectionSubTextSmaller} mt-4`}>
          Email:{" "}
          <span className="text-[#f12711] lowercase">
            e.maryamhabibpour@gmail.com
          </span>
        </p>
        <p className={`${styles.sectionSubTextSmaller} mt-2`}>
          Phone Number:{" "}
          <span className="text-[#f12711] lowercase">+989919704552</span>
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-row justify-center items-center  xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <img src={insta} alt="insta" />
        <img src={twt} alt="twt" />
        <img src={link} alt="link" /> */}
        <img
          src={gitt}
          alt="gitt"
          className="w-[100px] h-[100px] cursor-pointer"
          onClick={() =>
            window.open("https://github.com/maryamHabibpourr/", "_blank")
          }
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
