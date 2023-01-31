import React, { useState, FC } from 'react'
import { FaFacebook, FaTwitter, FaVk, FaEnvelope } from "react-icons/fa";

import SwitchButton from './SwitchButton'

const RightBar: FC = () => {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <div className="flex w-1/4 flex flex-col ">
      <span
        className="text-[20px] font-semibold pb-[17px] "
      >
        Поделиться этой страницей
      </span>
      <div className="flex items-center pb-[10px] ">
        <SwitchButton value={isToggle} onChange={() => setIsToggle(!isToggle)} />
        <span className="text-[12px] font-semibold pl-[5px] ">Поделиться расчётом</span>
      </div>
      <div className="flex w-[160px] justify-between ">
        <button type="button" disabled className={`w-[30px] h-[30px] bg-blue-900 rounded-full items-center flex justify-center text-white
         ${isToggle === true ? "disabled:opacity-100 cursor-pointer" : "disabled:opacity-25 "} `} >
          <FaVk />
        </button>
        <button type="button" disabled>
          <FaFacebook className={`w-[30px] h-[30px] text-blue-900  ${isToggle === true ? "disabled:opacity-100 cursor-pointer" : "disabled:opacity-25 "}`} />
        </button>
        <button type="button" disabled className={`w-[30px] h-[30px] bg-blue-400 rounded-full items-center flex justify-center text-white 
        ${isToggle === true ? "disabled:opacity-100 cursor-pointer" : "disabled:opacity-25 "} `}>
          <FaTwitter />
        </button>
        <button type="button" disabled className={`${isToggle === true ? "disabled:opacity-100 cursor-pointer" : "disabled:opacity-25 "} w-[30px] h-[30px] bg-black rounded-full items-center flex justify-center text-white`} >
          <FaEnvelope />
        </button>
      </div>
    </div>
  );
}

export default RightBar
