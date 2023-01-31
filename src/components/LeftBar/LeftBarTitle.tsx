import React, { useEffect, useState, FC } from "react";

import LoginForm from "../LoginForm";

import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";

const LeftBarTitle: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const { checkAuth, logout, setActiveModalka, setBasketButton } =
    useAppDispatch();
  const { isAuth, user, loading, isBasketButton } = useTypedSelector((state) => state.user);
  console.log('users', users)

  useEffect(() => {
    checkAuth();
  }, []);

  async function getUsers() {
    try {
      const res = await UserService.fetchUsers()
      setUsers(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  const onCloseBasket = () => {
    setBasketButton(false);
    logout()
  };

  // if (loading) {
  //   return <h1>Идёт загрузка...</h1>;
  // }

  return (
    <div className="flex flex-col h-[400px] pl-[10px] ">
      <div className="flex gap-[20px] ">
        <span>Пользователь:</span>
        <h1>{isAuth ? `${user.userName}` : "Не авторизован"}</h1>
      </div>
      {!isAuth ? (
        <LoginForm />
      ) : (
        <button type="button" onClick={() => logout()}>
          Выйти
        </button>
      )}
      <div>
        {/* <button type="button" onClick={getUsers}>
          Получить список пользователей
        </button>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))} */}
      </div>
      <div className="flex justify-between items-center p-[10px]">
        <span className="text-[50px] font-semibold py-[10px] ">
          Как долго копить ?
        </span>
        <div className="flex w-[30%] ">
          <button
            type="button"
            className={isBasketButton ? "hidden" : "flex cursor-pointer"}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 25V23C25 21.9391 24.5259 20.9217 23.682 20.1716C22.8381 19.4214 21.6935 19 20.5 19H11.5C10.3065 19 9.16193 19.4214 8.31802 20.1716C7.47411 20.9217 7 21.9391 7 23V25"
                stroke="#F4F8FB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z"
                stroke="#F4F8FB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {!isBasketButton ? (
            <button
              onClick={() => setActiveModalka(true)}
              className="h-[40px] px-[15px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] "
            >
              Войти
            </button>
          ) : (
            <button
              onClick={onCloseBasket}
              className="h-[40px] px-[15px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] "
            >
              Выйти
            </button>
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
