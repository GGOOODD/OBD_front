import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-flight.css'

const ElemFlight = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-flight-container${props.id == 0 ? 10 : 11}`}>
      <div className="elem-flight-container2">
        <span className="elem-flight-text1">Название авиакомпании:</span>
        <span className="elem-flight-text2">
          {props.airlineName ?? (
            <Fragment>
              <span className="elem-flight-text5">airlineName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-flight-container3">
        <span className="elem-flight-text3">Название аэропорта:</span>
        <span className="elem-flight-text4">
          {props.airportName ?? (
            <Fragment>
              <span className="elem-flight-text6">airportName</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemFlight.defaultProps = {
  airlineName: undefined,
  rootClassName: '',
  airportName: undefined,
}

ElemFlight.propTypes = {
  airlineName: PropTypes.element,
  rootClassName: PropTypes.string,
  airportName: PropTypes.element,
}

export default ElemFlight
