import Button from "./Buttons/Button";
import Cards from "./Cards/Cards";

const Product = ({ result, handleClick }) => {
  const btn_arr = ["All", "Nike", "Puma", "Adidas", "Vans"];
  return (
    <div>
      <div className=" my-4">
        <Button btn_arr={btn_arr} handleClick={handleClick} />
      </div>
      <Cards result={result} />
    </div>
  );
};
export default Product;
