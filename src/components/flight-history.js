import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Field from './field'
import './flight-history.css'

const FlightHistory = (props) => {
  return (
    <div className={`flight-history-container1 ${props.rootClassName} `}>
      <div className="flight-history-container2">
        <Field
          text={props.airline}
          rootClassName="fieldroot-class-name5"
        ></Field>
        <Field
          text={props.destination}
          rootClassName="fieldroot-class-name6"
        ></Field>
        <Field
          text={props.airport}
          rootClassName="fieldroot-class-name7"
        ></Field>
        <Field
          text={props.paymentDatetime}
          rootClassName="fieldroot-class-name8"
        ></Field>
        <Field text={props.seat} rootClassName="fieldroot-class-name9"></Field>
      </div>
    </div>
  )
}

FlightHistory.defaultProps = {
  destination: undefined,
  rootClassName: '',
  airport: undefined,
  airline: undefined,
  paymentDatetime: undefined,
  seat: undefined,
}

FlightHistory.propTypes = {
  destination: PropTypes.element,
  rootClassName: PropTypes.string,
  airport: PropTypes.element,
  airline: PropTypes.element,
  paymentDatetime: PropTypes.element,
  seat: PropTypes.element,
}

export default FlightHistory
