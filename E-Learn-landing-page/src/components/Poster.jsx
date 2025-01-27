import PosterImg from "./../assets/poster.png";
import Banner from "./Banner";

const Poster = () => {
  return (
    <>
      <Banner
        heading={"Each Student can share their discount code for free"}
        img={PosterImg}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam incidunt laboriosam beatae itaque a sequi at facilis officiis distinctio."
        }
        button1={"Get Started"}
        button2={"Discount"}
      />
    </>
  );
};
export default Poster;
