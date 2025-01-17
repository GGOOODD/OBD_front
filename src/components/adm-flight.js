import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemFlight from './elem-flight'
import './adm-flight.css'

const AdmFlight = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchFlight = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_flight", requestOptions)
    const elems = await response.json()
    setItems(elems)
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredItems = items.filter(item =>
    item["airlineName"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item["airportName"].toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetchFlight();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const airlineNamestr = document.getElementById("airlineName").value
    const airportNamestr = document.getElementById("airportName").value
    let dict = {"airlineName": airlineNamestr, "airportName": airportNamestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_flight", requestOptions)
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
    const airlineNamestr = document.getElementById("airlineName").value
    const airportNamestr = document.getElementById("airportName").value
    let dict = {"airlineName": airlineNamestr, "airportName": airportNamestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_flight/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_flight/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-flight-container1 ${props.rootClassName} `}>
      <span className="adm-flight-text10">
        <span>Рейс</span>
        <br></br>
      </span>
      <div className="adm-flight-container2">
        <div className="adm-flight-container3">
          <div className="adm-flight-container4">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Назв. авиакомп./аэропорта"
              className="input"
            />
          </div>
          <div className="adm-flight-container5">
          {filteredItems.map((item) => (
            <ElemFlight setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              airlineName={
                <Fragment>
                  <span className="adm-flight-text15">{item["airlineName"]}</span>
                </Fragment>
              }
              airportName={
                <Fragment>
                  <span className="adm-flight-text16">{item["airportName"]}</span>
                </Fragment>
              }
              rootClassName="elem-flightroot-class-name"
            ></ElemFlight>
          ))}
          </div>
        </div>
        <div className="adm-flight-container6">
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
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-flight-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-flight-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-flight-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-flight-text21"></span>
        </div>
      </div>
    </div>
  )
}

AdmFlight.defaultProps = {
  rootClassName: '',
}

AdmFlight.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmFlight
