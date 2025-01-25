const PriceCards = ({ title, price }) => {
  const price_desc = [
    "Videos of Lessons",
    "Homework check",
    "Additional Practical Task",
    "Monthly Conferences",
    "Personal Advice from Teachers",
  ];
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit numquam
        magni error necessitatibus iusto nobis!
      </p>
      <h2>{price}</h2>
      <ul>
        {price_desc.map((option, idx) => (
          <li key={idx}>{option}</li>
        ))}
      </ul>
    </div>
  );
};
export default PriceCards;
