import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import FlightHistory from './flight-history'
import './pers-account.css'

const PersAccount = (props) => {
  const [passwordChange, setPasswordChange] = useState(false)
  const [fioChange, setFioChange] = useState(false)
  const [info, setInfo] = useState({})
  const [history, setHistory] = useState([])

  const fetchInfo = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    var response = await fetch("http://localhost:8000/api/user/get_user_info", requestOptions)
    var fetchInfo = await response.json();
    setInfo(fetchInfo)
    
    response = await fetch("http://localhost:8000/api/user/get_all_flight_history", requestOptions)
    fetchInfo = await response.json();
    setHistory(fetchInfo)
  }

  useEffect(() => {
    fetchInfo()
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

  return (
    <div className="pers-account-container1">
      <span className="pers-account-text10">ЛИЧНЫЙ КАБИНЕТ</span>
      <div className="pers-account-container2">
        <div className="pers-account-container3">
          <span className="pers-account-text11">
            <span>Фамилия:</span>
            <br></br>
          </span>
          <span className="pers-account-surname">{info["surname"]}</span>
        </div>
        <div className="pers-account-container4">
          <span className="pers-account-text14">
            <span>Имя:</span>
            <br></br>
          </span>
          <span className="pers-account-name">{info["name"]}</span>
        </div>
        <div className="pers-account-container5">
          <span className="pers-account-text17">
            <span>Отчество:</span>
            <br></br>
          </span>
          <span className="pers-account-patronymic">{info["patronymic"]}</span>
        </div>
        <div className="pers-account-container6">
          <span className="pers-account-text20">
            <span>Почта:</span>
            <br></br>
          </span>
          <span className="pers-account-text23">{info["email"]}</span>
        </div>
        {passwordChange ?
          <div className="pers-account-container7">
            <input type="text" id="password" placeholder="Пароль" className="input" />
            <button type="button" onClick={passwordChangeRequest} className="pers-account-button2 button">
              <span>Изменить</span>
            </button>
            <button type="button" onClick={() => {setPasswordChange(false)}} className="pers-account-button3 button">
              <span>Отмена</span>
            </button>
            <span id="passwordSuccess" className="pers-account-text11"></span>
            <span className="pers-account-text27">
              <span id="passwordError" className="pers-account-text64"></span>
            </span>
          </div>
        :
          <button type="button" onClick={() => {setPasswordChange(true)}} className="pers-account-button1 button">
            <span>Изменить пароль</span>
          </button>
        }
        {fioChange ?
          <div className="pers-account-container8">
            <input
              type="text"
              id="surname"
              placeholder="Фамилия"
              className="pers-account-textinput2 input"
            />
            <input
              type="text"
              id="name"
              placeholder="Имя"
              className="pers-account-textinput3 input"
            />
            <input
              type="text"
              id="patronymic"
              placeholder="Отчество"
              className="pers-account-textinput4 input"
            />
            <button type="button" onClick={fioChangeRequest} className="pers-account-button5 button">
              <span>Изменить</span>
            </button>
            <button type="button" onClick={() => {setFioChange(false)}} className="pers-account-button6 button">
              <span>Отмена</span>
            </button>
            <span className="pers-account-text31">
              <span id="fioError" className="pers-account-text65"></span>
            </span>
          </div>
        :
        <button type="button" onClick={() => {setFioChange(true)}} className="pers-account-button4 button">
          <span>Изменить ФИО</span>
        </button>
        }
        <button type="button" onClick={logout} className="pers-account-button7 button">
          <span>Выйти из аккаунта</span>
        </button>
      </div>
      <span className="pers-account-text33">История рейсов</span>
      <div className="pers-account-container9">
        <FlightHistory
          seat={
            <Fragment>
              <span className="pers-account-text34">
                <span>Место</span>
                <br></br>
              </span>
            </Fragment>
          }
          airline={
            <Fragment>
              <span className="pers-account-text37">
                <span>Авиакомпания</span>
                <br></br>
              </span>
            </Fragment>
          }
          airport={
            <Fragment>
              <span className="pers-account-text40">
                <span>Аэропорт</span>
                <br></br>
              </span>
            </Fragment>
          }
          destination={
            <Fragment>
              <span className="pers-account-text43">
                <span>Место назначения</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="flight-historyroot-class-name"
          paymentDatetime={
            <Fragment>
              <span className="pers-account-text46">
                <span>Дата оплаты</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></FlightHistory>
        {history.map((flightHistory) => (
          <FlightHistory
            seat={
              <Fragment>
                <span className="pers-account-text49">
                  <span>{flightHistory["seat"]}</span>
                  <br></br>
                </span>
              </Fragment>
            }
            airline={
              <Fragment>
                <span className="pers-account-text52">
                  <span>{flightHistory["airline"]}</span>
                  <br></br>
                </span>
              </Fragment>
            }
            airport={
              <Fragment>
                <span className="pers-account-text55">
                  <span>{flightHistory["airport"]}</span>
                  <br></br>
                </span>
              </Fragment>
            }
            destination={
              <Fragment>
                <span className="pers-account-text58">
                  <span>{flightHistory["destination"]}</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="flight-historyroot-class-name1"
            paymentDatetime={
              <Fragment>
                <span className="pers-account-text61">
                  <span>{flightHistory["payment_datetime"]}</span>
                  <br></br>
                </span>
              </Fragment>
            }
          ></FlightHistory>
        ))}
      </div>
    </div>
  )
}

PersAccount.defaultProps = {
  text: undefined,
  text1: undefined,
}

PersAccount.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default PersAccount
