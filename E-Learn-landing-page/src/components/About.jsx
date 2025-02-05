import AbtImg from "./../assets/about.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <>
      <div className="lg:flex items-center" id="about">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="min-w-[50%]"
        >
          <img src={AbtImg} alt="about" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-20"
        >
          <h1 className="text-primary font-bold text-4xl lg:text-6xl my-5">
            We have been improving our products{" "}
            <span className="text-secondary">for many years</span>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            exercitationem labore optio voluptatem quam ut vitae ex nam mollitia
            aperiam. At dignissimos commodi reiciendis nemo beatae sint repellat
            aspernatur quas labore. Exercitationem neque iste quis hic
            reprehenderit consectetur in quos?
          </p>
          <button className="text-white md:text-2xl px-5 py-2 rounded-lg my-5 bg-secondary hover:bg-hover transition-all duration-500 cursor-pointer">
            Get Started
          </button>
        </motion.div>
      </div>
    </>
  );
};
export default About;
