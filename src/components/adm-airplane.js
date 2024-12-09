import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemAirplane from './elem-airplane'
import './adm-airplane.css'

const AdmAirplane = (props) => {
  return (
    <div className={`adm-airplane-container1 ${props.rootClassName} `}>
      <span className="adm-airplane-text10">
        <span>Самолёт</span>
        <br></br>
      </span>
      <div className="adm-airplane-container2">
        <div className="adm-airplane-container3">
          <div className="adm-airplane-container4">
            <button type="button" className="adm-airplane-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airplane-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-airplane-container5">
            <ElemAirplane
              airplaneName={
                <Fragment>
                  <span className="adm-airplane-text15">airplaneName</span>
                </Fragment>
              }
              rootClassName="elem-airplaneroot-class-name"
              airplaneModelName={
                <Fragment>
                  <span className="adm-airplane-text16">airplaneModelName</span>
                </Fragment>
              }
              registrationNumber={
                <Fragment>
                  <span className="adm-airplane-text17">
                    registrationNumber
                  </span>
                </Fragment>
              }
            ></ElemAirplane>
          </div>
        </div>
        <div className="adm-airplane-container6">
          <div className="adm-airplane-container7">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Назв. модели самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистрационный номер"
              className="input"
            />
            <button type="button" className="adm-airplane-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-airplane-text19">Error</span>
          </div>
          <div className="adm-airplane-container8">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Назв. модели самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистрационный номер"
              className="input"
            />
            <button type="button" className="adm-airplane-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-airplane-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-airplane-text22">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmAirplane.defaultProps = {
  rootClassName: '',
}

AdmAirplane.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirplane
