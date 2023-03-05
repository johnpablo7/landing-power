import { reviews } from "../../data/reviews";
import QuoteleftIcon from "../../Svg/QuoteleftIcon";
import QuoteRightIcon from "../../Svg/QuoteRightIcon";

export const Review = () => {
  return (
    <div className="bg-slate-50 px-4 py-16 lg:px-28 lg:py-16">
      <h1 className="text-[#03014C] text-4xl lg:text-[40px] text-center font-black mb-8 2xl:mb-8">
        Let’s Hear <br /> What They Says
      </h1>
      <div className="flex items-center justify-between 2xl:w-[900px] mx-auto mb-4 md:mb-0">
        <QuoteleftIcon />
        <QuoteRightIcon />
      </div>
      <div className="flex justify-center mb-8 2xl:mb-14">
        <p className="text-[#03014C] text-xl md:text-base text-center md:leading-10 2xl:w-[670px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {reviews.map((list) => (
            <img
              key={list.id}
              src={list.img}
              alt="img"
              className="w-[40px] md:w-[80px] object-cover ring-4 ring-primary p-[2px] rounded-full"
            />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-[#1E1F4B] text-xl font-bold">
            Stephanie Aprilia
          </h3>
          <h5 className="text-[##2E3E5C] text-lg tracking-[1px]">
            Founder of Varibo
          </h5>
        </div>
      </div>
    </div>
  );
};
