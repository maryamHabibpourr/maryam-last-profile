import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


import {w1,w2,w3,w4} from "../assets"





const HorizontallScroll = () => {
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};



const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-53%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-indigo-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontallScroll;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url:w1,
    title: "Card Design",
    id: 1,
  },
  {
    url: w2,
    title: "Banner Design",
    id: 2,
  },
  {
    url: w3,
    title: "Forms",
    id: 3,
  },
  {
    url: w4,
    title: "State Management",
    id: 4,
  },

];

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[700px] rounded-sm overflow-hidden"
      style={{ borderRadius: '10px' }}
    >
      <img
        src={card.url}
        alt={card.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/60 to-white/5 p-8 text-6xl font-medium uppercase text-[#dcff50]">
          {card.title}
        </p>
      </div>
    </div>
  );
};
