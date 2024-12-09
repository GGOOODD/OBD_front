import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import AdmCountry from './adm-country'
import AdmSettlement from './adm-settlement'
import AdmAirport from './adm-airport'
import AdmFlight from './adm-flight'
import AdmAirline from './adm-airline'
import AdmScheduledFlightModel from './adm-scheduled-flight-model'
import AdmAirplaneModel from './adm-airplane-model'
import AdmAirplane from './adm-airplane'
import AdmMaintenanceModel from './adm-maintenance-model'
import AdmJobTitle from './adm-job-title'
import AdmEmployee from './adm-employee'
import AdmPretripMaintenance from './adm-pretrip-maintenance'
import AdmShop from './adm-shop'
import AdmScheduledFlight from './adm-scheduled-flight'
import './adm-account.css'

const AdmAccount = (props) => {
  const [passwordChange, setPasswordChange] = useState(false)
  const [fioChange, setFioChange] = useState(false)
  const [showWindow, setShowWindow] = useState(<AdmCountry></AdmCountry>)
  const [button, setButton] = useState(1)

  const [info, setInfo] = useState({})

  const fetchInfo = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/user/get_user_info", requestOptions)
    const fetchInfo = await response.json();
    setInfo(fetchInfo)
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const logout = async () => {
    const requestOptions = {
      method: "PUT",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/auth/logout", requestOptions)
    if (response.status === 200)
      window.location.href = 'http://localhost:3000/'
  }

  const passwordChangeRequest = async () => {
    const passwordstr = document.getElementById("password").value
    let dict = {"password": passwordstr}
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var successStr = document.getElementById("passwordSuccess")
    var errorStr = document.getElementById("passwordError")
    const response = await fetch("http://localhost:8000/api/user/change_password", requestOptions)
    if (response.status === 200)
    {
      errorStr.textContent = ""
      successStr.textContent = "Пароль успешно изменён"
    } else
    {
      successStr.textContent = ""
      errorStr.textContent = "Длина пароля превышает максимальное значение"
    }
  }

  const fioChangeRequest = async () => {
    const surnamestr = document.getElementById("surname").value
    const namestr = document.getElementById("name").value
    const patronymicstr = document.getElementById("patronymic").value
    let dict = {"surname": surnamestr, "name": namestr, "patronymic": patronymicstr}
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/user/change_fio", requestOptions)
    if (response.status === 200)
    {
      //window.location.href = 'http://localhost:3000/user'
      const createInfo = {"surname": surnamestr, "name": namestr, "patronymic": patronymicstr, "email": info["email"]}
      setInfo(createInfo)
    }
    else
    {
      var errorStr = document.getElementById("fioError")
      errorStr.textContent = "Длина полей превышает максимальное значение"
    }
  }
  const components = {
    1: <AdmCountry></AdmCountry>,
    2: <AdmSettlement rootClassName="adm-settlementroot-class-name"></AdmSettlement>,
    3: <AdmAirport rootClassName="adm-airportroot-class-name"></AdmAirport>,
    4: <AdmAirline rootClassName="adm-airlineroot-class-name"></AdmAirline>,
    5: <AdmFlight rootClassName="adm-flightroot-class-name"></AdmFlight>,
    6: <AdmScheduledFlight rootClassName="adm-scheduled-flightroot-class-name"></AdmScheduledFlight>,
    7: <AdmAirplane rootClassName="adm-airplaneroot-class-name"></AdmAirplane>,
    8: <AdmAirplaneModel rootClassName="adm-airplane-modelroot-class-name"></AdmAirplaneModel>,
    9: <AdmPretripMaintenance rootClassName="adm-pretrip-maintenanceroot-class-name"></AdmPretripMaintenance>,
    10: <AdmMaintenanceModel rootClassName="adm-maintenance-modelroot-class-name"></AdmMaintenanceModel>,
    11: <AdmScheduledFlightModel rootClassName="adm-scheduled-flight-modelroot-class-name"></AdmScheduledFlightModel>,
    12: <AdmEmployee rootClassName="adm-employeeroot-class-name"></AdmEmployee>,
    13: <AdmJobTitle rootClassName="adm-job-titleroot-class-name"></AdmJobTitle>,
    14: <AdmShop rootClassName="adm-shoproot-class-name"></AdmShop>
  }
  const changeWindow = async (buttonNum) => {
    setButton(buttonNum)
    setShowWindow(components[buttonNum])
  }

/*
<AdmCountry></AdmCountry>
<AdmSettlement rootClassName="adm-settlementroot-class-name"></AdmSettlement>
<AdmAirport rootClassName="adm-airportroot-class-name"></AdmAirport>
<AdmAirline rootClassName="adm-airlineroot-class-name"></AdmAirline>
<AdmFlight rootClassName="adm-flightroot-class-name"></AdmFlight>
<AdmScheduledFlight rootClassName="adm-scheduled-flightroot-class-name"></AdmScheduledFlight>
<AdmAirplane rootClassName="adm-airplaneroot-class-name"></AdmAirplane>
<AdmAirplaneModel rootClassName="adm-airplane-modelroot-class-name"></AdmAirplaneModel>
<AdmPretripMaintenance rootClassName="adm-pretrip-maintenanceroot-class-name"></AdmPretripMaintenance>
<AdmMaintenanceModel rootClassName="adm-maintenance-modelroot-class-name"></AdmMaintenanceModel>
<AdmScheduledFlightModel rootClassName="adm-scheduled-flight-modelroot-class-name"></AdmScheduledFlightModel>
<AdmEmployee rootClassName="adm-employeeroot-class-name"></AdmEmployee>
<AdmJobTitle rootClassName="adm-job-titleroot-class-name"></AdmJobTitle>
<AdmShop rootClassName="adm-shoproot-class-name"></AdmShop>
*/

  return (
    <div className={`adm-account-container10 ${props.rootClassName} `}>
      <span className="adm-account-text10">ЛИЧНЫЙ КАБИНЕТ</span>
      <div className="adm-account-container11">
        <div className="adm-account-container12">
          <span className="adm-account-text11">
            <span>Фамилия:</span>
            <br></br>
          </span>
          <span className="adm-account-surname">{info["surname"]}</span>
        </div>
        <div className="adm-account-container13">
          <span className="adm-account-text14">
            <span>Имя:</span>
            <br></br>
          </span>
          <span className="adm-account-name">{info["name"]}</span>
        </div>
        <div className="adm-account-container14">
          <span className="adm-account-text17">
            <span>Отчество:</span>
            <br></br>
          </span>
          <span className="adm-account-patronymic">{info["patronymic"]}</span>
        </div>
        <div className="adm-account-container15">
          <span className="adm-account-text20">
            <span>Почта:</span>
            <br></br>
          </span>
          <span className="adm-account-text23">{info["email"]}</span>
        </div>
        {passwordChange ?
        <div className="adm-account-container16">
          <input type="text" id="password" placeholder="Пароль" className="input" />
          <button type="button" onClick={passwordChangeRequest} className="adm-account-button2 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={() => {setPasswordChange(false)}} className="adm-account-button3 button">
            <span>Отмена</span>
          </button>
          <span id="passwordSuccess" className="adm-account-text11"></span>
          <span id="passwordError" className="adm-account-text27"></span>
        </div>
        :
        <button type="button" onClick={() => {setPasswordChange(true)}} className="adm-account-button1 button">
          <span>Изменить пароль</span>
        </button>
        }
        {fioChange ?
        <div className="adm-account-container17">
          <input
            type="text"
            id="surname"
            placeholder="Фамилия"
            className="adm-account-textinput2 input"
          />
          <input
            type="text"
            id="name"
            placeholder="Имя"
            className="adm-account-textinput3 input"
          />
          <input
            type="text"
            id="patronymic"
            placeholder="Отчество"
            className="adm-account-textinput4 input"
          />
          <button type="button" onClick={fioChangeRequest} className="adm-account-button5 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={() => {setFioChange(false)}} className="adm-account-button6 button">
            <span>Отмена</span>
          </button>
          <span id="fioError" className="adm-account-text31"></span>
        </div>
        :
        <button type="button" onClick={() => {setFioChange(true)}} className="adm-account-button4 button">
          <span>Изменить ФИО</span>
        </button>
        }
        <button type="button" onClick={logout} className="adm-account-button7 button">
          <span>Выйти из аккаунта</span>
        </button>
      </div>
      <span className="adm-account-text33">АДМИН ПАНЕЛЬ</span>
      <div className="adm-account-container18">
        <div onClick={() => {changeWindow(1)}} className={`adm-account-container${button == 1 ? 19 : 20}`}>
          <span className="adm-account-text34">
            <span className="adm-account-text51">Страна</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(2)}} className={`adm-account-container${button == 2 ? 19 : 20}`}>
          <span className="adm-account-text35">
            <span className="adm-account-text53">Населённый пункт</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(3)}} className={`adm-account-container${button == 3 ? 19 : 20}`}>
          <span className="adm-account-text36">
            <span className="adm-account-text54">Аэропорт</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(4)}} className={`adm-account-container${button == 4 ? 19 : 20}`}>
          <span className="adm-account-text37">
            <span className="adm-account-text49">Авиакомпания</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(5)}} className={`adm-account-container${button == 5 ? 19 : 20}`}>
          <span className="adm-account-text38">
            <span className="adm-account-text56">Рейс</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(6)}} className={`adm-account-container${button == 6 ? 19 : 20}`}>
          <span className="adm-account-text39">
            <span className="adm-account-text50">Назначенный рейс</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(7)}} className={`adm-account-container${button == 7 ? 19 : 20}`}>
          <span className="adm-account-text40">
            <span className="adm-account-text55">Самолёт</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(8)}} className={`adm-account-container${button == 8 ? 19 : 20}`}>
          <span className="adm-account-text41">
            <span className="adm-account-text52">Модель самолёта</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(9)}} className={`adm-account-container${button == 9 ? 19 : 20}`}>
          <span className="adm-account-text42">
            <span className="adm-account-text61">предрейс. обслужив.</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(10)}} className={`adm-account-container${button == 10 ? 19 : 20}`}>
          <span className="adm-account-text43">
            <span className="adm-account-text60">Вид обслуживания</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(11)}} className={`adm-account-container${button == 11 ? 19 : 20}`}>
          <span className="adm-account-text44">
            <span className="adm-account-text57">Тип назнач. рейса</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(12)}} className={`adm-account-container${button == 12 ? 19 : 20}`}>
          <span className="adm-account-text45">
            <span className="adm-account-text62">Сотрудник</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(13)}} className={`adm-account-container${button == 13 ? 19 : 20}`}>
          <span className="adm-account-text46">
            <span className="adm-account-text59">Должность</span>
          </span>
        </div>
        <div onClick={() => {changeWindow(14)}} className={`adm-account-container${button == 14 ? 19 : 20}`}>
          <span className="adm-account-text47">
            <span className="adm-account-text58">Магазин</span>
          </span>
        </div>
      </div>
      {showWindow}
    </div>
  )
}

AdmAccount.defaultProps = {
  text11: undefined,
  text9: undefined,
  text: undefined,
  text7: undefined,
  text13: undefined,
  text12: undefined,
  text8: undefined,
  text10: undefined,
  rootClassName: '',
  text4: undefined,
  text1: undefined,
  text2: undefined,
  text5: undefined,
  text6: undefined,
  text3: undefined,
}

AdmAccount.propTypes = {
  text11: PropTypes.element,
  text9: PropTypes.element,
  text: PropTypes.element,
  text7: PropTypes.element,
  text13: PropTypes.element,
  text12: PropTypes.element,
  text8: PropTypes.element,
  text10: PropTypes.element,
  rootClassName: PropTypes.string,
  text4: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  text3: PropTypes.element,
}

export default AdmAccount
