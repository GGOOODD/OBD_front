import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Field from './field'
import './scheduled-flight.css'

const ScheduledFlight = (props) => {
  return (
    <div className={`scheduled-flight-container1 ${props.rootClassName} `}>
      <div className="scheduled-flight-container2">
        <Field
          text={props.country}
          rootClassName="fieldroot-class-name"
        ></Field>
        <Field
          text={props.destination}
          rootClassName="fieldroot-class-name1"
        ></Field>
        <Field
          text={props.airport}
          rootClassName="fieldroot-class-name4"
        ></Field>
        <Field
          text={props.departure}
          rootClassName="fieldroot-class-name3"
        ></Field>
        <Field
          text={props.arrival}
          rootClassName="fieldroot-class-name2"
        ></Field>
      </div>
    </div>
  )
}

ScheduledFlight.defaultProps = {
  destination: undefined,
  rootClassName: '',
  departure: undefined,
  country: undefined,
  airport: undefined,
  arrival: undefined,
}

ScheduledFlight.propTypes = {
  destination: PropTypes.element,
  rootClassName: PropTypes.string,
  departure: PropTypes.element,
  country: PropTypes.element,
  airport: PropTypes.element,
  arrival: PropTypes.element,
}

export default ScheduledFlight
