import React from 'react'

import LoginForm from '../LoginForm'

const LeftBarTitle = () => {
  return (
    <div className="flex flex-col h-[400px] pl-[10px] ">
      <span className="text-[50px] font-semibold py-[10px] ">
        Как долго копить ?
      </span>
      <LoginForm />
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
}

export default LeftBarTitle
