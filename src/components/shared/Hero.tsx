import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { employees } from "../../data/employees";
import ButtomIcon from "../../Svg/ButtomIcon";
import EllipseIcon from "../../Svg/EllipseIcon";
import StartIcon from "../../Svg/StartIcon";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] w-full grid grid-cols-1 lg:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-4 2xl:pl-28">
        <div className="flex flex-col gap-4 2xl:gap-4">
          <h1 className="text-[#1E1F4B] text-5xl leading-[3rem] 2xl:text-8xl 2xl:leading-[10rem] font-bold mb-5">
            Web Design Impactful Digital
            <span className="text-primary text-4xl 2xl:text-8xl font-bold px-8 2xl:mx-8 border-8 mt-2 md:mt-5 border-primary relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-lg 2xl:text-2xl text-[#2E3E5C] 2xl:leading-[3rem] 2xl:w-[640px] mb-5">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col 2xl:flex-row items-center gap-8">
            <button className="bg-primary hover:bg-[#5453ac] text-white text-lg py-4 w-full 2xl:w-[200px] 2xl:text-2xl 2xl:py-3 2xl:px-8 rounded-xl transition-colors">
              Contact Us
            </button>
            <button className="text-[#2E3E5C] hover:text-primary text-lg 2xl:text-2xl rounded-xl flex items-center text-left gap-4">
              <ButtomIcon className="w-14 h-14" /> Watch our <br /> introduction
              video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative p-4 2xl:p-0">
        {/* Content image */}
        <div>
          <img
            src="/images/hero.png"
            alt="hero"
            className="w-[331px] h-[331px] md:w-[431px] md:h-[431px] 2xl:w-[590px] 2xl:h-[631px] object-cover object-center 2xl:-mt-40"
          />
          <div className="relative bg-white shadow-xl rounded-lg px-8 py-4 flex flex-col justify-center gap-2 max-w-[300px] mx-auto -mt-24">
            <div className="flex items-center pl-4">
              {employees.map((employee) => (
                <img
                  key={employee.id}
                  src={employee.img}
                  alt="img"
                  className="w-10 h-10 object-cover -ml-4"
                />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-[#1E1F4B] tracking-[2px]">
              120+ Employees
            </h2>
            <div className="flex items-center gap-4 text-xl text-[#2E3E5C] font-medium tracking-[1px]">
              <StartIcon /> 5.0 (3.1K Reviews)
            </div>
            <EllipseIcon className="absolute -right-12 -bottom-14 -z-10" />
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[255px] h-[230px] 2xl:w-[505px] 2xl:h-[480px] border-[8px] 2xl:border-[14px] bg-primary bg-opacity-10 border-primary rounded-full -z-10"></div>
        {/* Logos */}
        <div className="bg-[#2B2C34] rounded-full w-14 h-14 flex items-center justify-center 2xl:w-24 2xl:h-24 border-l-8 border-[#6b6b71] absolute top-[10%] right-[15%] md:top-[18%] md:right-[24%] 2xl:top-[16%] 2xl:right-[15%]">
          <img src="/images/figma.png" alt="figma" />
        </div>
        <div className="bg-[#470137] rounded-full w-12 h-12 flex items-center justify-center 2xl:w-20 2xl:h-20 border-l-8 border-[#7e4d73] absolute top-[10%] left-[20%] md:top-[10%] md:left-[30%] 2xl:top-[12%] 2xl:left-[15%]">
          <img src="/images/adobe.png" alt="adobe" />
        </div>
        <div className="bg-[#2B2C34] rounded-full w-10 h-10 flex items-center justify-center 2xl:w-16 2xl:h-16 border-l-8 border-gray-600 absolute top-[20%] left-[8%] md:top-[25%] md:left-[18%] 2xl:top-[5%] 2xl:left-[0%]">
          <img src="/images/sketch.png" alt="sketch" />
        </div>
      </div>
    </section>
  );
};
