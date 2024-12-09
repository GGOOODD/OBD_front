import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemAirplaneModel from './elem-airplane-model'
import './adm-airplane-model.css'

const AdmAirplaneModel = (props) => {
  return (
    <div className={`adm-airplane-model-container1 ${props.rootClassName} `}>
      <span className="adm-airplane-model-text10">
        <span>Модель самолёта</span>
        <br></br>
      </span>
      <div className="adm-airplane-model-container2">
        <div className="adm-airplane-model-container3">
          <div className="adm-airplane-model-container4">
            <button type="button" className="adm-airplane-model-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airplane-model-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-airplane-model-container5">
            <ElemAirplaneModel
              capacity={
                <Fragment>
                  <span className="adm-airplane-model-text15">capacity</span>
                </Fragment>
              }
              rootClassName="elem-airplane-modelroot-class-name"
              airplaneModelName={
                <Fragment>
                  <span className="adm-airplane-model-text16">
                    airplaneModelName
                  </span>
                </Fragment>
              }
            ></ElemAirplaneModel>
          </div>
        </div>
        <div className="adm-airplane-model-container6">
          <div className="adm-airplane-model-container7">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airplane-model-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-airplane-model-text18">Error</span>
          </div>
          <div className="adm-airplane-model-container8">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-airplane-model-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-airplane-model-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-airplane-model-text21">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmAirplaneModel.defaultProps = {
  rootClassName: '',
}

AdmAirplaneModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirplaneModel
