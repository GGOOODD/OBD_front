import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemName from './elem-name'
import './adm-airline.css'

const AdmAirline = (props) => {
  return (
    <div className={`adm-airline-container1 ${props.rootClassName} `}>
      <span className="adm-airline-text10">
        <span>Авиакомпания</span>
        <br></br>
      </span>
      <div className="adm-airline-container2">
        <div className="adm-airline-container3">
          <div className="adm-airline-container4">
            <button type="button" className="adm-airline-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airline-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-airline-container5">
            <ElemName
              name={
                <Fragment>
                  <span className="adm-airline-text15">name</span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name"
            ></ElemName>
          </div>
        </div>
        <div className="adm-airline-container6">
          <div className="adm-airline-container7">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airline-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-airline-text17">Error</span>
          </div>
          <div className="adm-airline-container8">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airline-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-airline-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-airline-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmAirline.defaultProps = {
  rootClassName: '',
}

AdmAirline.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirline
