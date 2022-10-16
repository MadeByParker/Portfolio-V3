import desktopVideo from "../assets/files/writing_1080.mp4";
import tabletVideo from "../assets/files/tabletwriting.mp4";
import mobileVideo from "../assets//files/mobilewriting.mp4";
import bigVideo from "../assets/files/4kwriting.mp4";
import MobileLoading from "./MobileLoading";
import '../index.css';
import { motion } from "framer-motion";


const Loader = props => {
    const getVideoSrc = width => {
        if (width >= 2400) return bigVideo;
        if (width >= 1920) return desktopVideo;
        if (width >= 650) return desktopVideo;
        return tabletVideo;
      };
    const src = getVideoSrc(window.innerWidth);


  return (
      <motion.div 
        initial={{ x: 0, opacity: 1, scale: 1}}
        animate={{ x: window.innerWidth , scale: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
        className="loaderContainer bg-[#121212]">
        <video
          autoPlay
          playsInline
          muted
          src={src}
        />
      </motion.div>
    );
  };

export default Loader