import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemName from './elem-name'
import './adm-job-title.css'

const AdmJobTitle = (props) => {
  return (
    <div className={`adm-job-title-container1 ${props.rootClassName} `}>
      <span className="adm-job-title-text10">
        <span>Должность</span>
        <br></br>
      </span>
      <div className="adm-job-title-container2">
        <div className="adm-job-title-container3">
          <div className="adm-job-title-container4">
            <button type="button" className="adm-job-title-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-job-title-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-job-title-container5">
            <ElemName
              name={
                <Fragment>
                  <span className="adm-job-title-text15">name</span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name1"
            ></ElemName>
          </div>
        </div>
        <div className="adm-job-title-container6">
          <div className="adm-job-title-container7">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-job-title-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-job-title-text17">Error</span>
          </div>
          <div className="adm-job-title-container8">
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-job-title-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-job-title-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-job-title-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmJobTitle.defaultProps = {
  rootClassName: '',
}

AdmJobTitle.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmJobTitle
