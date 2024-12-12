import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-shop.css'

const ElemShop = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-shop-container${props.id == 0 ? 10 : 11}`}>
      <div className="elem-shop-container2">
        <span className="elem-shop-text1">Название:</span>
        <span className="elem-shop-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-shop-text5">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-shop-container3">
        <span className="elem-shop-text3">Местоположение:</span>
        <span className="elem-shop-text4">
          {props.location ?? (
            <Fragment>
              <span className="elem-shop-text6">location</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemShop.defaultProps = {
  name: undefined,
  location: undefined,
  rootClassName: '',
}

ElemShop.propTypes = {
  name: PropTypes.element,
  location: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ElemShop
