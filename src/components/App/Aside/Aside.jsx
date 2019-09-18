import PropTypes from 'prop-types'
import React from 'react'

import styles from './Aside.module.css'

const Aside = ({ header, comment }) => (
  <aside className={styles.mainAside}>
    <header className={styles.header}>
      <h1 className={styles.appName}>{header}</h1>
      <span className={styles.comment}>{comment}</span>
    </header>
  </aside>
)

Aside.propTypes = {
  header: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

export default Aside
