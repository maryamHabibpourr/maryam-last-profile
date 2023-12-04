import { useEffect, useRef, useState } from "react";

import PinCard from "./components/pinCard/PinCard";
import Hero from "./components/Hero";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Star";
import Chess from "./components/Chess";
import Footer from "./components/Footer";
import CopyPrivacy from "./components/CopyPrivacy";
import Experience from "./components/Experience";
import Works from "./components/Works";
import HorizontallScroll from "./components/HorizontallScroll";
import StreamlinedExperience from "./components/StreamlinedExperience";
import About from "./components/About";
import VideoBackground from "./components/VideoBackground";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/nav/Toggle";
import Navigation  from "./components/nav/Nav";



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    vidRef.current?.play();
  }, []);

  return (
    <div className="relative z-0 bg-black">
      <div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="100%"
        >
          <motion.div className="navbar" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
      <Hero />
      <div
        className={`relative z-10 w-full overflow-x-clip ${
          isLargeScreen ? "block" : "hidden"
        }`}
      >
        <StreamlinedExperience />
      </div>
      <div className="relative bg-Experience-pattern bg-gray-950">
        <About />
      </div>
      <div className="relative bg-Experience-pattern bg-black">
        <Experience />
      </div>
      <div
        className={`relative bg-hero-pattern ${
          isLargeScreen ? "block" : "hidden"
        }`}
      >
        <PinCard />
      </div>
      <div className={`relative ${isLargeScreen ? "block" : "hidden"}`}>
        <HorizontallScroll />
      </div>
      <div className={`${isLargeScreen ? "hidden" : "block"}`}>
        <Works />
      </div>
      <div className="relative bg-gradient-to-b from-black to-[rgba(0,0,0,0.50)] ">
        <Publication />
        <VideoBackground />
      </div>
      <Chess />
      <div className="relative">
        <Contact />
        <Footer />
        <CopyPrivacy />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
