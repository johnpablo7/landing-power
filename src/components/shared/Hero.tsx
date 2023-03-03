import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-16">
        <h1 className="text-[#1E1F4B] text-7xl leading-[8rem] font-bold">
          We Design Impactful Digital
          <span className="text-primary font-bold py-2 px-6 border-8 border-primary relative">
            Products
            <RiCheckboxBlankCircleFill className="text-base absolute -left-4 -top-4 text-white ring-8 ring-primary rounded-full" />
          </span>
        </h1>
        <p></p>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="bg-green-300 md:col-span-3">imagen</div>
    </section>
  );
};
