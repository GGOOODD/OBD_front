import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './crew.css'

const Crew = (props) => {
  return (
    <div className="crew-container">
      <span className="crew-text10">
        {props.name ?? (
          <Fragment>
            <span className="crew-text15">Name</span>
          </Fragment>
        )}
      </span>
      <span className="crew-text11">
        {props.surname ?? (
          <Fragment>
            <span className="crew-text20">Surname</span>
          </Fragment>
        )}
      </span>
      <span className="crew-text12">
        {props.patronymic ?? (
          <Fragment>
            <span className="crew-text19">Patronymic</span>
          </Fragment>
        )}
      </span>
      <span className="crew-text13">Должность:</span>
      <span className="crew-text14">
        {props.jobTitle ?? (
          <Fragment>
            <span className="crew-text16">
              <span>jobTitle</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Crew.defaultProps = {
  name: undefined,
  jobTitle: undefined,
  patronymic: undefined,
  surname: undefined,
}

Crew.propTypes = {
  name: PropTypes.element,
  jobTitle: PropTypes.element,
  patronymic: PropTypes.element,
  surname: PropTypes.element,
}

export default Crew
