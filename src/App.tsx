import PinCard from "./components/pinCard/PinCard";
import Hero from "./components/Hero";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import Chess from "./components/Chess";
import Footer from "./components/Footer";
import CopyPrivacy from "./components/CopyPrivacy";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./components/nav/Toggle";
import { Navigation } from "./components/nav/Nav";

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
      <div className="relative bg-hero-pattern">
        <PinCard/>
      </div>
      <Publication />
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
