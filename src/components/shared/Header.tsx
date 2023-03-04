import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { NavLink } from "react-router-dom";
import { navbuttons } from "../../data/navbuttons";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import LogoIcon from "../../Svg/LogoIcon";
import clsx from "clsx";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="flex items-center justify-between md:justify-start w-full p-4 2xl:py-4 2xl:px-2 h-[10vh] z-50">
      <div className="md:w-1/6 flex items-center justify-center">
        <NavLink to="/" className="cursor-pointer">
          <LogoIcon />
        </NavLink>
      </div>

      <nav
        className={clsx(
          `fixed flex-1 flex flex-col items-center justify-center bg-white w-[80%] h-full top-0 gap-14 2xl:gap-16 transition-all duration-500 z-50`,
          showMobileMenu ? "left-0" : "-left-full",
          // Destok
          `md:left-0 md:static md:flex-row md:w-full`
        )}
      >
        {navbuttons.map((list) => (
          <div key={list.id}>
            <NavLink
              to={list.path}
              className="text-xl text-[#1E1F4B] hover:text-primary"
            >
              {list.name}
            </NavLink>
          </div>
        ))}
      </nav>
      <button onClick={toggleMenu} className="md:hidden text-2xl p-2">
        {showMobileMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};
