import { FaStar } from "react-icons/fa";
const Cards = ({ result }) => {
  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {result.map((product, idx) => (
        <section
          key={idx}
          className="border-none p-4 rounded-lg ring ring-gray-300 shadow-xl w-60"
        >
          <img src={product.img} alt={product.title} className="mb-5" />
          <h1 className="font-bold text-lg my-2 mx-1">{product.title}</h1>
          <h4 className="font-italics my-2 mx-1">
            <span className="flex">
              {[...Array(4)].map((_, index) => (
                <FaStar className="text-yellow-500" key={index} />
              ))}
            </span>
            {product.reviews}
          </h4>
          <p className="text-green-500 my-2 mx-1">
            <span>
              <del className="text-red-400">{product.prevPrice} </del>
            </span>
            ${product.newPrice}
          </p>
        </section>
      ))}
    </div>
  );
};
export default Cards;
