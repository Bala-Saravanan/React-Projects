import FooterSection from "./FooterSection";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
  const nav_items = ["Overview", "Features", "About", "Pricing"];
  const help_items = [
    "How does it work?",
    "Where to ask questions?",
    "How to pay?",
    "What is needed for this?",
  ];
  const contact_items = [
    "123-456-789",
    "123 Anywhere street",
    "Everywhere State",
    "Great Country",
    "4321-009",
  ];
  return (
    <div className="bg-[#010851] p-20 pb-0 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center space-x-5">
        <FooterSection heading={"Platform"} nav_items={nav_items} />
        <FooterSection heading={"Help"} nav_items={help_items} />
        <FooterSection heading={"Platform"} nav_items={contact_items} />

        <div className="my-8">
          <div>
            <h1 className="text-white font-bold text-2xl my-4">
              Subscribe to our Newsletter
            </h1>
            <p className="text-white my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit
              unde iure et delectus voluptates aperiam deserunt, possimus ea
              hic?
            </p>
          </div>
          <div className="flex flex-col justify-center sm:flex-row my-5">
            <input
              type="text"
              placeholder="your email"
              className="bg-blue-100 rounded-xl sm:rounded-r-none p-3"
            />
            <button className="bg-[#9a7af1] text-white py-2 my-4 sm:my-0 sm:py-0 px-5 rounded-xl sm:rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-blue-300 mt-5">
        <div>
          <p className="text-blue-300 m-5">
            &copy; XYZ 2025, All rights are reserved.
          </p>
        </div>
        <div className="m-5">
          <ul className="text-blue-300 flex flex-wrap text-2xl md:text-4xl space-x-5 space-y-5">
            <li>
              <CiFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <PiYoutubeLogo />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
