import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './field.css'

const Field = (props) => {
  return (
    <div className={`field-container1 ${props.rootClassName} `}>
      <div className="field-container2">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="field-text2">
                <span>Text</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Field.defaultProps = {
  text: undefined,
  rootClassName: '',
}

Field.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Field
