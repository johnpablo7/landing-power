import { NavLink } from "react-router-dom";

export const Clients = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col items-center justify-center gap-14 md:gap-14 px-4 py-16 2xl:p-20">
      <h1 className="text-2xl text-[#03014C] font-black leading-6 text-center">
        Trusted By Greatest Companies
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-12 2xl:gap-44">
        <NavLink to="/">
          <img src="/images/google.png" alt="google" />
        </NavLink>
        <NavLink to="/">
          <img src="/images/airbnb.png" alt="airbnb" />
        </NavLink>
        <NavLink to="/">
          <img src="/images/creative.png" alt="creative" />
        </NavLink>
        <NavLink to="/">
          <img src="/images/shopify.png" alt="shopify" />
        </NavLink>
        <NavLink to="/">
          <img src="/images/amazon.png" alt="amazon" />
        </NavLink>
      </div>
    </div>
  );
};
