import React from 'react';

export default function PnrCheck() {
  return (
    <div className='h-[400px] w-[650px]  bg-white bg-opacity-50 mt-52 ml-[600px]  rounded-lg shadow-lg flex flex-col justify-center items-center'>
      <h1 className='text-3xl  text-black pb-64 absolute'>PNR Check</h1>
      
      <input 
        type="number" 
        name="pnr-check" 
        placeholder='Enter PNR ' 
        className='w-96 max-w-[500px] h-[40px] px-4 border-2 placeholder-black border-gray-600 rounded-lg text-black mb-6'
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mt-4  '>Check</button>
    </div>
  );
}
