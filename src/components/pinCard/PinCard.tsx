import {
  Availability,
  Colors,
  Music,
} from "./features/card";
import { MusicVisual, OtherVisual } from "./features/visual";
import { stagger, useAnimate, motion } from "framer-motion";
import { FeatureTitle } from "./features/title";
import { useFeatureStore } from "./features/store";
import { useEffect } from "react";
import { useHidePageOverflow } from "../../utils/toggle-page-overflow";
import { useEscapePress } from "../../utils/use-escape-press";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";




const features = [
  {
    id: "music",
    title: "Amlak Eeno",
    card: Music,
    visual: MusicVisual,
    description:
      "Web-based platform designed for users to effortlessly search home rentals and purchases in Tehran, offering a convenient and efficient solution for housing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
      {
        name: "postGIS",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link:
      "https://github.com/maryamHabibpourr/AmlakEenoClient-React-LeafLet/tree/main/src",
  },
  {
    id: "colors",
    title: "Tee Trends",
    card: Colors,
    visual: OtherVisual,
    description:
      "Web application exclusively for buying T-shirts for both women and men – explore, choose, and purchase your favorite styles easily!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "orange-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link:
      "https://github.com/maryamHabibpourr/TeetrendsClient-React-Redux/tree/main/src",
  },
  {
    id: "availability",
    title: "Eshop",
    card: Availability,
    visual: OtherVisual,
    description:
      "An all-in-one online shopping platform catering to your every need in life, from TVs and clothes to phones and more. Discover, shop, and order everything effortlessly!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link:
      "https://github.com/maryamHabibpourr/Eshop-Firebase-React-Redux/tree/main/src",
  },
];








const PinCard = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <>
        <motion.div variants={textVariant(0.5)} className="pt-5">
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories. It reflects my ability to solve
            complex problems, work with different technologies, and manage
            projects effectively.
          </motion.p>
        </div>
      </>
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex w-full items-start gap-20">
          <div className="w-full py-[10vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle
                    id={feature.id}
                    title={feature.title}
                    description={feature.description}
                    source_code_link={feature.source_code_link}
                    tags={feature.tags}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default SectionWrapper(PinCard, "project");

