import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const NavBar = () => {
  const nav_items = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 top-0 min-w-full container flex items-center justify-between border-b border-gray-400 bg-white">
        <div className="m-5 flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#5839AD] to-[#59A3F9]"></div>
          <span className="font-bold text-2xl">XYZ</span>
        </div>
        <div>
          <ul className="hidden text-[#010851] font-semibold sm:flex justify-center space-x-5 md:text-xl cursor-pointer">
            {nav_items.map(({ link, path }, idx) => (
              <li key={idx}>
                <Link spy={true} smooth={true} offset={-100} to={path}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="hidden sm:block text-white px-4 py-2 rounded-lg mx-10 bg-[#9A7AF1] hover:bg-[#8c59f9] transition-all duration-500 cursor-pointer">
            Sign Up
          </button>
        </div>
        <div
          className=" sm:hidden text-2xl cursor-pointer mx-10"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          {isToggleOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </div>
      <div>
        {isToggleOpen ? (
          <div className="fixed top-20 z-50 min-w-full sm:hidden list-none bg-[#5839AD]  text-white">
            {nav_items.map(({ link, path }, idx) => (
              <li key={idx} className="py-2 hover:bg-[#8c59f9]">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="ms-5"
                  to={path}
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  {link}
                </Link>
              </li>
            ))}
            <div className="flex justify-center pb-2">
              <button className=" px-4 py-2 rounded-lg bg-[#9A7AF1] hover:bg-[#8c59f9]">
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default NavBar;
