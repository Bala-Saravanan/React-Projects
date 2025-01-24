const Category = ({ handleSelect }) => {
  const category_arr = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
  return (
    <>
      <div className="w-[20rem]">
        <h2 className="text-center font-bold text-xl m-5">Categories</h2>
        <div className="ml-24">
          {category_arr.map((el, idx) => (
            <label key={idx} className="block m-2">
              <input
                type="radio"
                name="category"
                id="radio-btn"
                value={el.toLowerCase()}
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
export default Category;
