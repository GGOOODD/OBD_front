import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-airplane-model.css'

const ElemAirplaneModel = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-airplane-model-container${props.id == 0 ? 10 : 11}`}>
      <div className="elem-airplane-model-container2">
        <span className="elem-airplane-model-text1">Название:</span>
        <span className="elem-airplane-model-text2">
          {props.airplaneModelName ?? (
            <Fragment>
              <span className="elem-airplane-model-text5">
                airplaneModelName
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-airplane-model-container3">
        <span className="elem-airplane-model-text3">Вместимость, тонн:</span>
        <span className="elem-airplane-model-text4">
          {props.capacity ?? (
            <Fragment>
              <span className="elem-airplane-model-text6">capacity</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemAirplaneModel.defaultProps = {
  airplaneModelName: undefined,
  capacity: undefined,
  rootClassName: '',
}

ElemAirplaneModel.propTypes = {
  airplaneModelName: PropTypes.element,
  capacity: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ElemAirplaneModel
