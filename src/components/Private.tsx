import React, { ChangeEvent, useState } from "react";

import { useTypedSelector } from "../hooks/useTypeSelector";
import userIcon from "../img/icon.jpeg";

const Private = () => {
  const { user } = useTypedSelector(state => state.user)
  console.log("user", user);
    const [file, setFile] = useState('');
    console.log("file", file);


    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
      setFile(e.target.value);
    };

    const image = file.split("\\")[2];
    console.log('image', image)


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[1500px] h-[900px] rounded-[10px] shadow-2xl p-[50px] ">
        <div className="flex gap-[20px] h-[50px] w-full items-center ">
          <span className="text-[20px] font-semibold pt-[3px] ">
            Пользователь:
          </span>
          <h1 className="text-[30px] text-red-500 font-bold">
            {user.userName}
          </h1>
        </div>
        <div>
          <span>Аватар</span>
          <input type="file" onChange={selectFile} />
          <div className="flex w-[40px] h-[40px] bg-white rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <img
              className="h-auto w-full"
              src={`../img/${image}`}
              alt="userIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private
