import GreenCheck from "./GreenCheck";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const PriceCards = ({ title, price }) => {
  const price_desc = [
    "Videos of Lessons",
    "Homework check",
    "Additional Practical Task",
    "Monthly Conferences",
    "Personal Advice from Teachers",
  ];
  return (
    <div className="m-5">
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="p-10 border-none rounded-xl shadow-xl ring ring-gray-400"
      >
        <h1 className="text-[#010851] text-3xl font-bold text-center my-5">
          {title}
        </h1>
        <p className="text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit numquam
          magni error necessitatibus iusto nobis!
        </p>
        <h2 className="text-[#9a7af1] font-bold text-3xl text-center my-5">
          {price}
          <span className="text-xl text-gray-400">/month</span>
        </h2>
        <ul className="text-gray-500">
          {price_desc.map((option, idx) => (
            <li key={idx} className="my-2 mx-3 flex">
              <GreenCheck /> {option}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="border text-[#9a7af1] font-semibold px-10 py-3 rounded-md my-10 hover:bg-[#9a7af1] hover:text-white transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export default PriceCards;
