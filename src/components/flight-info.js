import React, { Fragment, useState, useEffect } from 'react'
import Cookies from 'js-cookie';

import Crew from './crew'
import './flight-info.css'

const FlightInfo = (props) => {
  const [info, setInfo] = useState({});
  const [list, setList] = useState([]);

  const fetchScheduledFlightInfo = async () => {
    const response = await fetch(`http://localhost:8000/api/flight/get_scheduled_flight/${window.location.href.split('/').pop()}`);
    const scheduledFlight = await response.json();
    setInfo(scheduledFlight);
    setList(scheduledFlight["crew"]);
  }

  useEffect(() => {
    fetchScheduledFlightInfo();
  }, []);

  const handleBuyTicket = async () => {
    const cookie = Cookies.get('token')
    if (cookie === undefined)
    {
      window.location.href = 'http://localhost:3000/user'
      return
    }
    const requestOptions = {
      method: "POST",
      credentials: 'include'
    }
    const response = await fetch(`http://localhost:8000/api/user/create_flight_history/${window.location.href.split('/').pop()}`, requestOptions)
    const info = await response.json()
    var textElem = document.getElementById("buyDescription")
    textElem.textContent = info["detail"]
  }

  return (
    <div className="flight-info-container10">
      <span className="flight-info-text10">Подробная информация:</span>
      <div className="flight-info-container11">
        <div className="flight-info-container12">
          <span className="flight-info-text11">Авиакомпания:</span>
          <span className="flight-info-text12">{info["airline"]}</span>
        </div>
        <div className="flight-info-container13">
          <span className="flight-info-text13">Страна:</span>
          <span className="flight-info-text14">{info["country"]}</span>
        </div>
        <div className="flight-info-container14">
          <span className="flight-info-text15">Место назначения:</span>
          <span className="flight-info-text16">{info["destination"]}</span>
        </div>
        <div className="flight-info-container15">
          <span className="flight-info-text17">Аэропорт:</span>
          <span className="flight-info-text18">{info["airport"]}</span>
        </div>
        <div className="flight-info-container16">
          <span className="flight-info-text19">Дата и время вылета:</span>
          <span className="flight-info-text20">{info["departure"]}</span>
        </div>
        <div className="flight-info-container17">
          <span className="flight-info-text21">Дата и время прилёта:</span>
          <span className="flight-info-text22">{info["arrival"]}</span>
        </div>
        <div className="flight-info-container18">
          <span className="flight-info-text23">Самолёт:</span>
          <span className="flight-info-text24">{info["airplane"]}</span>
        </div>
        <div className="flight-info-container19">
          <span className="flight-info-text25">Тип назначенного рейса:</span>
          <span className="flight-info-text26">{info["scheduled_flight_model"]}</span>
        </div>
      </div>
      <span className="flight-info-text27">Экипаж:</span>
      <div className="flight-info-container20">
        {list.map((crewInfo) => (
          <Crew
          name={
            <Fragment>
              <span className="flight-info-text28">{crewInfo["name"]}</span>
            </Fragment>
          }
          surname={
            <Fragment>
              <span className="flight-info-text29">{crewInfo["surname"]}</span>
            </Fragment>
          }
          jobTitle={
            <Fragment>
              <span className="flight-info-text30">
                <span>{crewInfo["job_title"]}</span>
                <br></br>
              </span>
            </Fragment>
          }
          patronymic={
            <Fragment>
              <span className="flight-info-text33">{crewInfo["patronymic"]}</span>
            </Fragment>
          }
        ></Crew>
        ))}
      </div>
      <button type="button" onClick={handleBuyTicket} className="flight-info-button button">
        <span className="flight-info-text40">Купить билет</span>
      </button>
      <span id="buyDescription" className="flight-info-text11"></span>
    </div>
  )
}

export default FlightInfo
