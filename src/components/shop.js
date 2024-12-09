import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './shop.css'

const Shop = (props) => {
  return (
    <div className={`shop-container1 ${props.rootClassName} `}>
      <div className="shop-container2">
        <div className="shop-container3">
          <span className="shop-text1">Название:</span>
          <span className="shop-name">
            {props.name ?? (
              <Fragment>
                <span className="shop-text5">Name</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="shop-container4">
          <span className="shop-text2">
            <span>Местоположение:</span>
            <br></br>
          </span>
          <span className="shop-location">
            {props.location ?? (
              <Fragment>
                <span className="shop-text6">Location</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Shop.defaultProps = {
  name: undefined,
  rootClassName: '',
  location: undefined,
}

Shop.propTypes = {
  name: PropTypes.element,
  rootClassName: PropTypes.string,
  location: PropTypes.element,
}

export default Shop
