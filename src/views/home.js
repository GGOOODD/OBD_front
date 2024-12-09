import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import ScheduledFlight from '../components/scheduled-flight'
import FlightInfo from '../components/flight-info'
import './home.css'

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  const fetchScheduledFlight = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/flight/get_all_scheduled_flight");
    const scheduledFlights = await response.json();
    setItems(scheduledFlights);
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item["country"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item["destination"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item["airport"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchScheduledFlight();
  }, []);
/*
          <input id="destination" type="text" placeholder="Место назначения" className="input" />
          <input id="airport" type="text" placeholder="Аэропорт" className="input" />

          <button type="button" className="home-button button">
            <span className="home-text16">Найти</span>
          </button>
*/
  return (
    <div className="home-container1">
      <Helmet>
        <title>Airport</title>
        <meta property="og:title" content="Airport" />
      </Helmet>
      <div className="home-container2">
        <Menu></Menu>
        <span className="home-text14">Назначенные рейсы</span>
        <div className="home-container3">
          <span className="home-text15">Поиск:</span>
          <input type="text" placeholder="Поиск" onChange={handleSearch} className="input" />
        </div>
        <ScheduledFlight
          airport={
            <Fragment>
              <span className="home-text17">
                <span>Аэропорт</span>
                <br></br>
              </span>
            </Fragment>
          }
          arrival={
            <Fragment>
              <span className="home-text20">
                <span>Дата и время прилёта</span>
                <br></br>
              </span>
            </Fragment>
          }
          country={
            <Fragment>
              <span className="home-text23">
                <span>Страна</span>
                <br></br>
              </span>
            </Fragment>
          }
          departure={
            <Fragment>
              <span className="home-text26">
                <span>Дата и время вылета</span>
                <br></br>
              </span>
            </Fragment>
          }
          destination={
            <Fragment>
              <span className="home-text29">
                <span>Место назначения</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="scheduled-flightroot-class-name5"
        ></ScheduledFlight>
        <div className="home-container4">
          {filteredItems.map((scheduledFlight) => (
            <Link to={`/scheduled_flight_info/${scheduledFlight.id}`} className="home-container4">
              <ScheduledFlight
              airport={
                <Fragment>
                  <span className="home-text32">
                    <span>{scheduledFlight["airport"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              arrival={
                <Fragment>
                  <span className="home-text35">
                    <span>{scheduledFlight["arrival"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              country={
                <Fragment>
                  <span className="home-text38">
                    <span>{scheduledFlight["country"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              departure={
                <Fragment>
                  <span className="home-text41">
                    <span>{scheduledFlight["departure"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              destination={
                <Fragment>
                  <span className="home-text44">
                    <span>{scheduledFlight["destination"]}</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="scheduled-flightroot-class-name2"
            ></ScheduledFlight>
          </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
