import BannerImg from "./../assets/bannerImg.png";

const Hero = () => {
  return (
    <>
      <div>
        <div className="md:min-h-[500px] md:flex md:flex-row-reverse md:items-center md:justify-around m-5 bg-gradient-to-br from-[#5839AD] to-[#59A3F9] rounded-3xl rounded-br-[150px]">
          <div>
            <img
              className="p-10 w-full h-auto"
              src={BannerImg}
              alt="Banner Image"
            />
          </div>
          <div className="p-10 md:w-[50%]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold sm:leading-16 md:leading-[4.5rem]">
              Develop Your Skill Without Diligence
            </h1>
            <p className="text-white my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quam incidunt laboriosam beatae itaque a sequi at facilis officiis
              distinctio.
            </p>
            <div className="flex space-x-5">
              <button className="px-4 sm:px-8 py-2 text-white md:text-xl rounded-lg bg-[#9A7AF1] hover:bg-[#8c59f9]">
                Get Started
              </button>
              <button className="px-4 sm:px-8 py-2 text-white md:text-xl rounded-lg bg-[#9A7AF1] hover:bg-[#8c59f9]">
                Discout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
