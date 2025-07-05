import React from 'react';

const Finding = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-auto lg:h-[100vh] bg-[#FFECE5] overflow-x-hidden font-Inter'>
      <div className='w-full lg:w-[50%] text-white h-auto lg:h-[100vh] flex justify-center items-center'>
        <div className='w-[70%] h-auto p-5'>
          <div>
            <h1 className='text-[40px] text-[#102B52] font-semibold'>Find your Funding</h1>
          </div>
          <div>
            <p className='text-[20px] text-[#000000]'>
              Cutting-edge technology backed by a team of financial experts. Our platform is a one-stop
              solution for anyone seeking instant and guaranteed lending options.
            </p>
          </div>
          <div className='flex flex-col gap-4 mt-4'>
            <button className='bg-[#2B65B6] py-2 rounded-[50px] text-white w-[70%]'>
              Property Finance
            </button>
            <button className='bg-[#2B65B6] py-2 rounded-[50px] text-white w-[70%]'>
              Business Finance
            </button>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[50%] h-auto lg:h-[100vh] p-4 flex justify-center items-center'>
        <img src="/images/sidedesktop.png" alt="" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Finding;
