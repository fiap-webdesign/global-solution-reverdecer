import React from 'react'
import styles from './button.module.css'

export default function Button({ title, ...props }) {
  return (
      <button {...props} className={styles.btn}>
        {title}
      </button>
  )
}
