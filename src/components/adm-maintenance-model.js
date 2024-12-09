import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemMaintenanceModel from './elem-maintenance-model'
import './adm-maintenance-model.css'

const AdmMaintenanceModel = (props) => {
  return (
    <div className={`adm-maintenance-model-container1 ${props.rootClassName} `}>
      <span className="adm-maintenance-model-text10">
        <span>Вид обслуживания самолётов</span>
        <br></br>
      </span>
      <div className="adm-maintenance-model-container2">
        <div className="adm-maintenance-model-container3">
          <div className="adm-maintenance-model-container4">
            <button
              type="button"
              className="adm-maintenance-model-button1 button"
            >
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button
              type="button"
              className="adm-maintenance-model-button2 button"
            >
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-maintenance-model-container5">
            <ElemMaintenanceModel
              description={
                <Fragment>
                  <span className="adm-maintenance-model-text15">
                    description
                  </span>
                </Fragment>
              }
              airplaneName={
                <Fragment>
                  <span className="adm-maintenance-model-text16">
                    airplaneName
                  </span>
                </Fragment>
              }
              rootClassName="elem-maintenance-modelroot-class-name"
            ></ElemMaintenanceModel>
          </div>
        </div>
        <div className="adm-maintenance-model-container6">
          <div className="adm-maintenance-model-container7">
            <input type="text" placeholder="Название" className="input" />
            <textarea
              placeholder="Описание требований"
              className="adm-maintenance-model-textarea1 textarea"
            ></textarea>
            <button
              type="button"
              className="adm-maintenance-model-button3 button"
            >
              <span>Создать</span>
            </button>
            <span className="adm-maintenance-model-text18">Error</span>
          </div>
          <div className="adm-maintenance-model-container8">
            <input type="text" placeholder="Название" className="input" />
            <textarea
              placeholder="Описание требований"
              className="adm-maintenance-model-textarea2 textarea"
            ></textarea>
            <button
              type="button"
              className="adm-maintenance-model-button4 button"
            >
              <span>Изменить</span>
            </button>
            <button
              type="button"
              className="adm-maintenance-model-button5 button"
            >
              <span>Удалить</span>
            </button>
            <span className="adm-maintenance-model-text21">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmMaintenanceModel.defaultProps = {
  rootClassName: '',
}

AdmMaintenanceModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmMaintenanceModel
