import PropTypes from 'prop-types'
import React from 'react'

import styles from './Button.module.css'

const Button = ({ type, text, onClick, disabled }) => (
  <input
    className={`btn ${styles[type]}`}
    type="submit"
    value={text}
    onClick={onClick}
    disabled={disabled}
  />
)

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
