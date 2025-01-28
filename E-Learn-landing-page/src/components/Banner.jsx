import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({ heading, img, content, button1, button2 }) => {
  return (
    <div>
      <div>
        <div className="md:min-h-[500px] md:flex md:flex-row-reverse md:items-center md:justify-around m-5 bg-gradient-to-br from-[#5839AD] to-[#59A3F9] rounded-3xl rounded-br-[150px]">
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img className="p-10 w-full h-auto" src={img} alt="Banner Image" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="p-10 md:w-[50%]"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold sm:leading-16 md:leading-[4.5rem]">
              {heading}
            </h1>
            <p className="text-white my-8">{content}</p>
            <div className="flex space-x-5">
              <button className="px-4 sm:px-8 py-2 text-white md:text-xl rounded-lg bg-[#9A7AF1] hover:bg-[#8c59f9] transition-all duration-500 cursor-pointer">
                {button1}
              </button>
              <button className="px-4 sm:px-8 py-2 text-white md:text-xl rounded-lg bg-[#9A7AF1] hover:bg-[#8c59f9] transition-all duration-500 cursor-pointer">
                {button2}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
