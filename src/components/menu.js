import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-container1">
      <div className="menu-container2">
        <Link to="/">
        <span className="menu-text1">
          <span className="menu-text5">Аэропорт</span>
        </span>
        </Link>
      </div>
      <div className="menu-container3">
        <Link to="/" className="menu-navlink1 button">
          <span>
            <span className="menu-text7">Назначенные рейсы</span>
          </span>
        </Link>
        <Link to="/shops" className="menu-navlink2 button">
          <span>
            <span className="menu-text8">Магазины</span>
          </span>
        </Link>
      </div>
      <Link to="/user" className="menu-navlink3 button">
        <span>
          <span className="menu-text6">Личный кабинет</span>
        </span>
      </Link>
    </div>
  )
}

Menu.defaultProps = {
  text1: undefined,
  button2: undefined,
  button: undefined,
  button1: undefined,
}

Menu.propTypes = {
  text1: PropTypes.element,
  button2: PropTypes.element,
  button: PropTypes.element,
  button1: PropTypes.element,
}

export default Menu
