import React, { FC } from 'react'

interface SwitchProps {
  value: boolean,
  onChange: () => void
}

const SwitchButton: FC<SwitchProps> = ({ onChange, value }: SwitchProps) => {
  return (
    <div
      onClick={onChange}
      className={` w-10 h-4 flex items-center ${value === true ? "bg-blue-200" : "bg-gray-300"} 
      rounded-full cursor-pointer`}
    >
      <div
        className={`${value === true ? "bg-blue-600" : "bg-white"}
     h-5 w-5 rounded-full shadow-md transition transform ${value ? "transform translate-x-5" : null}
    `}
      >

      </div>
    </div>
  )
}

export default SwitchButton
