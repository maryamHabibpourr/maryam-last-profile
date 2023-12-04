//@ts-nocheck
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";



const Chess = () => {
  return (
    <div className="grid grid-cols-8 gap-2  bg-black dark:bg-gray-800 shadow-lg" >
    <motion.div className="flex items-center justify-center bg-[#dcff50] text-white" variants={textVariant()}>♜</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black"  variants={textVariant()}>♞</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♝</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♛</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♚</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♝</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♞</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♜</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-white text-black" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-[#dcff50] text-black" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-black text-white" variants={textVariant()}>♟</motion.div>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-white" variants={textVariant()}/>
    <motion.div className="flex items-center justify-center bg-black" variants={textVariant()}/>
    <div className="flex items-center justify-center bg-black text-white">♙</div>
    <div className="flex items-center justify-center bg-white text-black">♙</div>
    <div className="flex items-center justify-center bg-black text-white">♙</div>
    <div className="flex items-center justify-center bg-white text-black">♙</div>
    <div className="flex items-center justify-center bg-black text-white">♙</div>
    <div className="flex items-center justify-center bg-white text-black">♙</div>
    <div className="flex items-center justify-center bg-black text-white">♙</div>
    <div className="flex items-center justify-center bg-white text-black">♙</div>
    <div className="flex items-center justify-center bg-white text-black">♖</div>
    <div className="flex items-center justify-center bg-black text-white">♘</div>
    <div className="flex items-center justify-center bg-white text-black">♗</div>
    <div className="flex items-center justify-center bg-black text-white">♕</div>
    <div className="flex items-center justify-center bg-white text-black">♔</div>
    <div className="flex items-center justify-center bg-black text-white">♗</div>
    <div className="flex items-center justify-center bg-white text-black">♘</div>
    <div className="flex items-center justify-center bg-black text-white">♖</div>
  </div>
  )
}
export default SectionWrapper(Chess, "");
