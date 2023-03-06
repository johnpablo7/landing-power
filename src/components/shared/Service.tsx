import { charge } from "../../data/charge";
import EmailIcon from "../../Svg/EmailIcon";

export const Service = () => {
  return (
    <div className="px-4 py-16 md:px-8 md:py-14 lg:py-18 lg:p-20 2xl:px-28 gap-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-0">
        <div className="flex flex-col gap-6 md:pb-12">
          <h1 className="text-4xl md:text-[40px] text-[#1E1F4B] font-bold md:tracking-[1px]">
            How We Can Help You
          </h1>
          <p className="text-xl text-[#2E3E5C] lg:mb-10 md:tracking-[1px]">
            Follow our newsletter. We will regulary update <br /> our latest
            project and availability.
          </p>
          <form className="w-full">
            <div className="relative">
              <EmailIcon className="absolute top-1/2 -translate-y-1/2 left-4 md:left-4 lg:left-7 2xl:left-6" />
              <input
                type="text"
                className="w-full md:w-[550px] text-[#2E3E5C] bg-[#f1f1fc] py-6 pl-12 md:pl-14 lg:pl-16 pr-48 md:pr-52 lg:pr-56 2xl:pr-52 rounded-xl outline-none"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="absolute text-base md:text-lg text-white px-10 py-2 bg-primary hover:bg-[#5453ac] rounded-xl top-1/2 -translate-y-1/2 right-4 md:right-56
                 lg:right-20 2xl:right-80"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-y-16">
          {charge.map((list) => (
            <div
              key={list.id}
              className="flex flex-col items-center justify-center md:items-start gap-3"
            >
              <div className="w-20 h-20 p-4 bg-[#f1f1fc] rounded-xl fill-current">
                {list.icon}
              </div>
              <h3 className="text-xl text-[#1E1F4B] font-semibold">
                {list.title}
              </h3>
              <p className="text-lg text-[#2E3E5C] w-64">{list.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
