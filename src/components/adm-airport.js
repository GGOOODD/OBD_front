import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemAirport from './elem-airport'
import './adm-airport.css'

const AdmAirport = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [choose, setChoose] = useState(0)

  const fetchAirport = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_airport");
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
    fetchAirport();
  }, []);

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const settlementNamestr = document.getElementById("settlementName").value
    const addressstr = document.getElementById("address").value
    let dict = {"name": namestr, "settlementName": settlementNamestr, "address": addressstr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_airport", requestOptions)
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
      errorStr.textContent = "Данные неверно введены"
    }
  }

  const updateField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const namestr = document.getElementById("name").value
    const settlementNamestr = document.getElementById("settlementName").value
    const addressstr = document.getElementById("address").value
    if (namestr == "" || settlementNamestr == "" || addressstr == "")
      return
    let dict = {"name": namestr, "settlementName": settlementNamestr, "address": addressstr}
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_airport/${choose}`, requestOptions)
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
      errorStr.textContent = "Данные неверно введены"
    }
  }

  const deleteField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const requestOptions = {
      method: "DELETE",
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/delete_airport/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-airport-container1 ${props.rootClassName} `}>
      <span className="adm-airport-text10">Аэропорт</span>
      <div className="adm-airport-container2">
        <div className="adm-airport-container3">
          <div className="adm-airport-container4">
            <input type="text" onChange={handleSearch} placeholder="Название" className="input" />
          </div>
          <div className="adm-airport-container5">
          {filteredItems.map((item) => (
            <ElemAirport setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-airport-text13">{item["name"]}</span>
                </Fragment>
              }
              address={
                <Fragment>
                  <span className="adm-airport-text14">{item["address"]}</span>
                </Fragment>
              }
              rootClassName="elem-airportroot-class-name"
              settlementName={
                <Fragment>
                  <span className="adm-airport-text15">{item["settlementName"]}</span>
                </Fragment>
              }
            ></ElemAirport>
          ))}
          </div>
        </div>
        <div className="adm-airport-container6">
          <input type="text" id="name" placeholder="Название" className="input" />
          <input
            type="text"
            id="settlementName"
            placeholder="Название насел. пункта"
            className="input"
          />
          <input
            type="text"
            id="address"
            placeholder="Адрес аэропорта"
            className="input"
          />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-airport-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-airport-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-airport-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-airport-text17"></span>
        </div>
      </div>
    </div>
  )
}

AdmAirport.defaultProps = {
  rootClassName: '',
}

AdmAirport.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmAirport
