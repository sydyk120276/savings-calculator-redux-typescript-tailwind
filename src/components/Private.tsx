import React, { ChangeEvent, useState, useRef } from "react";
import { AxiosResponse } from "axios";

import { useTypedSelector } from "../hooks/useTypeSelector";
import userIcon from "../img/icon.jpeg";
import $api from "../http/index";
import { AuthResponse } from '../models/response/AuthResponse';
import { IUser } from '../models/IUser'

interface UserData {
  prevState: null;
}

const Private = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const { user } = useTypedSelector(state => state.user)
  console.log("user", user);
  const [file, setFile] = useState<File | null>(null);
  const [upLoaded, setUpLoaded] = useState<File | null>(null);

  console.log("upLoaded", upLoaded);


  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files != null) {
      setFile(e.target.files[0]); //error
    }
  };
  console.log("file", file?.name);

  async function handleUpload(): Promise<void> {
    if (!file) {
      alert("please select a file");
      return
    }
    const formData = new FormData();
    formData.append('img', file)
    const data = await $api.post<AuthResponse>('/avatar', formData);
    console.log('data', data)
    console.log('formData', formData)
    // setUpLoaded(data: IUser);
  }

  // const image = file.split("\\")[2];
  // console.log('image', image)

  const handelPick = () => {
    if (filePicker.current !== null) {
      filePicker.current.click();
    }
  }

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
          <span>Аватар: </span>
          <button onClick={handelPick}>Pick file</button>
          <input
            className="opacity-0 h-0 w-0 p-0 m-0 overflow-hidden"
            type="file"
            onChange={selectFile}
            ref={filePicker}
            // miltiple
            accept="image/*,.png, .jpg, .gif, .web"
          />
          <button onClick={handleUpload}>Upload now</button>
          <div className="flex w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <img
              className="h-auto w-full"
              src={`http://localhost:5000/${user.avatar}`}
              alt="userIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private
