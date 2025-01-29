import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Cards = ({ image, title }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="m-10 border-none rounded-2xl shadow-2xl ring ring-gray-200"
    >
      <div className="p-10">
        <img src={image} alt={title} />
      </div>
      <div className="md:mt-14 mb-20">
        <h2 className="text-primary text-2xl lg:text-2xl text-center font-semibold pb-20 md:pb-0">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};
export default Cards;
