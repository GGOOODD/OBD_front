import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemFlight from './elem-flight'
import './adm-flight.css'

const AdmFlight = (props) => {
  return (
    <div className={`adm-flight-container1 ${props.rootClassName} `}>
      <span className="adm-flight-text10">
        <span>Рейс</span>
        <br></br>
      </span>
      <div className="adm-flight-container2">
        <div className="adm-flight-container3">
          <div className="adm-flight-container4">
            <button type="button" className="adm-flight-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input
              type="text"
              placeholder="Назв. авиакомп./аэропорта"
              className="input"
            />
            <button type="button" className="adm-flight-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-flight-container5">
            <ElemFlight
              airlineName={
                <Fragment>
                  <span className="adm-flight-text15">airlineName</span>
                </Fragment>
              }
              airportName={
                <Fragment>
                  <span className="adm-flight-text16">airportName</span>
                </Fragment>
              }
              rootClassName="elem-flightroot-class-name"
            ></ElemFlight>
          </div>
        </div>
        <div className="adm-flight-container6">
          <div className="adm-flight-container7">
            <input
              type="text"
              placeholder="Название авиакомпании"
              className="input"
            />
            <input
              type="text"
              placeholder="Название аэропорта"
              className="input"
            />
            <button type="button" className="adm-flight-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-flight-text18">Error</span>
          </div>
          <div className="adm-flight-container8">
            <input
              type="text"
              placeholder="Название авиакомпании"
              className="input"
            />
            <input
              type="text"
              placeholder="Название аэропорта"
              className="input"
            />
            <button type="button" className="adm-flight-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-flight-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-flight-text21">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmFlight.defaultProps = {
  rootClassName: '',
}

AdmFlight.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmFlight
