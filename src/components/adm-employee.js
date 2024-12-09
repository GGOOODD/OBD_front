import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemEmployee from './elem-employee'
import './adm-employee.css'

const AdmEmployee = (props) => {
  return (
    <div className={`adm-employee-container1 ${props.rootClassName} `}>
      <span className="adm-employee-text10">
        <span>Сотрудник</span>
        <br></br>
      </span>
      <div className="adm-employee-container2">
        <div className="adm-employee-container3">
          <div className="adm-employee-container4">
            <button type="button" className="adm-employee-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="ФИО" className="input" />
            <button type="button" className="adm-employee-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-employee-container5">
            <ElemEmployee
              name={
                <Fragment>
                  <span className="adm-employee-text15">name</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-employee-text16">surname</span>
                </Fragment>
              }
              jobTitle={
                <Fragment>
                  <span className="adm-employee-text17">jobTitle</span>
                </Fragment>
              }
              experience={
                <Fragment>
                  <span className="adm-employee-text18">experience</span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-employee-text19">patronymic</span>
                </Fragment>
              }
              rootClassName="elem-employeeroot-class-name"
            ></ElemEmployee>
          </div>
        </div>
        <div className="adm-employee-container6">
          <div className="adm-employee-container7">
            <input type="text" placeholder="Должность" className="input" />
            <input type="text" placeholder="Фамилия" className="input" />
            <input type="text" placeholder="Имя" className="input" />
            <input type="text" placeholder="Отчество" className="input" />
            <input type="text" placeholder="Стаж" className="input" />
            <button type="button" className="adm-employee-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-employee-text21">Error</span>
          </div>
          <div className="adm-employee-container8">
            <input type="text" placeholder="Должность" className="input" />
            <input type="text" placeholder="Фамилия" className="input" />
            <input type="text" placeholder="Имя" className="input" />
            <input type="text" placeholder="Отчество" className="input" />
            <input type="text" placeholder="Стаж" className="input" />
            <button type="button" className="adm-employee-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-employee-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-employee-text24">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmEmployee.defaultProps = {
  rootClassName: '',
}

AdmEmployee.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmEmployee
