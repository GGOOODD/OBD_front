import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-pretrip-maintenance.css'

const ElemPretripMaintenance = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}}
      className={`elem-pretrip-maintenance-container${props.id == 0 ? 10 : 11}`}
    >
      <div className="elem-pretrip-maintenance-container2">
        <span className="elem-pretrip-maintenance-text10">
          Название вида обслуживания:
        </span>
        <span className="elem-pretrip-maintenance-text11">
          {props.maintenanceModelName ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text26">
                maintenanceModelName
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container3">
        <span className="elem-pretrip-maintenance-text12">
          Фамилия сотрудника:
        </span>
        <span className="elem-pretrip-maintenance-text13">
          {props.surname ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text29">surname</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container4">
        <span className="elem-pretrip-maintenance-text14">Имя сотрудника:</span>
        <span className="elem-pretrip-maintenance-text15">
          {props.name ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text28">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container5">
        <span className="elem-pretrip-maintenance-text16">
          Отчество сотрудника:
        </span>
        <span className="elem-pretrip-maintenance-text17">
          {props.patronymic ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text30">
                patronymic
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container6">
        <span className="elem-pretrip-maintenance-text18">
          Регистрационный номер самолёта:
        </span>
        <span className="elem-pretrip-maintenance-text19">
          {props.registrationNumber ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text24">
                registrationNumber
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container7">
        <span className="elem-pretrip-maintenance-text20">
          Дата и время проведения:
        </span>
        <span className="elem-pretrip-maintenance-text21">
          {props.datetime ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text27">datetime</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-pretrip-maintenance-container8">
        <span className="elem-pretrip-maintenance-text22">
          Результат проведения:
        </span>
        <span className="elem-pretrip-maintenance-text23">
          {props.result ?? (
            <Fragment>
              <span className="elem-pretrip-maintenance-text25">result</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemPretripMaintenance.defaultProps = {
  registrationNumber: undefined,
  rootClassName: '',
  result: undefined,
  maintenanceModelName: undefined,
  datetime: undefined,
  name: undefined,
  surname: undefined,
  patronymic: undefined,
}

ElemPretripMaintenance.propTypes = {
  registrationNumber: PropTypes.element,
  rootClassName: PropTypes.string,
  result: PropTypes.element,
  maintenanceModelName: PropTypes.element,
  datetime: PropTypes.element,
  name: PropTypes.element,
  surname: PropTypes.element,
  patronymic: PropTypes.element,
}

export default ElemPretripMaintenance
