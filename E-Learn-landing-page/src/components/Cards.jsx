const Cards = ({ image, title }) => {
  return (
    <div className="m-10 border-none rounded-2xl shadow-2xl ring ring-gray-200">
      <div className="p-10">
        <img src={image} alt={title} />
      </div>
      <div className="md:mt-14 mb-20">
        <h2 className="text-[#010851] text-2xl lg:text-2xl text-center font-semibold pb-20 md:pb-0">
          {title}
        </h2>
      </div>
    </div>
  );
};
export default Cards;
