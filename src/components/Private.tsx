import React, { ChangeEvent, useState, useRef } from "react";
import { AxiosResponse } from "axios";
import axios from "axios";

import { useTypedSelector } from "../hooks/useTypeSelector";
import userIcon from "../img/icon.jpeg";
import $api from "../http/index";
import { AuthResponse } from '../models/response/AuthResponse';
import { IUser } from '../models/IUser'
import { API_URL } from '../http/index'
import LogoAvatar from '../img/see.png'

interface UserData {
  prevState: null;
}

const Private = () => {
  const filePicker = useRef<HTMLInputElement>(null);
  const { user } = useTypedSelector(state => state.user)
  console.log("user", user.avatar);
  const [file, setFile] = useState<File | null>(null);
  const [upLoaded, setUpLoaded] = useState({} as IUser);

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
      return;
    }
    const formData = new FormData();
    formData.append("img", file);
    const response = await $api.post<IUser>("/avatar", formData);
    console.log("data", response.data);
    setUpLoaded(response.data);
  }

  // const image = file.split("\\")[2];
  // console.log('image', image)

  const handelPick = () => {
    if (filePicker.current !== null) {
      filePicker.current.click();
    }
  }

  const avatar = user.avatar
    ? `http://localhost:5000/${user.avatar}`
    : LogoAvatar;

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
        <div className="flex gap-[20px] items-center ">
          <span>Аватар: </span>
          <button
            className="border-2 bg-gray-400 p-[10px] rounded-[10px] text-white "
            onClick={handelPick}
          >
            Выбрать файл
          </button>
          <input
            className="opacity-0 h-0 w-0 p-0 m-0 overflow-hidden"
            type="file"
            onChange={selectFile}
            ref={filePicker}
            // miltiple
            accept="image/*,.png, .jpg, .gif, .web"
          />
          <div className="flex w-[60px] h-[60px] bg-white rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <img
              className="h-auto w-full"
              src={avatar}
              alt="userIcon"
            />
          </div>
          <button
            className="border-2 bg-gray-400 p-[10px] rounded-[10px] text-white "
            onClick={handleUpload}
          >
            Загрузить сейчас
          </button>
        </div>
      </div>
    </div>
  );
}

export default Private
