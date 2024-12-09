import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Shop from '../components/shop'
import './shops.css'

const Shops = (props) => {
  const [list, setList] = useState([]);

  const fetchScheduledFlight = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/classifier/get_all_shop");
    const shops = await response.json();
    setList(shops);
  }

  useEffect(() => {
    fetchScheduledFlight();
  }, []);

  return (
    <div className="shops-container1">
      <Helmet>
        <title>Shops - Airport</title>
        <meta property="og:title" content="Shops - Airport" />
      </Helmet>
      <div className="shops-container2">
      <Menu></Menu>
        <span className="shops-text14">Магазины</span>
        <div className="shops-container3">
          {list.map((shop) => (
            <Shop
              name={
                <Fragment>
                  <span className="shops-text15">
                    <span>{shop["name"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              location={
                <Fragment>
                  <span className="shops-text18">{shop["location"]}</span>
                </Fragment>
              }
              rootClassName="shoproot-class-name"
            ></Shop>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shops
