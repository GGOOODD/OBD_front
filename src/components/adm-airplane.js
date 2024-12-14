import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemAirplane from './elem-airplane'
import './adm-airplane.css'

const AdmAirplane = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchAirplane = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_airplane", requestOptions)
    const elems = await response.json()
    setItems(elems)
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredItems = items.filter(item =>
    item["airplaneModelName"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item["registrationNumber"].toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetchAirplane();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const airplaneModelNamestr = document.getElementById("airplaneModelName").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    let dict = {"airplaneModelName": airplaneModelNamestr, "registrationNumber": registrationNumberstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_airplane", requestOptions)
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
    const airplaneModelNamestr = document.getElementById("airplaneModelName").value
    const registrationNumberstr = document.getElementById("registrationNumber").value
    let dict = {"airplaneModelName": airplaneModelNamestr, "registrationNumber": registrationNumberstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_airplane/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_airplane/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-airplane-container1 ${props.rootClassName} `}>
      <span className="adm-airplane-text10">
        <span>Самолёт</span>
        <br></br>
      </span>
      <div className="adm-airplane-container2">
        <div className="adm-airplane-container3">
          <div className="adm-airplane-container4">
            <input type="text" onChange={handleSearch} placeholder="Модель/регистр. номер" className="input" />
          </div>
          <div className="adm-airplane-container5">
          {filteredItems.map((item) => (
            <ElemAirplane setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              rootClassName="elem-airplaneroot-class-name"
              airplaneModelName={
                <Fragment>
                  <span className="adm-airplane-text16">{item["airplaneModelName"]}</span>
                </Fragment>
              }
              registrationNumber={
                <Fragment>
                  <span className="adm-airplane-text17">
                  {item["registrationNumber"]}
                  </span>
                </Fragment>
              }
            ></ElemAirplane>
          ))}
          </div>
        </div>
        <div className="adm-airplane-container6">
          <input
            type="text"
            id="airplaneModelName"
            placeholder="Назв. модели самолёта"
            className="input"
          />
          <input
            type="text"
            id="registrationNumber"
            placeholder="Регистрационный номер"
            className="input"
          />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-airplane-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-airplane-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-airplane-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-airplane-text22"></span>
        </div>
      </div>
    </div>
  )
}

AdmAirplane.defaultProps = {
  rootClassName: '',
}

AdmAirplane.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirplane
