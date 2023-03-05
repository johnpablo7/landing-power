import EmailIcon from "../../Svg/EmailIcon";

export const Service = () => {
  return (
    <div className="min-h-screen px-4 py-16 md:px-8 md:py-16 lg:px-28 gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] text-[#1E1F4B] font-bold">
            How We Can Help You
          </h1>
          <p className="text-xl text-[#1E1F4B] md:mb-10">
            Follow our newsletter. We will regulary update <br /> our latest
            project and availability.
          </p>
          <form className="w-full">
            <div className="relative">
              <EmailIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="md:w-[500px] text-[#2E3E5C] bg-[#f1f1fc] py-6 pl-14 pr-[195px] rounded-xl outline-none"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="absolute text-lg text-white px-10 py-2 bg-primary rounded-xl top-1/2 -translate-y-1/2 right-[345px]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div>Hola</div>
      </div>
    </div>
  );
};
