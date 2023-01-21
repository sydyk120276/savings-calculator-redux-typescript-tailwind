import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faLink,
  faFloppyDisk,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

const LeftBarForm = () => {
  return (
    <div className="border h-[400px] shadow-xl m-[15px] bg-white rounded-[3px] ">
      <div className="p-[15px] flex gap-[10px] items-center ">
        <div className="w-[30px] h-[35px] bg-orange-400 flex items-center justify-center rounded-[5px] ">
          <FontAwesomeIcon
            className="text-white flex h-[25px]  w-[20px] "
            icon={faFlagCheckered}
          />
        </div>
        <div className="text-[25px] flex">Как долго копить ?</div>
      </div>
      <form className="w-full h-[150px] flex justify-between p-[15px] ">
        <div className="flex gap-[30px] ">
          <div className="bg-gray-100 w-[350px] h-[55px] flex flex-col text-gray-600 rounded-[3px] pl-[20px] gap-[2px] border-b-2 border-gray-500 ">
            <label className="text-[14px] font-[10px] ">Требуемая сумма</label>
            <input type="text" className="border-0 bg-gray-100 outline-none " />
          </div>
          <div className="bg-gray-100 w-[350px] h-[55px] flex flex-col text-gray-600 rounded-[3px] pl-[20px] gap-[2px] border-b-2 border-gray-500 ">
            <label className="text-[14px] font-[10px] "> Часовая ставка</label>
            <input type="text" className="border-0 bg-gray-100 outline-none " />
          </div>
        </div>
        <div className="flex items-end">
          <button className="h-[40px] px-[20px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] ">
            РАСCЧИТАТЬ
          </button>
        </div>
      </form>
      <div className="p-[15px] flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в часах и минутах
          </span>
          <span className="text-[25px] font-semibold">83 часа 33 минут</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в восьмичасовых рабочих днях
          </span>
          <span className="text-[25px] font-semibold">
            10 дней 3 часа 33 минут
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в пятидневных рабочих неделях
          </span>
          <span className="text-[25px] font-semibold">
            2 недели 0 дней 3 часа 33 минут
          </span>
        </div>
      </div>
      <div className="flex justify-end p-[15px] gap-[30px] ">
        <div className="flex gap-[2px] items-center ">
          <FontAwesomeIcon className="" icon={faLink} />
          <span className="text-gray-500 font-semibold">ССЫЛКА</span>
        </div>
        <div className="flex gap-[2px] items-center ">
          <FontAwesomeIcon className="" icon={faFloppyDisk} />
          <span className="text-gray-500 font-semibold">СОХРАНИТЬ</span>
        </div>
        <div className="flex gap-[2px] items-center ">
          <FontAwesomeIcon className="" icon={faPuzzlePiece} />
          <span className="text-gray-500 font-semibold">ВИДЖЕТ</span>
        </div>
      </div>
    </div>
  );
}

export default LeftBarForm
