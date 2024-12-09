import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Shops from './views/shops'
import User from './views/user'
import Home from './views/home'
import ScheduledFlightInfo from './views/scheduled-flight-info'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Shops} exact path="/shops" />
        <Route component={User} exact path="/user" />
        <Route component={Home} exact path="/" />
        <Route component={ScheduledFlightInfo} exact path="/scheduled_flight_info/:id" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
