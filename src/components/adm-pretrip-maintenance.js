import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemPretripMaintenance from './elem-pretrip-maintenance'
import './adm-pretrip-maintenance.css'

const AdmPretripMaintenance = (props) => {
  return (
    <div
      className={`adm-pretrip-maintenance-container1 ${props.rootClassName} `}
    >
      <span className="adm-pretrip-maintenance-text10">
        <span>Предрейсовое обслуживание</span>
        <br></br>
      </span>
      <div className="adm-pretrip-maintenance-container2">
        <div className="adm-pretrip-maintenance-container3">
          <div className="adm-pretrip-maintenance-container4">
            <button
              type="button"
              className="adm-pretrip-maintenance-button1 button"
            >
              <span>Загрузить данные</span>
            </button>
            <input
              type="text"
              placeholder="Регистр. номер самолёта"
              className="input"
            />
            <button
              type="button"
              className="adm-pretrip-maintenance-button2 button"
            >
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-pretrip-maintenance-container5">
            <ElemPretripMaintenance
              name={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text15">name</span>
                </Fragment>
              }
              result={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text16">result</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text17">
                    surname
                  </span>
                </Fragment>
              }
              datetime={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text18">
                    datetime
                  </span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text19">
                    patronymic
                  </span>
                </Fragment>
              }
              rootClassName="elem-pretrip-maintenanceroot-class-name"
              registrationNumber={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text20">
                    registrationNumber
                  </span>
                </Fragment>
              }
              maintenanceModelName={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text21">
                    maintenanceModelName
                  </span>
                </Fragment>
              }
            ></ElemPretripMaintenance>
          </div>
        </div>
        <div className="adm-pretrip-maintenance-container6">
          <div className="adm-pretrip-maintenance-container7">
            <input
              type="text"
              placeholder="Назв. вида обслуживания"
              className="input"
            />
            <input
              type="text"
              placeholder="Фамилия сотрудника"
              className="input"
            />
            <input type="text" placeholder="Имя сотрудника" className="input" />
            <input
              type="text"
              placeholder="Отчество сотрудника"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистр. номер самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Дата и время проведения"
              className="input"
            />
            <input
              type="text"
              placeholder="Результат проведения"
              className="input"
            />
            <button
              type="button"
              className="adm-pretrip-maintenance-button3 button"
            >
              <span>Создать</span>
            </button>
            <span className="adm-pretrip-maintenance-text23">Error</span>
          </div>
          <div className="adm-pretrip-maintenance-container8">
            <input
              type="text"
              placeholder="Назв. вида обслуживания"
              className="input"
            />
            <input
              type="text"
              placeholder="Фамилия сотрудника"
              className="input"
            />
            <input type="text" placeholder="Имя сотрудника" className="input" />
            <input
              type="text"
              placeholder="Отчество сотрудника"
              className="input"
            />
            <input
              type="text"
              placeholder="Регистр. номер самолёта"
              className="input"
            />
            <input
              type="text"
              placeholder="Дата и время проведения"
              className="input"
            />
            <input
              type="text"
              placeholder="Результат проведения"
              className="input"
            />
            <button
              type="button"
              className="adm-pretrip-maintenance-button4 button"
            >
              <span>Изменить</span>
            </button>
            <button
              type="button"
              className="adm-pretrip-maintenance-button5 button"
            >
              <span>Удалить</span>
            </button>
            <span className="adm-pretrip-maintenance-text26">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmPretripMaintenance.defaultProps = {
  rootClassName: '',
}

AdmPretripMaintenance.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmPretripMaintenance
