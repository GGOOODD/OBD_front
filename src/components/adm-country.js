import React, { Fragment } from 'react'

import ElemCountry from './elem-country'
import './adm-country.css'

const AdmCountry = (props) => {
  return (
    <div className="adm-country-container1">
      <span className="adm-country-text10">СтранА</span>
      <div className="adm-country-container2">
        <div className="adm-country-container3">
          <div className="adm-country-container4">
            <button type="button" className="adm-country-button1 button">
              <span>Загрузить данные</span>
            </button>
            <input type="text" placeholder="Название" className="input" />
            <button type="button" className="adm-country-button2 button">
              <span>Найти</span>
            </button>
          </div>
          <div className="adm-country-container5">
            <ElemCountry
              name={
                <Fragment>
                  <span className="adm-country-text13">Text</span>
                </Fragment>
              }
              geocode={
                <Fragment>
                  <span className="adm-country-text14">Text</span>
                </Fragment>
              }
            ></ElemCountry>
          </div>
        </div>
        <div className="adm-country-container6">
          <div className="adm-country-container7">
            <input type="text" placeholder="Название" className="input" />
            <input type="text" placeholder="Геокод" className="input" />
            <button type="button" className="adm-country-button3 button">
              <span>Создать</span>
            </button>
          </div>
          <span className="adm-country-text16">Error</span>
          <div className="adm-country-container8">
            <input type="text" placeholder="Название" className="input" />
            <input type="text" placeholder="Геокод" className="input" />
            <button type="button" className="adm-country-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" className="adm-country-button5 button">
              <span>Удалить</span>
            </button>
            <span className="adm-country-text19">Error</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmCountry
