import { useState } from "react";
import PriceCards from "./PriceCards";

const Price = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="my-20">
      <div className="text-center mx-80">
        <h1 className="text-[#010851] text-6xl font-bold mb-5">
          Here are all our Plans
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          itaque facere inventore ullam esse voluptate exercitationem voluptatem
          quod consequuntur.
        </p>
        <div className="flex space-x-5 font-bold text-4xl justify-center items-center my-10">
          <h2>Monthly</h2>
          <div
            onClick={() => setIsMonthly(!isMonthly)}
            className="h-8 w-20 bg-gray-300 rounded-full relative"
          >
            <div
              className={`absolute h-8 w-8 bg-[#9a7af1] rounded-full cursor-pointer ${
                isMonthly ? "" : "right-0"
              }`}
            ></div>
          </div>
          <h2>Yearly</h2>
        </div>
      </div>
      <PriceCards title={"Start"} price={isMonthly ? "$19" : "$199"} />
      <PriceCards title={"Advanced"} price={isMonthly ? "$39" : "$399"} />
      <PriceCards title={"Premium"} price={isMonthly ? "$59" : "$599"} />
    </div>
  );
};
export default Price;
