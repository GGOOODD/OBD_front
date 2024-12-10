import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-country.css'

const ElemCountry = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-country-container${props.id == 0 ? 10 : 11}`}>
      <div className="elem-country-container2">
        <span className="elem-country-text1">Название:</span>
        <span className="elem-country-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-country-text6">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-country-container3">
        <span className="elem-country-text3">Геокод:</span>
        <span className="elem-country-text4">
          {props.geocode ?? (
            <Fragment>
              <span className="elem-country-text5">geocode</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemCountry.defaultProps = {
  geocode: undefined,
  name: undefined,
}

ElemCountry.propTypes = {
  geocode: PropTypes.element,
  name: PropTypes.element,
  setChoose: PropTypes.func,
}

export default ElemCountry
