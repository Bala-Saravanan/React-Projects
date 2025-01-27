const FooterSection = ({ heading, nav_items }) => {
  return (
    <div>
      <h1 className="font-bold text-white my-4 text-xl">{heading}</h1>
      <ul className="text-white">
        {nav_items.map((el, idx) => (
          <li key={idx} className="my-2 cursor-pointer">
            <a>{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterSection;
