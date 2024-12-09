import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemName from './elem-name'
import './adm-shop.css'

const AdmShop = (props) => {
  return (
    <div className={`adm-shop-container1 ${props.rootClassName} `}>
      <span className="adm-shop-text10">
        <span>Магазин</span>
        <br></br>
      </span>
      <div className="adm-shop-container2">
        <div className="adm-shop-container3">
          <div className="adm-shop-container4">
            <button type="button" className="adm-shop-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-shop-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-shop-container5">
            <ElemName
              name={
                <Fragment>
                  <span className="adm-shop-text15">name</span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name3"
            ></ElemName>
          </div>
        </div>
        <div className="adm-shop-container6">
          <div className="adm-shop-container7">
            <input type="text" placeholder="Название" className="input" />
            <input type="text" placeholder="Местоположение" className="input" />
            <button type="button" className="adm-shop-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-shop-text17">Error</span>
          </div>
          <div className="adm-shop-container8">
            <input type="text" placeholder="Название" className="input" />
            <input type="text" placeholder="Местоположение" className="input" />
            <button type="button" className="adm-shop-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-shop-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-shop-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmShop.defaultProps = {
  rootClassName: '',
}

AdmShop.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmShop
