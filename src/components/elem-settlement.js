import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-settlement.css'

const ElemSettlement = (props) => {
  return (
    <div className={`elem-settlement-container1 ${props.rootClassName} `}>
      <div className="elem-settlement-container2">
        <span className="elem-settlement-text1">Название:</span>
        <span className="elem-settlement-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-settlement-text7">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-settlement-container3">
        <span className="elem-settlement-text3">Название страны:</span>
        <span className="elem-settlement-text4">
          {props.countryName ?? (
            <Fragment>
              <span className="elem-settlement-text8">countryName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-settlement-container4">
        <span className="elem-settlement-text5">Тип населённого пункта:</span>
        <span className="elem-settlement-text6">
          {props.settlementType ?? (
            <Fragment>
              <span className="elem-settlement-text9">settlementType</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemSettlement.defaultProps = {
  rootClassName: '',
  name: undefined,
  countryName: undefined,
  settlementType: undefined,
}

ElemSettlement.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.element,
  countryName: PropTypes.element,
  settlementType: PropTypes.element,
}

export default ElemSettlement
