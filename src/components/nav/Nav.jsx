//@ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navLinks = [
  {
    id: "about",
    text: "About",
  },
  {
    id: "work",
    text: "Work",
  },
  {
    id: "project",
    text: "Project",
  },
  {
    id: "publication",
    text: "Publication",
  },
  {
    id: "contact",
    text: "Contact",
  },
];


const Navigation = () => {
  const [showProject, setShowProject] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowProject(window.innerWidth >= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <motion.ul variants={variants} className="listMenu">
      {navLinks.map((nav) => (
        <MenuItem
          id={nav.id}
          key={nav.id}
          text={nav.text}
          className={nav.id === "project" && !showProject ? "hidden sm:block" : ""}
        />
      ))}
    </motion.ul>
  );
};

export default Navigation;
