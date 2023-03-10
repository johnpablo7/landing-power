import { NavLink } from "react-router-dom";
import { worklist } from "../../data/workslist";

export const Works = () => {
  return (
    <div className="min-h-screen px-4 py-16 md:px-8 md:py-16 lg:p-20 2xl:py-32 2xl:px-28 gap-7">
      <div className="mb-8">
        <h1 className="text-[#1E1F4B] text-4xl leading-10 font-bold mb-7 tracking-[1px]">
          We Create World-Class Digital Products
        </h1>
        <p className="text-[#2E3E5C] text-xl">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-7">
        <NavLink to="/" className="flex flex-col gap-2">
          <img
            src="/images/img-col1.png"
            alt="img"
            className="w-full h-56 md:h-[600px] object-cover rounded-xl"
          />
          <p className="text-[#2E3E5C]">App Design - June 20, 2022</p>
          <h3 className="text-[#1E1F4B] text-2xl font-bold">App Redesign</h3>
          <p className="text-[#2E3E5C] text-xl md:tracking-[1px]">
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </NavLink>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-7">
          {worklist.map((work) => (
            <div key={work.id} className="flex flex-col gap-2">
              <NavLink to="/">
                <img
                  src={work.img}
                  alt="img"
                  className="w-full h-56 object-cover rounded-xl"
                />
              </NavLink>
              <p className="text-[#2E3E5C]">{work.date}</p>
              <h3 className="text-[#1E1F4B] text-2xl font-bold">{work.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
