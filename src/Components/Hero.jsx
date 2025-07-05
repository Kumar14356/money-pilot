import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white font-Inter relative lg:h-[90vh] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-22 py-10 flex flex-col-reverse lg:flex-row items-center">
        
        <div className="w-full lg:w-[60%] text-center lg:text-left px-15 mt-5">
  <div className="inline-block bg-[#F97171] px-4 py-1 rounded-full mb-4">
    <p className="text-white text-sm">Latest 2025 Rates</p>
  </div>

  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-[#102B52]">
    Smarter business <br /> and property finance.
  </h1>

  <p className="text-base sm:text-lg lg:text-xl text-[#102B52] mt-4 mb-6">
    Compare 100s of lenders in minutes with MoneyPilot, your co-pilot from take-off to funding.
  </p>

  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-20">
    <button className="bg-[#2B65B6] text-white px-6 py-3 rounded-full">
      Find My Funding
    </button>
    <button className=" text-[#2B65B6] px-6 py-3 rounded-full">
      How It Works
    </button>
  </div>
</div>


   
        <div className="w-full lg:hidden mb-5 flex justify-center">
          <img
            src="/images/hotAirBaloon.png"
            alt="Hot Air Balloon"
            className="max-w-[400px] w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 top-20">
        <img
          src="/images/hotAirBaloon.png"
          alt="Hot Air Balloon"
          className="w-48 sm:w-56 md:w-94 h-auto object-contain"
        />
      </div>

      <div className="absolute left-0 top-65">
        <img src="/images/cloudright.png" alt="Cloud" className="w-20 sm:w-28 h-auto" />
      </div>
    </section>
  );
};

export default Hero