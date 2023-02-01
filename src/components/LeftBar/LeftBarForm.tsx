import React, { useState, ChangeEvent, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faLink,
  faFloppyDisk,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

function LeftBarForm(): JSX.Element {
  const [valueMany, setValueMany] = useState('');
  const [valueHourlyRate, setValueHourlyRate] = useState('');
  const [hours, setHours] = useState(0);
  const [hoursMinutes, setHoursMinutes] = useState(0);
  const [day, setDay] = useState(0);
  const [dayHours, setDayHours] = useState(0);
  const [dayMinutes, setDayMinutes] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [weeksDay, setWeeksDay] = useState(0);
  const [weeksHours, setWeeksHours] = useState(0);
  const [weeksMinutes, setWeeksMinutes] = useState(0);


  const handleValueMany = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newValueMany = e.target.value
    setValueMany(newValueMany)
  }

  const handleValueHourlyRate = (e: ChangeEvent<HTMLInputElement>) => {
    const newValueHourlyRate = e.target.value;
    setValueHourlyRate(newValueHourlyRate);
  };

  const onClick = () => {
    if (+valueHourlyRate === 0) {
      setHours(0);
    }
    if (+valueHourlyRate > 0) {
      const valueAllTime = (+valueMany / +valueHourlyRate).toFixed(2);

      // hoursMinutes
      const valueHoursMinutes = Number(String(valueAllTime).split(".")[0]);
      setHours(valueHoursMinutes);
      const valueAllMinutes = Number(String(valueAllTime).split(".")[1]);
      if (valueAllMinutes >= 60) {
        setHours(hours + 1);
        setHoursMinutes(valueAllMinutes - 60);
      } else {
        setHoursMinutes(valueAllMinutes);
      }

      // dayHoursMinutes
      if (valueHoursMinutes > 24) {
        const days = (+valueAllTime / 24).toFixed(2);
        const valueDay = Number(String(days).split(".")[0]);
        setDay(valueDay);
        const dayHour = (
          (Number(String(days).split(".")[1]) / 100) *
          24
        ).toFixed(2);
        setDayHours(Number(String(dayHour).split(".")[0]));
        const valueDayMinutes = Number(String(dayHour).split(".")[1]);
          if (valueDayMinutes >= 60) {
            setDayHours(dayHours + 1);
            setDayMinutes(valueDayMinutes - 60);
          } else {
            setDayMinutes(valueDayMinutes);
          }

        // weekDayHoursMinutes
        if (valueDay > 7) {
          const week = ((+valueAllTime / 24) / 7).toFixed(2);
          const valueWeek = Number(String(week).split(".")[0]);
          setWeeks(valueWeek);
          const dayOnWeek = (Number(String(week).split(".")[1]) / 100 * 7).toFixed(2)
          setWeeksDay(Number(String(dayOnWeek).split(".")[0]));
          const hoursOnDay = (Number(String(dayOnWeek).split(".")[1]) / 100 * 24).toFixed(2);
          setWeeksHours(Number(String(hoursOnDay).split(".")[0]));
          const valueWeekMinutes = Number(String(hoursOnDay).split(".")[1]);
          if (valueWeekMinutes >= 60) {
            setWeeksHours(weeksHours + 1);
            setWeeksMinutes(valueWeekMinutes - 60);
          } else {
            setWeeksMinutes(valueWeekMinutes);
          }
        }
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
          <button
            type="button"
            onClick={onClick}
            className="h-[40px] px-[20px] bg-orange-400 text-white rounded-[7px] font-semibold tracking-[2px] "
          >
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
            {hours} час(ов) {hoursMinutes} минут(ы)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в восьмичасовых рабочих днях
          </span>
          <span className="text-[20px] font-semibold">
            {day} дня(ей) {dayHours} часа(ов) {dayMinutes} минут(ы)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold">
            Время в пятидневных рабочих неделях
          </span>
          <span className="text-[20px] font-semibold">
            {weeks} неделя(и) {weeksDay} дня(ей) {weeksHours} часа(ов){" "}
            {weeksMinutes} минут(ы)
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
