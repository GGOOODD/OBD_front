import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-name.css'

const ElemName = (props) => {
  return (
    <div className={`elem-name-container1 ${props.rootClassName} `}>
      <div className="elem-name-container2">
        <span className="elem-name-text1">Название:</span>
        <span className="elem-name-text2">
          {props.name ?? (
            <Fragment>
              <span className="elem-name-text3">name</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

ElemName.defaultProps = {
  name: undefined,
  rootClassName: '',
}

ElemName.propTypes = {
  name: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ElemName
