import abtImg2 from "./../assets/about2.png";

const About2 = () => {
  return (
    <div className="m-20 lg:flex flex-row-reverse items-center">
      <div className="md:min-w-[50%]">
        <img src={abtImg2} alt="" />
      </div>
      <div className="">
        <h1 className="text-[#010851] font-bold text-4xl lg:text-6xl my-5">
          You can practice at any time{" "}
          <span className="text-[#9a7af1]">convenient to you</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fuga
          veritatis magnam nostrum optio recusandae harum itaque animi, commodi
          saepe sequi doloremque! Quibusdam reprehenderit sapiente quis unde
          aliquam accusantium nulla sunt distinctio, provident minus qui animi
          maxime aperiam consectetur eos?
        </p>
        <button className="bg-gradient-to-r from-[#5630c0] to-[#9a7af1] hover:bg-gradient-to-r hover:from-[#9a7af1] hover:to-[#5630c0] text-white md:text-2xl px-5 py-2 rounded-lg my-5">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default About2;
