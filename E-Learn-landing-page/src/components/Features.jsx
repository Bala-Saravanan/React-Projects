import Knowledge from "./../assets/Knowledge.png";
import Price from "./../assets/pricing.png";
import Learn from "./../assets/learning.avif";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <>
      <div
        className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 items-center"
        id="feature"
      >
        <motion.div
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-10"
        >
          <h1 className="text-[#010851] font-semibold leading-12 text-3xl">
            Why We Are Better Than Others
          </h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            soluta vitae error, cumque facilis vero exercitationem dignissimos
            earum maiores eveniet, temporibus obcaecati in natus laboriosam,
            inventore ab fugit consequuntur illo!
          </p>
        </motion.div>

        <Cards image={Knowledge} title="Convenient Schedule" />
        <Cards image={Learn} title="Personalized Learning" />
        <Cards image={Price} title="Affordable Pricing" />
      </div>
    </>
  );
};

export default Features;
