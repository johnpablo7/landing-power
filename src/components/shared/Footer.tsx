import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../Svg/LogoIcon";

export const Footer = () => {
  return (
    <footer className="bg-secondary px-4 py-16 pb-8 md:p-8 lg:p-20 2xl:px-28 2xl:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-500 pb-14">
        <div className="mb-8 md:mb-0">
          <LogoIcon className="text-white w-32 h-11 fill-current" />
        </div>
        <nav className="text-xl md:text-2xl flex items-center gap-8 md:gap-4 text-white">
          <NavLink
            to="/"
            className="rounded-full p-4 bg-primary hover:bg-[#5453ac]"
          >
            <RiInstagramLine />
          </NavLink>
          <NavLink
            to="/"
            className="rounded-full p-4 bg-primary hover:bg-[#5453ac]"
          >
            <RiFacebookCircleFill />
          </NavLink>
          <NavLink
            to="/"
            className="rounded-full p-4 bg-primary hover:bg-[#5453ac]"
          >
            <RiTwitterFill />
          </NavLink>
          <NavLink
            to="/"
            className="rounded-full p-4 bg-primary hover:bg-[#5453ac]"
          >
            <RiGithubFill />
          </NavLink>
        </nav>
      </div>
      <div>
        <h3 className="text-white text-center md:text-left text-lg font-bold my-8 md:mb-5 lg:mt-14 lg:mb-6">
          Company
        </h3>
        <nav className="flex flex-col md:flex-row items-center justify-between mb-12 lg:mb-16 text-white gap-6">
          <div>
            <NavLink to="/">About Us</NavLink>
          </div>
          <div>
            <NavLink to="/">Press</NavLink>
          </div>
          <div>
            <NavLink to="/">Investors</NavLink>
          </div>
          <div>
            <NavLink to="/">Events</NavLink>
          </div>
          <div>
            <NavLink to="/">Terms of use</NavLink>
          </div>
          <div>
            <NavLink to="/">Privacy policy</NavLink>
          </div>
          <button
            type="submit"
            className="text-base md:text-sm text-white px-10 py-2 md:py-3 bg-primary hover:bg-[#5453ac] rounded-xl"
          >
            Contact Us
          </button>
        </nav>

        <p className="text-center text-white opacity-70">
          © Landing Power 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
