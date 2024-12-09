import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import FlightHistory from './flight-history'
import './pers-account.css'

const PersAccount = (props) => {
  return (
    <div className="pers-account-container1">
      <span className="pers-account-text10">ЛИЧНЫЙ КАБИНЕТ</span>
      <div className="pers-account-container2">
        <div className="pers-account-container3">
          <span className="pers-account-text11">
            <span>Фамилия:</span>
            <br></br>
          </span>
          <span className="pers-account-surname">Text</span>
        </div>
        <div className="pers-account-container4">
          <span className="pers-account-text14">
            <span>Имя:</span>
            <br></br>
          </span>
          <span className="pers-account-name">Text</span>
        </div>
        <div className="pers-account-container5">
          <span className="pers-account-text17">
            <span>Отчество:</span>
            <br></br>
          </span>
          <span className="pers-account-patronymic">Text</span>
        </div>
        <div className="pers-account-container6">
          <span className="pers-account-text20">
            <span>Почта:</span>
            <br></br>
          </span>
          <span className="pers-account-text23">Text</span>
        </div>
        <button type="button" className="pers-account-button1 button">
          <span>Изменить пароль</span>
        </button>
        <div className="pers-account-container7">
          <input type="text" placeholder="Пароль" className="input" />
          <button type="button" className="pers-account-button2 button">
            <span>Изменить</span>
          </button>
          <button type="button" className="pers-account-button3 button">
            <span>Отмена</span>
          </button>
          <span className="pers-account-text27">
            <span className="pers-account-text64">Error</span>
          </span>
        </div>
        <button type="button" className="pers-account-button4 button">
          <span>Изменить ФИО</span>
        </button>
        <div className="pers-account-container8">
          <input
            type="text"
            placeholder="Фамилия"
            className="pers-account-textinput2 input"
          />
          <input
            type="text"
            placeholder="Имя"
            className="pers-account-textinput3 input"
          />
          <input
            type="text"
            placeholder="Отчество"
            className="pers-account-textinput4 input"
          />
          <button type="button" className="pers-account-button5 button">
            <span>Изменить</span>
          </button>
          <button type="button" className="pers-account-button6 button">
            <span>Отмена</span>
          </button>
          <span className="pers-account-text31">
            <span className="pers-account-text65">Error</span>
          </span>
        </div>
        <button type="button" className="pers-account-button7 button">
          <span>Выйти из аккаунта</span>
        </button>
      </div>
      <span className="pers-account-text33">История рейсов</span>
      <div className="pers-account-container9">
        <FlightHistory
          seat={
            <Fragment>
              <span className="pers-account-text34">
                <span>Seat</span>
                <br></br>
              </span>
            </Fragment>
          }
          airline={
            <Fragment>
              <span className="pers-account-text37">
                <span>Airline</span>
                <br></br>
              </span>
            </Fragment>
          }
          airport={
            <Fragment>
              <span className="pers-account-text40">
                <span>Airport</span>
                <br></br>
              </span>
            </Fragment>
          }
          destination={
            <Fragment>
              <span className="pers-account-text43">
                <span>Destination</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="flight-historyroot-class-name"
          paymentDatetime={
            <Fragment>
              <span className="pers-account-text46">
                <span>Payment_datetime</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></FlightHistory>
        <FlightHistory
          seat={
            <Fragment>
              <span className="pers-account-text49">
                <span>Seat</span>
                <br></br>
              </span>
            </Fragment>
          }
          airline={
            <Fragment>
              <span className="pers-account-text52">
                <span>Airline</span>
                <br></br>
              </span>
            </Fragment>
          }
          airport={
            <Fragment>
              <span className="pers-account-text55">
                <span>Airport</span>
                <br></br>
              </span>
            </Fragment>
          }
          destination={
            <Fragment>
              <span className="pers-account-text58">
                <span>Destination</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="flight-historyroot-class-name1"
          paymentDatetime={
            <Fragment>
              <span className="pers-account-text61">
                <span>Payment_datetime</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></FlightHistory>
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
