import React from 'react';

const Clients = () => {
  return (
    <div className="bg-gray-50 font-Inter overflow-x-hidden">
  
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center relative">
            <h2 className="text-4xl font-bold text-[#102B52] mb-12">What Our Clients Say</h2>
            
            <div className="max-w-4xl mx-auto relative">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-2 text-[#000000] transition-colors">
              
              </button>
              
              <div className="px-8">
                <p className="text-lg text-[#000000] leading-relaxed mb-8">
                  Cutting-edge technology backed by a team of financial experts. Our platform is a 
                  one-stop solution for anyone seeking instant and guaranteed lending options.
                </p>
                <p className="text-lg font-semibold text-gray-800">Adam Tyler</p>
              </div>
              
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-2 text-gray-400 hover:text-gray-600 transition-colors">
              
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white pt-5 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#102B52] text-center mb-12">Read Our Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2 mb-8">
         
            <div className="bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <img 
                src="/images/Roma.png" 
                alt="ROMA Finance" 
                className="w-11/12 h-48 object-contain mx-auto"
              />
              <div className="p-2 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-[#102B52] mb-1">ROMA Finance</h3>
                <p className="text-[#102B52] text-sm mt-auto">25 June 2025</p>
              </div>
            </div>

         
            <div className="bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <img 
                src="/images/Bank.png" 
                alt="Bank of England" 
                className="w-11/12 h-48 object-contain mx-auto"
              />
              <div className="p-2 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-[#102B52] mb-1">
                  Bank of England Holds Rates at 4.25% – June 2025 MPC
                </h3>
                <p className="text-[#102B52] text-sm mt-auto">16 June 2025</p>
              </div>
            </div>

          
            <div className="bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <img 
                src="/images/Heirarchy.png" 
                alt="Mastering Influence" 
                className="w-11/12 h-48 object-contain mx-auto "
              />
              <div className="p-2 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-[#102B52] mb-1">Mastering Influence in the Workplace</h3>
                <p className="text-[#102B52] text-sm mt-auto">10 June 2025</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#2B65B6] text-white px-8 py-3 rounded-[27px] font-medium">
              Read More Articles
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
