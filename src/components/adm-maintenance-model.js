import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemMaintenanceModel from './elem-maintenance-model'
import './adm-maintenance-model.css'

const AdmMaintenanceModel = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchMaintenanceModel = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_maintenance_model", requestOptions)
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
    fetchMaintenanceModel();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const descriptionstr = document.getElementById("description").value
    let dict = {"name": namestr, "description": descriptionstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_maintenance_model", requestOptions)
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
    const descriptionstr = document.getElementById("description").value
    let dict = {"name": namestr, "description": descriptionstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_maintenance_model/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_maintenance_model/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-maintenance-model-container1 ${props.rootClassName} `}>
      <span className="adm-maintenance-model-text10">
        <span>Вид обслуживания самолётов</span>
        <br></br>
      </span>
      <div className="adm-maintenance-model-container2">
        <div className="adm-maintenance-model-container3">
          <div className="adm-maintenance-model-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-maintenance-model-container5">
          {filteredItems.map((item) => (
            <ElemMaintenanceModel setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              description={
                <Fragment>
                  <span className="adm-maintenance-model-text15">
                    {item["description"]}
                  </span>
                </Fragment>
              }
              name={
                <Fragment>
                  <span className="adm-maintenance-model-text16">
                  {item["name"]}
                  </span>
                </Fragment>
              }
              rootClassName="elem-maintenance-modelroot-class-name"
            ></ElemMaintenanceModel>
          ))}
          </div>
        </div>
        <div className="adm-maintenance-model-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <textarea
            id="description"
            placeholder="Описание требований"
            className="adm-maintenance-model-textarea1 textarea"
          ></textarea>
          {choose == 0 ?
          <button
            type="button"
            onClick={createField}
            className="adm-maintenance-model-button3 button"
          >
            <span>Создать</span>
          </button>
          :
          <>
          <button
            type="button"
            onClick={updateField}
            className="adm-maintenance-model-button4 button"
          >
            <span>Изменить</span>
          </button>
          <button
            type="button"
            onClick={deleteField}
            className="adm-maintenance-model-button5 button"
          >
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-maintenance-model-text21"></span>
        </div>
      </div>
    </div>
  )
}

AdmMaintenanceModel.defaultProps = {
  rootClassName: '',
}

AdmMaintenanceModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmMaintenanceModel
