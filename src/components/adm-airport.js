import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemAirport from './elem-airport'
import './adm-airport.css'

const AdmAirport = (props) => {
  return (
    <div className={`adm-airport-container1 ${props.rootClassName} `}>
      <span className="adm-airport-text10">Аэропорт</span>
      <div className="adm-airport-container2">
        <div className="adm-airport-container3">
          <div className="adm-airport-container4">
            <button type="button" className="adm-airport-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airport-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-airport-container5">
            <ElemAirport
              name={
                <Fragment>
                  <span className="adm-airport-text13">name</span>
                </Fragment>
              }
              address={
                <Fragment>
                  <span className="adm-airport-text14">address</span>
                </Fragment>
              }
              rootClassName="elem-airportroot-class-name"
              settlementName={
                <Fragment>
                  <span className="adm-airport-text15">settlementName</span>
                </Fragment>
              }
            ></ElemAirport>
          </div>
        </div>
        <div className="adm-airport-container6">
          <div className="adm-airport-container7">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Название насел. пункта"
              className="input"
            />
            <input
              type="text"
              placeholder="Адрес аэропорта"
              className="input"
            />
            <button type="button" className="adm-airport-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-airport-text17">Error</span>
          </div>
          <div className="adm-airport-container8">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Название насел. пункта"
              className="input"
            />
            <input
              type="text"
              placeholder="Адрес аэропорта"
              className="input"
            />
            <button type="button" className="adm-airport-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-airport-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-airport-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmAirport.defaultProps = {
  rootClassName: '',
}

AdmAirport.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirport
