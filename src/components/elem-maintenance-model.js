import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-maintenance-model.css'

const ElemMaintenanceModel = (props) => {
  return (
    <div
      className={`elem-maintenance-model-container1 ${props.rootClassName} `}
    >
      <div className="elem-maintenance-model-container2">
        <span className="elem-maintenance-model-text1">Название:</span>
        <span className="elem-maintenance-model-text2">
          {props.airplaneName ?? (
            <Fragment>
              <span className="elem-maintenance-model-text5">airplaneName</span>
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
  airplaneName: undefined,
  description: undefined,
}

ElemMaintenanceModel.propTypes = {
  rootClassName: PropTypes.string,
  airplaneName: PropTypes.element,
  description: PropTypes.element,
}

export default ElemMaintenanceModel
