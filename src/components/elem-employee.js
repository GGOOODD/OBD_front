import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-employee.css'

const ElemEmployee = (props) => {
  return (
    <div className={`elem-employee-container1 ${props.rootClassName} `}>
      <div className="elem-employee-container2">
        <span className="elem-employee-text10">Должность:</span>
        <span className="elem-employee-text11">
          {props.jobTitle ?? (
            <Fragment>
              <span className="elem-employee-text22">jobTitle</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-employee-container3">
        <span className="elem-employee-text12">Фамилия:</span>
        <span className="elem-employee-text13">
          {props.surname ?? (
            <Fragment>
              <span className="elem-employee-text24">surname</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-employee-container4">
        <span className="elem-employee-text14">Имя:</span>
        <span className="elem-employee-text15">
          {props.name ?? (
            <Fragment>
              <span className="elem-employee-text23">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-employee-container5">
        <span className="elem-employee-text16">Отчество:</span>
        <span className="elem-employee-text17">
          {props.patronymic ?? (
            <Fragment>
              <span className="elem-employee-text21">patronymic</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-employee-container6">
        <span className="elem-employee-text18">Стаж:</span>
        <span className="elem-employee-text19">
          {props.experience ?? (
            <Fragment>
              <span className="elem-employee-text20">experience</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemEmployee.defaultProps = {
  experience: undefined,
  patronymic: undefined,
  jobTitle: undefined,
  rootClassName: '',
  name: undefined,
  surname: undefined,
}

ElemEmployee.propTypes = {
  experience: PropTypes.element,
  patronymic: PropTypes.element,
  jobTitle: PropTypes.element,
  rootClassName: PropTypes.string,
  name: PropTypes.element,
  surname: PropTypes.element,
}

export default ElemEmployee
