import React, { useState, ChangeEvent, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faLink,
  faFloppyDisk,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

interface IValue {
  taimeInHours: string
}


function LeftBarForm(): JSX.Element {
  const [valueMany, setValueMany] = useState('');
  const [valueHourlyRate, setValueHourlyRate] = useState('');
  const [taim, setTaim] = useState(0);
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [taimeInMinutes, setTaimeInMinutes] = useState(0);

  const handleValueMany = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newValueMany = e.target.value
    setValueMany(newValueMany)
  }

  const handleValueHourlyRate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValueHourlyRate = e.target.value;
    setValueHourlyRate(newValueHourlyRate);
  };

  // let taim = 0
  // let taimeInMinutes = 0

  // let day = '0'
  // let hours = '0'

  // let weeks = '0'

  const onClick = () => {
    if (+valueHourlyRate === 0) {
      setTaim(0)
    }
    if (+valueHourlyRate > 0) {
      const valueAllTime = (+valueMany / +valueHourlyRate).toFixed(2)
      console.log(valueAllTime)
      const valueTaim = Number(String(valueAllTime).split('.')[0])
      setTaim(valueTaim)
      if (valueTaim > 24) {
        const days = (valueTaim / 24).toFixed(2)
        const valueDay = Number(String(days).split('.')[0])
        setDay(valueDay)

        const allHours = Number(String(days).split('.')[1]) / 100 * 24
        setHours(Number(String(allHours).split('.')[0]))

        if (valueDay > 7) {
          const week = (valueDay / 7).toFixed(2)
          const valueWeek = Number(String(week).split('.')[0])
          setWeeks(valueWeek)
        }
      }
      const valueAllMinutes = Number(String(valueAllTime).split(".")[1])
      if (valueAllMinutes > 60) {
        setTaim(taim + 1)
        setTaimeInMinutes(valueAllMinutes - 60)
      } else {
        setTaimeInMinutes(valueAllMinutes)
      }
    }
  }

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
            <input
              type="number"
              className="border-0 bg-gray-100 outline-none "
              onChange={handleValueMany}
              value={valueMany}

            />
          </div>
          <div className="bg-gray-100 w-[350px] h-[55px] flex flex-col text-gray-600 rounded-[3px] pl-[20px] gap-[2px] border-b-2 border-gray-500 ">
            <label className="text-[14px] font-[10px] "> Часовая ставка</label>
            <input
              type="number"
              className="border-0 bg-gray-100 outline-none "
              onChange={handleValueHourlyRate}
              value={valueHourlyRate}
            />
          </div>
        </div>
        <div className="flex items-end">
          <button type="button" onClick={onClick} className="h-[40px] px-[20px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] ">
            РАСCЧИТАТЬ
          </button>
        </div>
      </form>
      <div className="p-[15px] flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в часах и минутах
          </span>
          <span className="text-[20px] font-semibold">
            {taim} час(ов) {taimeInMinutes} минут(ы)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в восьмичасовых рабочих днях
          </span>
          <span className="text-[20px] font-semibold">
            {day} дня(ей) {hours} часа(ов) {taimeInMinutes} минут(ы)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в пятидневных рабочих неделях
          </span>
          <span className="text-[20px] font-semibold">
            {weeks} неделя(и) {day} дня(ей) {hours} часа(ов) {taimeInMinutes} минут(ы)
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
