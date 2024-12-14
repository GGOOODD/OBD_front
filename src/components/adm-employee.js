import React, { Fragment, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import ElemEmployee from './elem-employee'
import './adm-employee.css'

const AdmEmployee = (props) => {
  const [searchTermSurname, setSearchTermSurname] = useState('')
  const [searchTermName, setSearchTermName] = useState('')
  const [searchTermPatronymic, setSearchTermPatronymic] = useState('')
  const [items, setItems] = useState([])
  const [choose, setChoose] = useState(0)

  const fetchEmployee = async () => {
    const requestOptions = {
      method: "GET",
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/get_all_employee", requestOptions)
    const elems = await response.json()
    setItems(elems)
  }
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
    item["surname"].toLowerCase().includes(searchTermSurname.toLowerCase()) &&
    item["name"].toLowerCase().includes(searchTermName.toLowerCase()) &&
    item["patronymic"].toLowerCase().includes(searchTermPatronymic.toLowerCase())
  )

  useEffect(() => {
    fetchEmployee();
  }, [])

  const createField = async () => {
    var errorStr = document.getElementById("error")
    errorStr.textContent = ""
    const jobTitleNamestr = document.getElementById("jobTitleName").value
    const namestr = document.getElementById("name").value
    const surnamestr = document.getElementById("surname").value
    const patronymicstr = document.getElementById("patronymic").value
    const experiencestr = document.getElementById("experience").value
    let dict = {"jobTitleName": jobTitleNamestr, "name": namestr, "surname": surnamestr, "patronymic": patronymicstr, "experience": experiencestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    const response = await fetch("http://localhost:8000/api/classifier/create_employee", requestOptions)
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
    const jobTitleNamestr = document.getElementById("jobTitleName").value
    const namestr = document.getElementById("name").value
    const surnamestr = document.getElementById("surname").value
    const patronymicstr = document.getElementById("patronymic").value
    const experiencestr = document.getElementById("experience").value
    let dict = {"jobTitleName": jobTitleNamestr, "name": namestr, "surname": surnamestr, "patronymic": patronymicstr, "experience": experiencestr}
    for (const [key, value] of Object.entries(dict))
      if (value == "")
        return
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dict),
      credentials: 'include'
    }
    var response = await fetch(`http://localhost:8000/api/classifier/update_employee/${choose}`, requestOptions)
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
    var response = await fetch(`http://localhost:8000/api/classifier/delete_employee/${choose}`, requestOptions)
    var fetchInfo = await response.json();
    if (response.ok)
    {
      var newItems = items.filter(item => item["id"] != choose)
      setChoose(0)
      setItems(newItems)
    }
  }

  return (
    <div className={`adm-employee-container1 ${props.rootClassName} `}>
      <span className="adm-employee-text10">
        <span>Сотрудник</span>
        <br></br>
      </span>
      <div className="adm-employee-container2">
        <div className="adm-employee-container3">
          <div className="adm-employee-container4">
            <input type="text" onChange={handleSearchSurname} placeholder="Фамилия" className="input"/>
            <input type="text" onChange={handleSearchName} placeholder="Имя" className="input"/>
            <input type="text" onChange={handleSearchPatronymic} placeholder="Отчество" className="input"/>
          </div>
          <div className="adm-employee-container5">
          {filteredItems.map((item) => (
            <ElemEmployee setChoose={setChoose}
              key={item["id"]}
              id={choose == item["id"] ? 0 : item["id"]}
              name={
                <Fragment>
                  <span className="adm-employee-text15">{item["name"]}</span>
                </Fragment>
              }
              surname={
                <Fragment>
                  <span className="adm-employee-text16">{item["surname"]}</span>
                </Fragment>
              }
              jobTitle={
                <Fragment>
                  <span className="adm-employee-text17">{item["jobTitleName"]}</span>
                </Fragment>
              }
              experience={
                <Fragment>
                  <span className="adm-employee-text18">{item["experience"]}</span>
                </Fragment>
              }
              patronymic={
                <Fragment>
                  <span className="adm-employee-text19">{item["patronymic"]}</span>
                </Fragment>
              }
              rootClassName="elem-employeeroot-class-name"
            ></ElemEmployee>
          ))}
          </div>
        </div>
        <div className="adm-employee-container6">
          <input type="text" id="jobTitleName" placeholder="Должность" className="input" />
          <input type="text" id="surname" placeholder="Фамилия" className="input" />
          <input type="text" id="name" placeholder="Имя" className="input" />
          <input type="text" id="patronymic" placeholder="Отчество" className="input" />
          <input type="text" id="experience" placeholder="Стаж" className="input" />
          {choose == 0 ?
          <button type="button" onClick={createField} className="adm-employee-button3 button">
            <span>Создать</span>
          </button>
          :
          <>
          <button type="button" onClick={updateField} className="adm-employee-button4 button">
            <span>Изменить</span>
          </button>
          <button type="button" onClick={deleteField} className="adm-employee-button5 button">
            <span>Удалить</span>
          </button>
          </>
          }
          <span id="error" className="adm-employee-text24"></span>
        </div>
      </div>
    </div>
  )
}

AdmEmployee.defaultProps = {
  rootClassName: '',
}

AdmEmployee.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdmEmployee
