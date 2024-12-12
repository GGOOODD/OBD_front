import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemName from './elem-name'
import './adm-scheduled-flight-model.css'

const AdmScheduledFlightModel = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchScheduledFlightModel = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_scheduled_flight_model")
    const elems = await response.json()
    setItems(elems)
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredItems = items.filter(item =>
    item["name"].toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetchScheduledFlightModel();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    let dict = {"name": namestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_scheduled_flight_model", requestOptions)
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
    const namestr = document.getElementById("name").value
    let dict = {"name": namestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_scheduled_flight_model/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_scheduled_flight_model/${choose}`, requestOptions)
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
      className={`adm-scheduled-flight-model-container1 ${props.rootClassName} `}
    >
      <span className="adm-scheduled-flight-model-text10">
        <span>Тип назначенного рейса</span>
        <br></br>
      </span>
      <div className="adm-scheduled-flight-model-container2">
        <div className="adm-scheduled-flight-model-container3">
          <div className="adm-scheduled-flight-model-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-scheduled-flight-model-container5">
          {filteredItems.map((item) => (
            <ElemName setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-scheduled-flight-model-text15">
                    {item["name"]}
                  </span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name2"
            ></ElemName>
          ))}
          </div>
        </div>
        <div className="adm-scheduled-flight-model-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          {choose == 0 ?
          <button
            type="button"
            onClick={createField}
            className="adm-scheduled-flight-model-button3 button"
          >
            <span>Создать</span>
          </button>
          :
          <>
          <button
            type="button"
            onClick={updateField}
            className="adm-scheduled-flight-model-button4 button"
          >
            <span>Изменить</span>
          </button>
          <button
            type="button"
            onClick={deleteField}
            className="adm-scheduled-flight-model-button5 button"
          >
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-scheduled-flight-model-text20"></span>
        </div>
      </div>
    </div>
  )
}

AdmScheduledFlightModel.defaultProps = {
  rootClassName: '',
}

AdmScheduledFlightModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmScheduledFlightModel
