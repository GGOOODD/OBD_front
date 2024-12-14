import React, { Fragment, useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import PersAccount from '../components/pers-account'
import Registr from '../components/registr'
import Auth from '../components/auth'
import AdmAccount from '../components/adm-account'
import './user.css'

const User = (props) => {
  const [window, setWindow] = useState();

  const fetchWindow = async () => {
    const cookie = Cookies.get('token')
    if (cookie === undefined)
      setWindow(<Auth setWindow={setWindow}></Auth>)
    else
    {
      const requestOptions = {
        method: "GET",
        credentials: 'include'
      }
      const response = await fetch("http://localhost:8000/api/user/check_user_admin", requestOptions)
      const fetchInfo = await response.json();
      if (fetchInfo["admin"])
        setWindow(<AdmAccount></AdmAccount>)
      else
        setWindow(<PersAccount></PersAccount>)
    }
      
  }

  useEffect(() => {
    fetchWindow();
  }, []);

  /*
  <PersAccount></PersAccount>
  <Registr></Registr>
  <Auth></Auth>
  <AdmAccount></AdmAccount>
  */

  return (
    <div className="user-container1">
      <Helmet>
        <title>User - Airport</title>
        <meta property="og:title" content="User - Airport" />
      </Helmet>
      <div className="user-container2">
        <Menu></Menu>
        {window}
      </div>
    </div>
  )
}

export default User
