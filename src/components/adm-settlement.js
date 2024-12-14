import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemSettlement from './elem-settlement'
import './adm-settlement.css'

const AdmSettlement = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [choose, setChoose] = useState(0)

  const fetchSettlement = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_settlement", requestOptions);
    const elems = await response.json();
    setItems(elems);
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item["name"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchSettlement();
  }, []);

  const createField = async () => {
    var errorStr = document.getElementById("error")
    const namestr = document.getElementById("name").value
    const countryNamestr = document.getElementById("countryName").value
    const settlementTypestr = document.getElementById("settlementType").value
    let dict = {"name": namestr, "countryName": countryNamestr, "settlementType": settlementTypestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_settlement", requestOptions)
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
    const countryNamestr = document.getElementById("countryName").value
    const settlementTypestr = document.getElementById("settlementType").value
    let dict = {"name": namestr, "countryName": countryNamestr, "settlementType": settlementTypestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_settlement/${choose}`, requestOptions)
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
    const requestOptions = {
      method: "DELETE",
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/delete_settlement/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }


  return (
    <div className={`adm-settlement-container1 ${props.rootClassName} `}>
      <span className="adm-settlement-text10">Населённый пункт</span>
      <div className="adm-settlement-container2">
        <div className="adm-settlement-container3">
          <div className="adm-settlement-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-settlement-container5">
            {filteredItems.map((item) => (
              <ElemSettlement setChoose={setChoose}
                key={item["id"]}
                id={choose == item["id"] ? 0 : item["id"]}
                name={
                  <Fragment>
                    <span className="adm-settlement-text13">{item["name"]}</span>
                  </Fragment>
                }
                countryName={
                  <Fragment>
                    <span className="adm-settlement-text14">{item["countryName"]}</span>
                  </Fragment>
                }
                rootClassName="elem-settlementroot-class-name"
                settlementType={
                  <Fragment>
                    <span className="adm-settlement-text15">{item["settlementType"]}</span>
                  </Fragment>
                }
              ></ElemSettlement>
            ))}
          </div>
        </div>
        <div className="adm-settlement-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <input
            type="text"
            id="countryName"
            placeholder="Название страны"
            className="input"
          />
          <input
            type="text"
            id="settlementType"
            placeholder="Тип населённого пункта"
            className="input"
          />
          {choose == 0 ?
            <button type="button" onClick={createField} className="adm-settlement-button3 button">
              <span>Создать</span>
            </button>
          :
            <>
            <button type="button" onClick={updateField} className="adm-settlement-button4 button">
              <span>Изменить</span>
            </button>
            <button type="button" onClick={deleteField} className="adm-settlement-button5 button">
              <span>Удалить</span>
            </button>
            </>
          }
          <span id="error" className="adm-settlement-text17"></span>
        </div>
      </div>
    </div>
  )
}

AdmSettlement.defaultProps = {
  rootClassName: '',
}

AdmSettlement.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmSettlement
