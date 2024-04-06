import { motion } from "framer-motion";
import { Bio } from "../data/constants.js";
import Typewriter from "typewriter-effect";
import { FileDownload } from "@mui/icons-material";
import HeroImg from "../assets/images/HeroImage.jpg";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../data/motion";
const Hero = () => {
  return (
    <div id="About">
      <div className="flex justify-center relative px-8 py-12 z-10 max-md:py-18 max-sm:py-8 ">
        {/* HERO CONTAINER */}
        <motion.div {...headContainerAnimation}>
          <div className="relative flex items-center justify-between w-full max-w-6xl max-lg:flex-col">
            {/* HERO INNER */}
            <div className="w-full order-1 max-lg:order-2 max-lg:gap-2 max-lg:flex-col max-lg:items-center max-lg:mb-8">
              {/* LEFT CONMTAINER */}
              <motion.div {...headTextAnimation}>
                <div className="font-bold text-black dark:text-white text-6xl max-lg:text-center max-md:text-5x leading-snug">
                  Hola, yo soy <br /> {Bio.name}
                </div>
                <div className="flex gap-2 text-4xl my-7 max-lg:justify-center text-purple-600 leading-10 font-bold">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  ></Typewriter>
                </div>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <div className="text-2xl text-gray-500 max-lg:text-center mb-10 font-semibold">
                  {Bio.description}
                </div>
                <div className=" max-lg:flex max-lg:justify-center max-lg:items-center  ">
                  <a
                    className="bg-gradient-to-r from-pink-800 to-indigo-800 text-white py-4 px-24 text-2xl rounded-full font-semibold max-w-80 flex items-center gap-1 shadow-md shadow-indigo-600"
                    href={Bio.resume}
                  >
                    <FileDownload />
                    Curriculum
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-end w-full order-2 max-lg:order-1 max-lg:flex-col max-lg:items-center max-lg:justify-center mb-20 max-sm:mb-7 ">
              {/* RIGHT CONTAINER */}
              <motion.div {...headContentAnimation}>
                <img
                  className="rounded-full w-full h-full max-w-md border-purple-600 border-2 max-md:max-w-96 max-sm:max-w-72 shadow-lg shadow-indigo-600"
                  src={HeroImg}
                  alt="Mauro Pizarro"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
