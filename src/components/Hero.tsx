import { GithubIcon } from "../assets/icons/github";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { maryamAx } from "../assets";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <div
        className={`w-full xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
      >
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <div
            className={`top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#dcff50]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#dcff50]">Maryam</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
              <a
                href="#"
                className="mt-4 ml-4 flex items-center text-[#dcff50] text-[12px]"
              >
                <GithubIcon className="mr-2 inline h-5 w-5" />
                Import GitHub project
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center "
        >
          <img src={maryamAx} alt="ax" className="ax-design" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Hero, "Hero");
