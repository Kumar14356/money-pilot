import React from "react";

const FundingConfidence = () => {
  return (
    <section className="bg-[#F0FCFF] py-16 font-Inter overflow-x-hidden">
      <div className="container mx-auto  px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
        
      
        <div className="max-w-lg text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold font-Inter text-[#102B52]">
            Feel confident you're getting <br /> 
            the best deal – every time.
          </h2>
          <p className="mt-4 text-[#000000] text-base lg:text-lg">
            Our smart-search software scans the entire market to match you with the best available rates.  
            And unlike many others, we never charge a broker fee.
          </p>
          <p className="mt-2 text-[#000000] text-base lg:text-lg">
            Let our technology do the work. You'll get tailored results instantly, with no bias and no hidden costs.
          </p>
          <button className="mt-6 bg-[#2B65B6] text-white px-6 py-2 rounded-full font-[300] hover:bg-blue-700 transition">
            Find My Funding
          </button>
        </div>

   
        <div className="relative w-96 h-96 min-w-[400px]">
          
  
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-red-400 z-0"></div>

     
         

     
          <div className="relative left-1/2 transform -translate-x-1/2 top-5 z-0">
           <img src="/images/Rectangle 1340.png" className="w-58" alt="" />
          </div>
          <div className="absolute -left-15 top-14 bg-white rounded-xl shadow-lg w-40 z-10">
          <img src="/images/Lender Card.png" alt="" />

        
          </div>
          
          <div className="absolute  flex transform -translate-x-1/2 bottom-19 z-10 left-0">
         
            <img src="/images/bulb.png" className="w-24" alt="" />
           
          </div>
          <div className="absolute  flex transform -translate-x-1/2 bottom-30 z-10 left-20">
         
            <img src="/images/chat_plus.png"  alt="" />
           
          </div>

          <div className="absolute  inline-block gap-1 transform -translate-x-1/2 bottom-30 z-10 right-40">
         
         <img src="/images/Vector (1).png" className="m-1"  alt="" />
         <img src="/images/Vector (1).png" className="m-1"  alt="" />
         <img src="/images/Vector (2).png" className="m-1" alt="" />
         
       </div>
    
          

      
        <div className="h-[50vh] w-[30vw] bg-black">
         
        </div>
        </div>

      </div>
    </section>
  );
};

export default FundingConfidence;



