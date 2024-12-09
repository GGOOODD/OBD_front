import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemName from './elem-name'
import './adm-scheduled-flight-model.css'

const AdmScheduledFlightModel = (props) => {
  return (
    <div
      className={`adm-scheduled-flight-model-container1 ${props.rootClassName} `}
    >
      <span className="adm-scheduled-flight-model-text10">
        <span>Тип назначенного рейса</span>
        <br></br>
      </span>
      <div className="adm-scheduled-flight-model-container2">
        <div className="adm-scheduled-flight-model-container3">
          <div className="adm-scheduled-flight-model-container4">
            <button
              type="button"
              className="adm-scheduled-flight-model-button1 button"
            >
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button
              type="button"
              className="adm-scheduled-flight-model-button2 button"
            >
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-scheduled-flight-model-container5">
            <ElemName
              name={
                <Fragment>
                  <span className="adm-scheduled-flight-model-text15">
                    name
                  </span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name2"
            ></ElemName>
          </div>
        </div>
        <div className="adm-scheduled-flight-model-container6">
          <div className="adm-scheduled-flight-model-container7">
            <input type="text" placeholder="Название" className="input" />
            <button
              type="button"
              className="adm-scheduled-flight-model-button3 button"
            >
              <span>Создать</span>
            </button>
            <span className="adm-scheduled-flight-model-text17">Error</span>
          </div>
          <div className="adm-scheduled-flight-model-container8">
            <input type="text" placeholder="Название" className="input" />
            <button
              type="button"
              className="adm-scheduled-flight-model-button4 button"
            >
              <span>Изменить</span>
            </button>
            <button
              type="button"
              className="adm-scheduled-flight-model-button5 button"
            >
              <span>Удалить</span>
            </button>
            <span className="adm-scheduled-flight-model-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmScheduledFlightModel.defaultProps = {
  rootClassName: '',
}

AdmScheduledFlightModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmScheduledFlightModel
