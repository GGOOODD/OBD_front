import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemScheduledFlight from './elem-scheduled-flight'
import ElemEmployee from './elem-employee'
import './adm-scheduled-flight.css'

const AdmScheduledFlight = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTermSurname, setSearchTermSurname] = useState('')
  const [searchTermName, setSearchTermName] = useState('')
  const [searchTermPatronymic, setSearchTermPatronymic] = useState('')
  
  const [items, setItems] = useState([])
  const [itemsEmployee, setItemsEmployee] = useState([])

  const [choose, setChoose] = useState(0)
  const [chooseEmployee, setChooseEmployee] = useState([])

  const fetchScheduledFlight = async () => {
    var response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_scheduled_flight")
    var elems = await response.json()
    setItems(elems)
    response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_employee")
    elems = await response.json()
    setItemsEmployee(elems)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };
  const handleSearchSurname = (e) => {
    setSearchTermSurname(e.target.value)
  };
  const handleSearchName = (e) => {
    setSearchTermName(e.target.value)
  };
  const handleSearchPatronymic = (e) => {
    setSearchTermPatronymic(e.target.value)
  };

  const filteredItems = items.filter(item =>
    item["airportName"].toLowerCase().includes(searchTerm.toLowerCase())
  )
  const filteredItemsEmployee = itemsEmployee.filter(item =>
    item["surname"].toLowerCase().includes(searchTermSurname.toLowerCase()) &&
    item["name"].toLowerCase().includes(searchTermName.toLowerCase()) &&
    item["patronymic"].toLowerCase().includes(searchTermPatronymic.toLowerCase())
  )

  useEffect(() => {
    fetchScheduledFlight();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const airlineNamestr = document.getElementById("airlineName").value
    const airportNamestr = document.getElementById("airportName").value
    const datetimeDeparturestr = document.getElementById("datetimeDeparture").value
    const datetimeArrivalstr = document.getElementById("datetimeArrival").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    const scheduledFlightModelNamestr = document.getElementById("scheduledFlightModelName").value
    let dict = {"airlineName": airlineNamestr, "airportName": airportNamestr, "datetimeDeparture": datetimeDeparturestr,
      "datetimeArrival": datetimeArrivalstr, "registrationNumber": registrationNumberstr,
      "scheduledFlightModelName": scheduledFlightModelNamestr, "crew": chooseEmployee}
    for (const [key, value] of Object.entries(dict))
      if (value == "" || (Array.isArray(value) && value.length === 0))
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_scheduled_flight", requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      dict["crew"] = itemsEmployee.filter(item => chooseEmployee.includes(item["id"]))
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
    const airlineNamestr = document.getElementById("airlineName").value
    const airportNamestr = document.getElementById("airportName").value
    const datetimeDeparturestr = document.getElementById("datetimeDeparture").value
    const datetimeArrivalstr = document.getElementById("datetimeArrival").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    const scheduledFlightModelNamestr = document.getElementById("scheduledFlightModelName").value
    let dict = {"airlineName": airlineNamestr, "airportName": airportNamestr, "datetimeDeparture": datetimeDeparturestr,
      "datetimeArrival": datetimeArrivalstr, "registrationNumber": registrationNumberstr,
      "scheduledFlightModelName": scheduledFlightModelNamestr, "crew": chooseEmployee}
    for (const [key, value] of Object.entries(dict))
      if (value == "" || (Array.isArray(value) && value.length === 0))
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_scheduled_flight/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      dict["crew"] = itemsEmployee.filter(item => chooseEmployee.includes(item["id"]))
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_scheduled_flight/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    } else
    {
      if (typeof fetchInfo["detail"] === "string")
        errorStr.textContent = fetchInfo["detail"]
      else
        errorStr.textContent = "Произошла ошибка, возможно запись уже удалена"
    }
  }

  return (
    <div className={`adm-scheduled-flight-container10 ${props.rootClassName} `}>
      <span className="adm-scheduled-flight-text10">
        <span>Назначенный рейс</span>
        <br></br>
      </span>
      <div className="adm-scheduled-flight-container11">
        <div className="adm-scheduled-flight-container12">
          <div className="adm-scheduled-flight-container13">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Название аэропорта"
              className="input"
            />
          </div>
          <div className="adm-scheduled-flight-container14">
          {filteredItems.map((item) => (
            <ElemScheduledFlight setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              airlineName={
                <Fragment>
                  <span className="adm-scheduled-flight-text15">
                    {item["airlineName"]}
                  </span>
                </Fragment>
              }
              airportName={
                <Fragment>
                  <span className="adm-scheduled-flight-text16">
                  {item["airportName"]}
                  </span>
                </Fragment>
              }
              rootClassName="elem-scheduled-flightroot-class-name"
              datetimeArrival={
                <Fragment>
                  <span className="adm-scheduled-flight-text17">
                  {item["datetimeArrival"]}
                  </span>
                </Fragment>
              }
              datetimeDeparture={
                <Fragment>
                  <span className="adm-scheduled-flight-text18">
                  {item["datetimeDeparture"]}
                  </span>
                </Fragment>
              }
              registrationNumber={
                <Fragment>
                  <span className="adm-scheduled-flight-text19">
                  {item["registrationNumber"]}
                  </span>
                </Fragment>
              }
              scheduledFlightModelName={
                <Fragment>
                  <span className="adm-scheduled-flight-text20">
                  {item["scheduledFlightModelName"]}
                  </span>
                </Fragment>
              }
              crew={item["crew"]}
            ></ElemScheduledFlight>
          ))}
          </div>
          <span className="adm-scheduled-flight-text21">
            <span className="adm-scheduled-flight-text33">
              Выбрать экипаж:
            </span>
          </span>
          <div className="adm-scheduled-flight-container15">
            <input type="text" onChange={handleSearchSurname} placeholder="Фамилия" className="input" />
            <input type="text" onChange={handleSearchName} placeholder="Имя" className="input" />
            <input type="text" onChange={handleSearchPatronymic} placeholder="Отчество" className="input" />
          </div>
          <div className="adm-scheduled-flight-container16">
          {filteredItemsEmployee.map((item) => (
            <ElemEmployee setChooseEmployee={setChooseEmployee} chooseEmployee={chooseEmployee}
              key={item["id"]}
              id={chooseEmployee.includes(item["id"]) ? 0 : item["id"]}
              real_id={item["id"]}
              name={
                <Fragment>
                  <span className="adm-scheduled-flight-text23">{item["name"]}</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-scheduled-flight-text24">{item["surname"]}</span>
                </Fragment>
              }
              jobTitle={
                <Fragment>
                  <span className="adm-scheduled-flight-text25">{item["jobTitleName"]}</span>
                </Fragment>
              }
              experience={
                <Fragment>
                  <span className="adm-scheduled-flight-text26">
                  {item["experience"]}
                  </span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-scheduled-flight-text27">
                  {item["patronymic"]}
                  </span>
                </Fragment>
              }
              rootClassName="elem-employeeroot-class-name1"
            ></ElemEmployee>
          ))}
          </div>
        </div>
        <div className="adm-scheduled-flight-container17">
          <input
            type="text"
            id="airlineName"
            placeholder="Название авиакомпании"
            className="input"
          />
          <input
            type="text"
            id="airportName"
            placeholder="Название аэропорта"
            className="input"
          />
          <input
            type="text"
            id="datetimeDeparture"
            placeholder="Дата и время отлёта"
            className="input"
          />
          <input
            type="text"
            id="datetimeArrival"
            placeholder="Дата и время прилёта"
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
            id="scheduledFlightModelName"
            placeholder="Тип назначенного рейса"
            className="input"
          />
          {choose == 0 ?
          <button
            type="button"
            onClick={createField}
            className="adm-scheduled-flight-button4 button"
          >
            <span>Создать</span>
          </button>
          :
          <>
          <button
            type="button"
            onClick={updateField}
            className="adm-scheduled-flight-button5 button"
          >
            <span>Изменить</span>
          </button>
          <button
            type="button"
            onClick={deleteField}
            className="adm-scheduled-flight-button6 button"
          >
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-scheduled-flight-text32"></span>
        </div>
      </div>
    </div>
  )
}

AdmScheduledFlight.defaultProps = {
  text: undefined,
  rootClassName: '',
}

AdmScheduledFlight.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AdmScheduledFlight
