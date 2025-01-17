import React, { Fragment, useState, useEffect } from 'react'

import ElemCountry from './elem-country'
import './adm-country.css'

const AdmCountry = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchCountry = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_country", requestOptions)
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
    fetchCountry();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const geocodestr = document.getElementById("geocode").value
    let dict = {"name": namestr, "geocode": geocodestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_country", requestOptions)
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
    const geocodestr = document.getElementById("geocode").value
    let dict = {"name": namestr, "geocode": geocodestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_country/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_country/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }
/*
<button type="button" className="adm-country-button1 button">
  <span>Загрузить данные</span>
</button>

<button type="button" className="adm-country-button2 button">
  <span>Найти</span>
</button>
*/
  return (
    <div className="adm-country-container1">
      <span className="adm-country-text10">Страна</span>
      <div className="adm-country-container2">
        <div className="adm-country-container3">
          <div className="adm-country-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-country-container5">
          {filteredItems.map((item) => (
            <ElemCountry setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-country-text13">{item["name"]}</span>
                </Fragment>
              }
              geocode={
                <Fragment>
                  <span className="adm-country-text14">{item["geocode"]}</span>
                </Fragment>
              }
            ></ElemCountry>
          ))}
          </div>
        </div>
        <div className="adm-country-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <input type="text" id="geocode" placeholder="Геокод" className="input" />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-country-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-country-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-country-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-country-text16"></span>
        </div>
      </div>
    </div>
  )
}

export default AdmCountry
