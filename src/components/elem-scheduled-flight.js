import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-scheduled-flight.css'

const ElemScheduledFlight = (props) => {
  return (
    <div className={`elem-scheduled-flight-container1 ${props.rootClassName} `}>
      <div className="elem-scheduled-flight-container2">
        <span className="elem-scheduled-flight-text10">
          Название авиакомпании:
        </span>
        <span className="elem-scheduled-flight-text11">
          {props.airlineName ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text27">airlineName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-scheduled-flight-container3">
        <span className="elem-scheduled-flight-text12">
          Название аэропорта:
        </span>
        <span className="elem-scheduled-flight-text13">
          {props.airportName ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text23">airportName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-scheduled-flight-container4">
        <span className="elem-scheduled-flight-text14">
          Дата и время отлёта:
        </span>
        <span className="elem-scheduled-flight-text15">
          {props.datetimeDeparture ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text26">
                datetimeDeparture
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-scheduled-flight-container5">
        <span className="elem-scheduled-flight-text16">
          Дата и время прилёта:
        </span>
        <span className="elem-scheduled-flight-text17">
          {props.datetimeArrival ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text22">
                datetimeArrival
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-scheduled-flight-container6">
        <span className="elem-scheduled-flight-text18">
          Регистрационный номер самолёта:
        </span>
        <span className="elem-scheduled-flight-text19">
          {props.registrationNumber ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text24">
                registrationNumber
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-scheduled-flight-container7">
        <span className="elem-scheduled-flight-text20">
          Тип назначенного рейса:
        </span>
        <span className="elem-scheduled-flight-text21">
          {props.scheduledFlightModelName ?? (
            <Fragment>
              <span className="elem-scheduled-flight-text25">
                ScheduledFlightModelName
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemScheduledFlight.defaultProps = {
  datetimeArrival: undefined,
  airportName: undefined,
  registrationNumber: undefined,
  scheduledFlightModelName: undefined,
  datetimeDeparture: undefined,
  airlineName: undefined,
  rootClassName: '',
}

ElemScheduledFlight.propTypes = {
  datetimeArrival: PropTypes.element,
  airportName: PropTypes.element,
  registrationNumber: PropTypes.element,
  scheduledFlightModelName: PropTypes.element,
  datetimeDeparture: PropTypes.element,
  airlineName: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ElemScheduledFlight
