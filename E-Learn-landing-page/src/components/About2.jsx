import abtImg2 from "./../assets/about2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About2 = () => {
  return (
    <div className="m-20 lg:flex flex-row-reverse items-center">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:min-w-[50%]"
      >
        <img src={abtImg2} alt="" />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-primary font-bold text-4xl lg:text-6xl my-5">
          You can practice at any time{" "}
          <span className="text-secondary">convenient to you</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fuga
          veritatis magnam nostrum optio recusandae harum itaque animi, commodi
          saepe sequi doloremque! Quibusdam reprehenderit sapiente quis unde
          aliquam accusantium nulla sunt distinctio, provident minus qui animi
          maxime aperiam consectetur eos?
        </p>
        <button className=" bg-secondary hover:bg-hover transition-all duration-500 cursor-pointer text-white md:text-2xl px-5 py-2 rounded-lg my-5">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};
export default About2;
