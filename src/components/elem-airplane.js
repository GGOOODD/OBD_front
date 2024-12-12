import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-airplane.css'

const ElemAirplane = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-airplane-container${props.id == 0 ? 10 : 11}`}>
      <div className="elem-airplane-container3">
        <span className="elem-airplane-text3">Название модели самолёта:</span>
        <span className="elem-airplane-text4">
          {props.airplaneModelName ?? (
            <Fragment>
              <span className="elem-airplane-text9">airplaneModelName</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-airplane-container4">
        <span className="elem-airplane-text5">Регистрационный номер:</span>
        <span className="elem-airplane-text6">
          {props.registrationNumber ?? (
            <Fragment>
              <span className="elem-airplane-text7">registrationNumber</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemAirplane.defaultProps = {
  registrationNumber: undefined,
  airplaneName: undefined,
  rootClassName: '',
  airplaneModelName: undefined,
}

ElemAirplane.propTypes = {
  registrationNumber: PropTypes.element,
  airplaneName: PropTypes.element,
  rootClassName: PropTypes.string,
  airplaneModelName: PropTypes.element,
}

export default ElemAirplane
