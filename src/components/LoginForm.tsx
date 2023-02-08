import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypeSelector";
import See from "../img/see.png";

const LoginForm: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
    const { activeModalka, isActiveRegistration } = useTypedSelector((state) => state.user);
  const {
    login,
    registration,
    logout,
    setActiveModalka,
    setBasketButton,
    setActiveRegistration,
  } = useAppDispatch();

    const onClick = () => {
      setActiveModalka(false);
    };
      const onBasketButtonVisible = () => {
        setBasketButton(true);
        setActiveModalka(false);
        login(userName, email, password);
      };

      const handlerActiveRegistration = () => {
        setActiveRegistration(true);
        registration(userName, email, password);
      };



  return (
    <section
      onClick={onClick}
      onKeyDown={() => setActiveModalka(false)}
      role="button"
      // tabIndex="0"
      className={
        activeModalka
          ? "z-20 flex items-center justify-center w-screen h-screen bg-black/40 fixed top-0 left-0 "
          : "hidden"
      }
    >
      <div
        className="flex flex-col w-[600px] h-[750px] bg-white p-[44px] "
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        // tabIndex="0"
      >
        <div className="flex justify-between pb-[40px] ">
          <span className="flex text-[24px] font-semibold leading-[18px]">
            Вход
          </span>
          <button className="" type="button" onClick={onClick}>
            <svg
              className="flex"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33203 3.33203L16.6654 16.6654"
                stroke="#E93232"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 16.668L16.6654 3.33464"
                stroke="#E93232"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-[25px] pb-[30px] ">
          <input
            type="text"
            placeholder="Введите Имя"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="flex h-[52px] w-full rounded-[4px] border-2 outline-0 pl-[10px] "
          />
          <input
            type="text"
            placeholder="Введите Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="flex h-[52px] w-full rounded-[4px] border-2 outline-0 pl-[10px] "
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="flex h-[52px] w-full rounded-[4px] border-2 outline-0 pl-[10px] "
            />
            <img
              src={See}
              alt="See"
              className="absolute top-[15px] right-[10px]"
            />
          </div>
        </div>
        {!isActiveRegistration ? (
          <Link
            to="/"
            className="flex pb-[30px] justify-end text-[17px] font-semibold leading-[10px] text-[#01579B] "
          >
            Забыли пароль?
          </Link>
        ) : (
          <div className=" pb-[30px]  ">
            Регистрируясь, вы соглашаетесь с
            <Link
              to="/"
              className="text-[#01579B] text-[17px] pl-[10px] font-semibold leading-[10px]"
            >
              пользовательским соглашением
            </Link>
          </div>
        )}
        {!isActiveRegistration ? (
          <Link
            to="/"
            onClick={onBasketButtonVisible}
            className="flex mb-[60px] bg-orange-400 text-white py-[12px] w-full rounded-[6px] items-center justify-center hover:bg-orange-450 "
          >
            ВОЙТИ
          </Link>
        ) : (
          <Link
            to="/"
            onClick={onBasketButtonVisible}
            className="flex mb-[60px] bg-orange-400 text-white py-[12px] w-full rounded-[6px] items-center justify-center hover:bg-orange-450 "
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Link>
        )}
        <div className="flex items-center pb-[60px] ">
          <div className="flex h-[2px] w-[130px] bg-[#CCCCCC] "></div>
          <span className="flex text-[20px] px-[10px] font-semibold leading-[10px] text-[#b3b9c6]">
            или войти с помощью
          </span>
          <div className="flex h-[2px] w-[130px] bg-[#CCCCCC] "></div>
        </div>
        <div className="flex justify-around mb-[60px]">
          <Link
            to="/"
            className="flex text-[17px] items-center justify-center font-semibold leading-[10px] text-white h-[50px] w-[200px] bg-[#EA4335] rounded-[4px] "
          >
            Google
          </Link>
        </div>
        {!isActiveRegistration ? (
          <div className="flex justify-center gap-[10px] ">
            <span className="text-[20px] font-semibold leading-[10px] text-[#333333]">
              Нет аккаунта?{" "}
            </span>
            <Link
              to="/"
              onClick={handlerActiveRegistration}
              className="text-[20px] font-semibold leading-[10px] text-[#01579B]"
            >
              Зарегистрироваться
            </Link>
          </div>
        ) : (
          <div className="flex justify-center gap-[10px] ">
            <span className="text-[20px] font-semibold leading-[10px] text-[#333333]">
              Если зарегестрированы?{" "}
            </span>
            <Link
              to="/"
              onClick={onBasketButtonVisible}
              className="text-[20px] font-semibold leading-[10px] text-[#01579B]"
            >
              Войти
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
