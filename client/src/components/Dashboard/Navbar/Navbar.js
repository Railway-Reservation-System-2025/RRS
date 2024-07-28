import React from 'react';
import imageLogo from '../../../images/user-logo.png';

const NavBar = () => {
  const userName = "John Doe";

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center h-16 px-10 py-6 shadow-md border-b border-neutral-200 bg-white z-50">
      <div className="flex items-center">
        <div className="mr-5">
          <img src={imageLogo} alt="userlogo" className="h-10 w-10 rounded-full bg-white" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold">{userName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
          Login
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
