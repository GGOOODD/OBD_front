import React from 'react'

import './registr.css'
import Auth from './auth'

const Registr = (props) => {

  const tryRegistr = async () => {
    const surnamestr = document.getElementById("surname").value
    const namestr = document.getElementById("name").value
    const patronymicstr = document.getElementById("patronymic").value
    const emailstr = document.getElementById("email").value
    const passwordstr = document.getElementById("password").value
    const repeatPasswordstr = document.getElementById("repeat_password").value

    let dict = {"surname": surnamestr, "name": namestr, "patronymic": patronymicstr, "email": emailstr, "password": passwordstr, "repeat_password": repeatPasswordstr}
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/auth/register", requestOptions)
    if (response.status === 200)
    {
      window.location.href = 'http://localhost:3000/user'
    } else
    {
      var error = document.getElementById("error")
      error.textContent = "Данная почта уже зарегистрирована"
    }
  }

  return (
    <div className="registr-container1">
      <span className="registr-text10">Регистрация</span>
      <div className="registr-container2">
        <div className="registr-container3">
          <span className="registr-text11">
            <span>Фамилия:</span>
            <br></br>
          </span>
          <input type="text" id="surname" placeholder="Фамилия" className="input" />
        </div>
        <div className="registr-container4">
          <span className="registr-text14">
            <span>Имя:</span>
            <br></br>
          </span>
          <input type="text" id="name" placeholder="Имя" className="input" />
        </div>
        <div className="registr-container5">
          <span className="registr-text17">
            <span>Отчество:</span>
            <br></br>
          </span>
          <input type="text" id="patronymic" placeholder="Отчество" className="input" />
        </div>
        <div className="registr-container6">
          <span className="registr-text20">
            <span>Почта:</span>
            <br></br>
          </span>
          <input type="text" id="email" placeholder="Почта" className="input" />
        </div>
        <div className="registr-container7">
          <span className="registr-text23">
            <span>Пароль:</span>
            <br></br>
          </span>
          <input type="password" id="password" placeholder="Пароль" className="input" />
        </div>
        <div className="registr-container7">
          <span className="registr-text23">
            <span>Пароль:</span>
            <br></br>
          </span>
          <input type="password" id="repeat_password" placeholder="Подтверждение пароля" className="input" />
        </div>
        <button type="button" onClick={tryRegistr} className="registr-button1 button">
          <span>Регистрация</span>
        </button>
        <button type="button" onClick={() => {props.setWindow(<Auth setWindow={props.setWindow}></Auth>)}} className="registr-button2 button">
          <span>Перейти к авторизации</span>
        </button>
        <span id="error" className="registr-text28"></span>
      </div>
    </div>
  )
}

export default Registr
