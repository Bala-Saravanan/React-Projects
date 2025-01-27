import BannerImg from "./../assets/bannerImg.png";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div id="home" className="mt-24">
      <Banner
        heading={"Develop Your Skill without deligence"}
        img={BannerImg}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam incidunt laboriosam beatae itaque a sequi at facilis officiis distinctio."
        }
        button1={"Get Started"}
        button2={"Discount"}
      />
    </div>
  );
};
export default Hero;
