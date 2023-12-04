//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import man from "../assets/man.mp4";

const VideoBackground = () => {

  const vidRef = useRef();

  useEffect(()=>{
      vidRef.current.play();
  },[])



  return (
    <div className="bg-gradient-to-b from-black to-[rgba(0,0,0,0.30)]">
      <video
       className="w-full h-full object-cover absolute inset-0 z-[-1] "
        ref={vidRef}
        src={man}
        loop
        controls={false}
        muted
      />
    </div>
  );
};

export default VideoBackground;
