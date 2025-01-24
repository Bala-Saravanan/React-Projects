import Category from "./Categories/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const SideBar = ({ handleSelect }) => {
  return (
    <div className="block border-r border-gray-200">
      <Category handleSelect={handleSelect} />
      <Price handleSelect={handleSelect} />
      <Colors handleSelect={handleSelect} />
    </div>
  );
};
export default SideBar;
