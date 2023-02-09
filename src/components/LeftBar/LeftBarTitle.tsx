import React, { useEffect, useState, FC } from "react";
import { Link } from "react-router-dom";

import LoginForm from "../LoginForm";

import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";
import userIcon from '../../img/icon.jpeg'
import LogoAvatar from '../../img/see.png'


const LeftBarTitle: FC = () => {
  const { checkAuth, logout, setActiveModalka, setBasketButton } =
    useAppDispatch();
  const { isAuth, user, loading, isBasketButton } = useTypedSelector((state) => state.user);
  console.log('user', user)

  useEffect(() => {
    checkAuth();
  }, []);

  const onCloseBasket = () => {
    setBasketButton(false);
    logout()
  };

  // if (loading) {
  //   return <h1>Идёт загрузка...</h1>;
  // }
    const avatar = user.avatar
      ? `http://localhost:5000/${user.avatar}`
      : LogoAvatar;

  return (
    <div className="flex flex-col h-[400px] pl-[10px] ">
      <div className="flex gap-[20px] ">
        <span>Пользователь:</span>
        <h1>{isAuth ? `${user.userName}` : "Не авторизован"}</h1>
      </div>
      {!isAuth && <LoginForm />}
      <div></div>
      <div className="flex justify-between items-center p-[10px]">
        <span className="text-[50px] font-semibold py-[10px] ">
          Как долго копить ?
        </span>
        <div className="flex w-[15%] ">
          {!isAuth ? (
            <div className="flex justify-end w-full">
              <button
                onClick={() => setActiveModalka(true)}
                className="h-[40px] px-[15px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] flex  "
              >
                Войти
              </button>
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <Link
                to="/private"
                className="flex w-[40px] h-[40px] bg-white rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
              >
                <img className="h-auto w-full" src={avatar} alt="userIcon" />
              </Link>
              <button
                onClick={onCloseBasket}
                className="flex h-[40px] px-[15px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] "
              >
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-[15px] flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-2">
          <span>
            Этот онлайн калькулятор рассчитывает, сколько времени придется
            работать, чтобы накопить заданную сумму при указанной часовой
            ставке.
          </span>
          <span>
            Калькулятор ниже считает, как долго нужно работать, чтобы накопить
            введенную сумму, исходя из часовой ставки
          </span>
        </div>
        <span className="flex pb-[15px] ">
          Результат выводится в часах, а также в днях (исходя из восьмичасового
          рабочего дня) и неделях (исходя из пятидневной сорокачасовой рабочей
          недели).
        </span>
      </div>
    </div>
  );
};

export default LeftBarTitle;
