import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './auth.css'
import Registr from './registr'

const Auth = (props) => {

  const tryAuth = async () => {
    const emailstr = document.getElementById("email").value
    const passwordstr = document.getElementById("password").value

    let dict = {"email": emailstr, "password": passwordstr}
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/auth/login", requestOptions)
    if (response.status === 200)
    {
      window.location.href = 'http://localhost:3000/user'
    } else
    {
      var error = document.getElementById("error")
      error.textContent = "Неверные данные"
    }
  }

  return (
    <div className="auth-container1">
      <span className="auth-text10">Авторизация</span>
      <div className="auth-container2">
        <div className="auth-container3">
          <span className="auth-text11">
            <span>Почта:</span>
            <br></br>
          </span>
          <input type="text" id="email" placeholder="Почта" className="input" />
        </div>
        <div className="auth-container4">
          <span className="auth-text14">
            <span>Пароль:</span>
            <br></br>
          </span>
          <input type="password" id="password" placeholder="Пароль" className="input" />
        </div>
        <button type="button" onClick={tryAuth} className="auth-button1 button">
          <span>Авторизация</span>
        </button>
        <button type="button" onClick={() => {props.setWindow(<Registr setWindow={props.setWindow}></Registr>)}} className="auth-button2 button">
          <span>Перейти к регистрации</span>
        </button>
        <span className="auth-text19">
          <span id="error" className="auth-text20"></span>
        </span>
      </div>
    </div>
  )
}

Auth.defaultProps = {
  text: undefined,
}

Auth.propTypes = {
  text: PropTypes.element,
}

export default Auth
