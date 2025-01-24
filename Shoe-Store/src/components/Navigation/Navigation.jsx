import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

const Navigation = ({ handleChange }) => {
  return (
    <>
      <nav className="border-b border-gray-300 mx-5">
        <ul className="flex justify-center m-10">
          <li className="mr-28 ml-5">
            <h1 className="font-bold text-2xl">
              Shoe <span className="text-blue-500">Store</span>
            </h1>
          </li>
          <li>
            <input
              type="text"
              className="p-2 w-100 border-none rounded-full bg-gray-300"
              placeholder="Enter Product Name"
              onChange={handleChange}
            />
          </li>
          <ul className="flex justify-center gap-7 ml-auto">
            <li>
              <CiHeart className="text-2xl" />
            </li>
            <li>
              <FaCartShopping className="text-2xl" />
            </li>
            <li>
              <FaUserPlus className="text-2xl" />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
