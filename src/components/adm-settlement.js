import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import ElemSettlement from './elem-settlement'
import './adm-settlement.css'

const AdmSettlement = (props) => {
  return (
    <div className={`adm-settlement-container1 ${props.rootClassName} `}>
      <span className="adm-settlement-text10">Населённый пункт</span>
      <div className="adm-settlement-container2">
        <div className="adm-settlement-container3">
          <div className="adm-settlement-container4">
            <button type="button" className="adm-settlement-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-settlement-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-settlement-container5">
            <ElemSettlement
              name={
                <Fragment>
                  <span className="adm-settlement-text13">name</span>
                </Fragment>
              }
              countryName={
                <Fragment>
                  <span className="adm-settlement-text14">countryName</span>
                </Fragment>
              }
              rootClassName="elem-settlementroot-class-name"
              settlementType={
                <Fragment>
                  <span className="adm-settlement-text15">settlementType</span>
                </Fragment>
              }
            ></ElemSettlement>
          </div>
        </div>
        <div className="adm-settlement-container6">
          <div className="adm-settlement-container7">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Название страны"
              className="input"
            />
            <input
              type="text"
              placeholder="Тип населённого пункта"
              className="input"
            />
            <button type="button" className="adm-settlement-button3 button">
              <span>Создать</span>
            </button>
            <span className="adm-settlement-text17">Error</span>
          </div>
          <div className="adm-settlement-container8">
            <input type="text" placeholder="Название" className="input" />
            <input
              type="text"
              placeholder="Название страны"
              className="input"
            />
            <input
              type="text"
              placeholder="Тип населённого пункта"
              className="input"
            />
            <button type="button" className="adm-settlement-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-settlement-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-settlement-text20">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AdmSettlement.defaultProps = {
  rootClassName: '',
}

AdmSettlement.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmSettlement
