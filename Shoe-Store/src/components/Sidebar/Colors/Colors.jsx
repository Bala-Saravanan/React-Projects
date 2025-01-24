const Colors = ({ handleSelect }) => {
  const colors = ["All", "Red", "Green", "Blue", "Black"];
  return (
    <>
      <div className="w-[20rem]">
        <h2 className="text-center font-bold text-xl m-5">Colors</h2>
        <div className="ml-24">
          {colors.map((el, idx) => (
            <label key={idx} className="block m-2">
              <input
                type="radio"
                name="color"
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
export default Colors;
