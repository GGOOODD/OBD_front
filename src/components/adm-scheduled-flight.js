import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemScheduledFlight from './elem-scheduled-flight'
import ElemEmployee from './elem-employee'
import './adm-scheduled-flight.css'

const AdmScheduledFlight = (props) => {
  return (
    <div className={`adm-scheduled-flight-container10 ${props.rootClassName} `}>
      <span className="adm-scheduled-flight-text10">
        <span>Назначенный рейс</span>
        <br></br>
      </span>
      <div className="adm-scheduled-flight-container11">
        <div className="adm-scheduled-flight-container12">
          <div className="adm-scheduled-flight-container13">
            <button
              type="button"
              className="adm-scheduled-flight-button1 button"
            >
              <span>Загрузить данные</span>
            </button>
            <input
              type="text"
              placeholder="Название аэропорта"
              className="input"
            />
            <button
              type="button"
              className="adm-scheduled-flight-button2 button"
            >
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-scheduled-flight-container14">
            <ElemScheduledFlight
              airlineName={
                <Fragment>
                  <span className="adm-scheduled-flight-text15">
                    airlineName
                  </span>
                </Fragment>
              }
              airportName={
                <Fragment>
                  <span className="adm-scheduled-flight-text16">
                    airportName
                  </span>
                </Fragment>
              }
              rootClassName="elem-scheduled-flightroot-class-name"
              datetimeArrival={
                <Fragment>
                  <span className="adm-scheduled-flight-text17">
                    datetimeArrival
                  </span>
                </Fragment>
              }
              datetimeDeparture={
                <Fragment>
                  <span className="adm-scheduled-flight-text18">
                    datetimeDeparture
                  </span>
                </Fragment>
              }
              registrationNumber={
                <Fragment>
                  <span className="adm-scheduled-flight-text19">
                    registrationNumber
                  </span>
                </Fragment>
              }
              scheduledFlightModelName={
                <Fragment>
                  <span className="adm-scheduled-flight-text20">
                    ScheduledFlightModelName
                  </span>
                </Fragment>
              }
            ></ElemScheduledFlight>
          </div>
          <span className="adm-scheduled-flight-text21">
            <span className="adm-scheduled-flight-text33">
              Выбрать экипаж:
            </span>
          </span>
          <div className="adm-scheduled-flight-container15">
            <input type="text" placeholder="ФИО" className="input" />
            <button
              type="button"
              className="adm-scheduled-flight-button3 button"
            >
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-scheduled-flight-container16">
            <ElemEmployee
              name={
                <Fragment>
                  <span className="adm-scheduled-flight-text23">name</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-scheduled-flight-text24">surname</span>
                </Fragment>
              }
              jobTitle={
                <Fragment>
                  <span className="adm-scheduled-flight-text25">jobTitle</span>
                </Fragment>
              }
              experience={
                <Fragment>
                  <span className="adm-scheduled-flight-text26">
                    experience
                  </span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-scheduled-flight-text27">
                    patronymic
                  </span>
                </Fragment>
              }
              rootClassName="elem-employeeroot-class-name1"
            ></ElemEmployee>
          </div>
        </div>
        <div className="adm-scheduled-flight-container17">
          <div className="adm-scheduled-flight-container18">
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
            <input
              type="text"
              placeholder="Дата и время отлёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Дата и время прилёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистр. номер самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Тип назначенного рейса"
              className="input"
            />
            <button
              type="button"
              className="adm-scheduled-flight-button4 button"
            >
              <span>Создать</span>
            </button>
            <span className="adm-scheduled-flight-text29">Error</span>
          </div>
          <div className="adm-scheduled-flight-container19">
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
            <input
              type="text"
              placeholder="Дата и время отлёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Дата и время прилёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистр. номер самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Тип назначенного рейса"
              className="input"
            />
            <button
              type="button"
              className="adm-scheduled-flight-button5 button"
            >
              <span>Изменить</span>
            </button>
            <button
              type="button"
              className="adm-scheduled-flight-button6 button"
            >
              <span>Удалить</span>
            </button>
            <span className="adm-scheduled-flight-text32">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmScheduledFlight.defaultProps = {
  text: undefined,
  rootClassName: '',
}

AdmScheduledFlight.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AdmScheduledFlight
