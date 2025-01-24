const Price = ({ handleSelect }) => {
  const price_range = ["$0 - $50", "$50 - %100", "$100 - $150", "Over $150"];
  return (
    <>
      <div className="w-[20rem]">
        <h2 className="text-center font-bold text-xl m-5">Price</h2>
        <div className="ml-24">
          {price_range.map((el, idx) => (
            <label key={idx} className="block m-2">
              <input
                type="radio"
                name="price"
                value={50}
                onChange={handleSelect}
              />
              <span className="mx-3"></span>
              {el}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
export default Price;
