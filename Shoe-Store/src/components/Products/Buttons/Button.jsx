const Button = ({ btn_arr, handleClick }) => {
  return (
    <>
      {btn_arr.map((el) => (
        <button
          key={Math.random()}
          value={el.toLowerCase()}
          onClick={handleClick}
          className="py-2 px-6 mx-4 border-none bg-gray-200 font-thin shadow-lg ring ring-gray-200 hover:bg-gray-300"
        >
          {el}
        </button>
      ))}
    </>
  );
};
export default Button;
