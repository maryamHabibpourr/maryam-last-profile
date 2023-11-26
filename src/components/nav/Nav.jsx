import * as React from "react";
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
    id: "contact",
    text: "Contact",
  },
];



export const Navigation = () => (
  <motion.ul variants={variants} className="listMenu">
    {navLinks.map((nav) => (
      <MenuItem
        id={nav.id}
        key={nav.id}
        text={nav.text}
      />
    ))}
  </motion.ul>
);
