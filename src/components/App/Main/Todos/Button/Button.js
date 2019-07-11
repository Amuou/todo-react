import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, text, onClick, disabled }) => (
  <input
    className={`btn ${styles[type]}`}
    type="submit"
    value={text}
    onClick={onClick}
    disabled={disabled}
  />
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
