import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-maintenance-model.css'

const ElemMaintenanceModel = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}}
      className={`elem-maintenance-model-container${props.id == 0 ? 10 : 11}`}
    >
      <div className="elem-maintenance-model-container2">
        <span className="elem-maintenance-model-text1">Название:</span>
        <span className="elem-maintenance-model-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-maintenance-model-text5">name</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="elem-maintenance-model-container3">
        <span className="elem-maintenance-model-text3">
          Описание требований:
        </span>
        <span className="elem-maintenance-model-text4">
          {props.description ?? (
            <Fragment>
              <span className="elem-maintenance-model-text6">description</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemMaintenanceModel.defaultProps = {
  rootClassName: '',
  name: undefined,
  description: undefined,
}

ElemMaintenanceModel.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.element,
  description: PropTypes.element,
}

export default ElemMaintenanceModel
