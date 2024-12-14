import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemAirplaneModel from './elem-airplane-model'
import './adm-airplane-model.css'

const AdmAirplaneModel = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchAirplaneModel = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_airplane_model", requestOptions)
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
    fetchAirplaneModel();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const capacitystr = document.getElementById("capacity").value
    let dict = {"name": namestr, "capacity": capacitystr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_airplane_model", requestOptions)
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
    const capacitystr = document.getElementById("capacity").value
    let dict = {"name": namestr, "capacity": capacitystr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_airplane_model/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_airplane_model/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-airplane-model-container1 ${props.rootClassName} `}>
      <span className="adm-airplane-model-text10">
        <span>Модель самолёта</span>
        <br></br>
      </span>
      <div className="adm-airplane-model-container2">
        <div className="adm-airplane-model-container3">
          <div className="adm-airplane-model-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-airplane-model-container5">
          {filteredItems.map((item) => (
            <ElemAirplaneModel setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              capacity={
                <Fragment>
                  <span className="adm-airplane-model-text15">{item["capacity"]}</span>
                </Fragment>
              }
              rootClassName="elem-airplane-modelroot-class-name"
              airplaneModelName={
                <Fragment>
                  <span className="adm-airplane-model-text16">
                  {item["name"]}
                  </span>
                </Fragment>
              }
            ></ElemAirplaneModel>
          ))}
          </div>
        </div>
        <div className="adm-airplane-model-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <input type="text" id="capacity" placeholder="Вместимость, тонн" className="input" />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-airplane-model-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-airplane-model-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-airplane-model-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-airplane-model-text21"></span>
        </div>
      </div>
    </div>
  )
}

AdmAirplaneModel.defaultProps = {
  rootClassName: '',
}

AdmAirplaneModel.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirplaneModel
