import PropTypes from 'prop-types'
import React from 'react'

import styles from './UserPicture.module.css'

const UserPicture = ({ color }) => (
  <div className={`${styles.avatar} ${styles[color]}`} />
)

UserPicture.defaultProps = {
  color: 'orange',
}

UserPicture.propTypes = {
  color: PropTypes.string,
}

export default UserPicture
