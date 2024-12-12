import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './elem-name.css'

const ElemName = (props) => {
  return (
    <div onClick={() => {props.setChoose(props.id)}} className={`elem-name-container${props.id == 0 ? 10 : 11}`}>
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
