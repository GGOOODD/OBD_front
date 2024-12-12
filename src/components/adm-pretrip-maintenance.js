import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemPretripMaintenance from './elem-pretrip-maintenance'
import './adm-pretrip-maintenance.css'

const AdmPretripMaintenance = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchPretripMaintenance = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_pretrip_maintenance")
    const elems = await response.json()
    setItems(elems)
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredItems = items.filter(item =>
    item["registrationNumber"].toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetchPretripMaintenance();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const maintenanceModelNamestr = document.getElementById("maintenanceModelName").value
    const surnamestr = document.getElementById("surname").value
    const namestr = document.getElementById("name").value
    const patronymicstr = document.getElementById("patronymic").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    const datetimestr = document.getElementById("datetime").value
    const resultstr = document.getElementById("result").value
    let dict = {"maintenanceModelName": maintenanceModelNamestr, "surname": surnamestr, "name": namestr, "patronymic": patronymicstr,
      "registrationNumber": registrationNumberstr, "datetime": datetimestr, "result": resultstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_pretrip_maintenance", requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = structuredClone(items)
      newItems[newItems.length] = dict
      newItems[newItems.length-1]["id"] = fetchInfo["field_id"]
      setItems(newItems)
    }
    else
    {
      if (typeof fetchInfo["detail"] === "string")
        errorStr.textContent = fetchInfo["detail"]
      else
        errorStr.textContent = "Превышина длина полей"
    }
  }

  const updateField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const maintenanceModelNamestr = document.getElementById("maintenanceModelName").value
    const surnamestr = document.getElementById("surname").value
    const namestr = document.getElementById("name").value
    const patronymicstr = document.getElementById("patronymic").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    const datetimestr = document.getElementById("datetime").value
    const resultstr = document.getElementById("result").value
    let dict = {"maintenanceModelName": maintenanceModelNamestr, "surname": surnamestr, "name": namestr, "patronymic": patronymicstr,
      "registrationNumber": registrationNumberstr, "datetime": datetimestr, "result": resultstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_pretrip_maintenance/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      const newItems = items.map(item => 
        item.id === choose ? { ...item, ...dict } : item
      )
      setItems(newItems)
    }
    else
    {
      if (typeof fetchInfo["detail"] === "string")
        errorStr.textContent = fetchInfo["detail"]
      else
        errorStr.textContent = "Превышина длина полей"
    }
  }

  const deleteField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const requestOptions = {
      method: "DELETE",
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/delete_pretrip_maintenance/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

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
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Регистр. номер самолёта"
              className="input"
            />
          </div>
          <div className="adm-pretrip-maintenance-container5">
          {filteredItems.map((item) => (
            <ElemPretripMaintenance setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text15">{item["name"]}</span>
                </Fragment>
              }
              result={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text16">{item["result"]}</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text17">
                  {item["surname"]}
                  </span>
                </Fragment>
              }
              datetime={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text18">
                  {item["datetime"]}
                  </span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text19">
                  {item["patronymic"]}
                  </span>
                </Fragment>
              }
              rootClassName="elem-pretrip-maintenanceroot-class-name"
              registrationNumber={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text20">
                  {item["registrationNumber"]}
                  </span>
                </Fragment>
              }
              maintenanceModelName={
                <Fragment>
                  <span className="adm-pretrip-maintenance-text21">
                  {item["maintenanceModelName"]}
                  </span>
                </Fragment>
              }
            ></ElemPretripMaintenance>
          ))}
          </div>
        </div>
        <div className="adm-pretrip-maintenance-container6">
          <input
            type="text"
            id="maintenanceModelName"
            placeholder="Назв. вида обслуживания"
            className="input"
          />
          <input
            type="text"
            id="surname"
            placeholder="Фамилия сотрудника"
            className="input"
          />
          <input type="text" id="name" placeholder="Имя сотрудника" className="input" />
          <input
            type="text"
            id="patronymic"
            placeholder="Отчество сотрудника"
            className="input"
          />
          <input
            type="text"
            id="registrationNumber"
            placeholder="Регистр. номер самолёта"
            className="input"
          />
          <input
            type="text"
            id="datetime"
            placeholder="Дата и время проведения"
            className="input"
          />
          <input
            type="text"
            id="result"
            placeholder="Результат проведения"
            className="input"
          />
          {choose == 0 ?
          <button
            type="button"
            onClick={createField}
            className="adm-pretrip-maintenance-button3 button"
          >
            <span>Создать</span>
          </button>
          :
          <>
          <button
            type="button"
            onClick={updateField}
            className="adm-pretrip-maintenance-button4 button"
          >
            <span>Изменить</span>
          </button>
          <button
            type="button"
            onClick={deleteField}
            className="adm-pretrip-maintenance-button5 button"
          >
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-pretrip-maintenance-text26"></span>
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
