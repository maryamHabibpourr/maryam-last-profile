//@ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import maryam from "../assets/maryam.mp4";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";




const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  useEffect(()=>{
      vidRef.current.play();
      setPlayVideo(true);
  },[])
  


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Django, DRF, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-transparent  p-8 rounded-2xl"
        >
          {/* <ComputersCanvas /> */}
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative flex items-center justify-center"
>
          <video
            className="object-cover"
            ref={vidRef}
            src={maryam}
            type="video/mp4"
            controls={false}
            playsInline  
            unMuted
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.20)]">
            <div
              className="w-[50px] h-[50px] absolute  flex items-center justify-center rounded-full border border-solid border-[#f12711] cursor-pointer"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            >
              {playVideo ? (
                <BsPauseFill color="#ccc" fontSize={20} />
              ) : (
                <BsFillPlayFill color="#ccc" fontSize={20} />
              )}
            </div>
            <div className="w-[50px] h-[160px] absolute bottom-0 right-0 bg-black  flex items-center justify-center cursor-pointer">

            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Intro, "about");
