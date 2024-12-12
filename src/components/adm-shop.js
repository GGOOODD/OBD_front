import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemShop from './elem-shop'
import './adm-shop.css'

const AdmShop = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchShop = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_shop")
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
    fetchShop();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const locationstr = document.getElementById("location").value
    let dict = {"name": namestr, "location": locationstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_shop", requestOptions)
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
    const locationstr = document.getElementById("location").value
    let dict = {"name": namestr, "location": locationstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_shop/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_shop/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-shop-container1 ${props.rootClassName} `}>
      <span className="adm-shop-text10">
        <span>Магазин</span>
        <br></br>
      </span>
      <div className="adm-shop-container2">
        <div className="adm-shop-container3">
          <div className="adm-shop-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-shop-container5">
          {filteredItems.map((item) => (
            <ElemShop setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-shop-text15">{item["name"]}</span>
                </Fragment>
              }
              location={
                <Fragment>
                  <span className="adm-shop-text15">{item["location"]}</span>
                </Fragment>
              }
              rootClassName="elem-nameroot-class-name3"
            ></ElemShop>
          ))}
          </div>
        </div>
        <div className="adm-shop-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <input type="text" id="location" placeholder="Местоположение" className="input" />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-shop-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-shop-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-shop-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-shop-text20"></span>
        </div>
      </div>
    </div>
  )
}

AdmShop.defaultProps = {
  rootClassName: '',
}

AdmShop.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmShop
