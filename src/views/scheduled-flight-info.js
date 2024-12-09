import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import FlightInfo from '../components/flight-info'
import './scheduled-flight-info.css'

const ScheduledFlightInfo = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Airport</title>
        <meta property="og:title" content="Airport" />
      </Helmet>
      <div className="home-container2">
      <Menu></Menu>
        <span className="home-text14">Назначенный рейс</span>
        <FlightInfo></FlightInfo>
      </div>
    </div>
  )
}

export default ScheduledFlightInfo
