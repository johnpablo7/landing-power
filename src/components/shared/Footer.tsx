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
    <footer className="bg-secondary p-4 md:p-8 lg:px-28 lg:py-16">
      <div className="flex items-center justify-between border-b border-gray-500  pb-14">
        <div>
          <LogoIcon className="text-white w-32 h-11 fill-current" />
        </div>
        <nav className="text-2xl flex items-center gap-4 text-white">
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
      <div className="mt-12">
        <h1 className="text-white text-lg font-bold mb-5">Company</h1>
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center justify-center gap-44 text-white">
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
          </div>
          <button
            type="submit"
            className="text-base md:text-lg text-white px-10 py-2 bg-primary hover:bg-[#5453ac] rounded-xl"
          >
            Contact Us
          </button>
        </div>
        <p className="text-center text-white">
          © Landing Power 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
