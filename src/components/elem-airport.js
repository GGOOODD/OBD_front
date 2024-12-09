import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-airport.css'

const ElemAirport = (props) => {
  return (
    <div className={`elem-airport-container1 ${props.rootClassName} `}>
      <div className="elem-airport-container2">
        <span className="elem-airport-text1">Название:</span>
        <span className="elem-airport-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-airport-text8">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-airport-container3">
        <span className="elem-airport-text3">Название населённого пункта:</span>
        <span className="elem-airport-text4">
          {props.settlementName ?? (
            <Fragment>
              <span className="elem-airport-text9">settlementName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-airport-container4">
        <span className="elem-airport-text5">Адрес аэропорта:</span>
        <span className="elem-airport-text6">
          {props.address ?? (
            <Fragment>
              <span className="elem-airport-text7">address</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemAirport.defaultProps = {
  rootClassName: '',
  address: undefined,
  name: undefined,
  settlementName: undefined,
}

ElemAirport.propTypes = {
  rootClassName: PropTypes.string,
  address: PropTypes.element,
  name: PropTypes.element,
  settlementName: PropTypes.element,
}

export default ElemAirport
