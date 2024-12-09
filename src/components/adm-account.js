import React, { Fragment } from 'react'

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
  return (
    <div className={`adm-account-container10 ${props.rootClassName} `}>
      <span className="adm-account-text10">ЛИЧНЫЙ КАБИНЕТ</span>
      <div className="adm-account-container11">
        <div className="adm-account-container12">
          <span className="adm-account-text11">
            <span>Фамилия:</span>
            <br></br>
          </span>
          <span className="adm-account-surname">Text</span>
        </div>
        <div className="adm-account-container13">
          <span className="adm-account-text14">
            <span>Имя:</span>
            <br></br>
          </span>
          <span className="adm-account-name">Text</span>
        </div>
        <div className="adm-account-container14">
          <span className="adm-account-text17">
            <span>Отчество:</span>
            <br></br>
          </span>
          <span className="adm-account-patronymic">Text</span>
        </div>
        <div className="adm-account-container15">
          <span className="adm-account-text20">
            <span>Почта:</span>
            <br></br>
          </span>
          <span className="adm-account-text23">Text</span>
        </div>
        <button type="button" className="adm-account-button1 button">
          <span>Изменить пароль</span>
        </button>
        <div className="adm-account-container16">
          <input type="text" placeholder="Пароль" className="input" />
          <button type="button" className="adm-account-button2 button">
            <span>Изменить</span>
          </button>
          <button type="button" className="adm-account-button3 button">
            <span>Отмена</span>
          </button>
          <span className="adm-account-text27">Error</span>
        </div>
        <button type="button" className="adm-account-button4 button">
          <span>Изменить ФИО</span>
        </button>
        <div className="adm-account-container17">
          <input
            type="text"
            placeholder="Фамилия"
            className="adm-account-textinput2 input"
          />
          <input
            type="text"
            placeholder="Имя"
            className="adm-account-textinput3 input"
          />
          <input
            type="text"
            placeholder="Отчество"
            className="adm-account-textinput4 input"
          />
          <button type="button" className="adm-account-button5 button">
            <span>Изменить</span>
          </button>
          <button type="button" className="adm-account-button6 button">
            <span>Отмена</span>
          </button>
          <span className="adm-account-text31">Error</span>
        </div>
        <button type="button" className="adm-account-button7 button">
          <span>Выйти из аккаунта</span>
        </button>
      </div>
      <span className="adm-account-text33">АДМИН ПАНЕЛЬ</span>
      <div className="adm-account-container18">
        <div className="adm-account-container19">
          <span className="adm-account-text34">
            <span className="adm-account-text51">Страна</span>
          </span>
        </div>
        <div className="adm-account-container20">
          <span className="adm-account-text35">
            <span className="adm-account-text53">Населённый пункт</span>
          </span>
        </div>
        <div className="adm-account-container21">
          <span className="adm-account-text36">
            <span className="adm-account-text54">Аэропорт</span>
          </span>
        </div>
        <div className="adm-account-container22">
          <span className="adm-account-text37">
            <span className="adm-account-text49">Авиакомпания</span>
          </span>
        </div>
        <div className="adm-account-container23">
          <span className="adm-account-text38">
            <span className="adm-account-text56">Рейс</span>
          </span>
        </div>
        <div className="adm-account-container24">
          <span className="adm-account-text39">
            <span className="adm-account-text50">Назначенный рейс</span>
          </span>
        </div>
        <div className="adm-account-container25">
          <span className="adm-account-text40">
            <span className="adm-account-text55">Самолёт</span>
          </span>
        </div>
        <div className="adm-account-container26">
          <span className="adm-account-text41">
            <span className="adm-account-text52">Модель самолёта</span>
          </span>
        </div>
        <div className="adm-account-container27">
          <span className="adm-account-text42">
            <span className="adm-account-text61">предрейс. обслужив.</span>
          </span>
        </div>
        <div className="adm-account-container28">
          <span className="adm-account-text43">
            <span className="adm-account-text60">Вид обслуживания</span>
          </span>
        </div>
        <div className="adm-account-container29">
          <span className="adm-account-text44">
            <span className="adm-account-text57">Тип назнач. рейса</span>
          </span>
        </div>
        <div className="adm-account-container30">
          <span className="adm-account-text45">
            <span className="adm-account-text62">Сотрудник</span>
          </span>
        </div>
        <div className="adm-account-container31">
          <span className="adm-account-text46">
            <span className="adm-account-text59">Должность</span>
          </span>
        </div>
        <div className="adm-account-container32">
          <span className="adm-account-text47">
            <span className="adm-account-text58">Магазин</span>
          </span>
        </div>
      </div>
      <AdmCountry></AdmCountry>
      <AdmSettlement rootClassName="adm-settlementroot-class-name"></AdmSettlement>
      <AdmAirport rootClassName="adm-airportroot-class-name"></AdmAirport>
      <AdmFlight rootClassName="adm-flightroot-class-name"></AdmFlight>
      <AdmAirline rootClassName="adm-airlineroot-class-name"></AdmAirline>
      <AdmScheduledFlightModel rootClassName="adm-scheduled-flight-modelroot-class-name"></AdmScheduledFlightModel>
      <AdmAirplaneModel rootClassName="adm-airplane-modelroot-class-name"></AdmAirplaneModel>
      <AdmAirplane rootClassName="adm-airplaneroot-class-name"></AdmAirplane>
      <AdmMaintenanceModel rootClassName="adm-maintenance-modelroot-class-name"></AdmMaintenanceModel>
      <AdmJobTitle rootClassName="adm-job-titleroot-class-name"></AdmJobTitle>
      <AdmEmployee rootClassName="adm-employeeroot-class-name"></AdmEmployee>
      <AdmPretripMaintenance rootClassName="adm-pretrip-maintenanceroot-class-name"></AdmPretripMaintenance>
      <AdmShop rootClassName="adm-shoproot-class-name"></AdmShop>
      <AdmScheduledFlight rootClassName="adm-scheduled-flightroot-class-name"></AdmScheduledFlight>
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
