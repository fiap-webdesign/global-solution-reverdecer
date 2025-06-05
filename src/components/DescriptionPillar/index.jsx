import React from 'react'
import styles from './descriptionPillar.module.css'

export default function DescriptionPillar({children, title}) {
  return (
    <p className={styles.description}>
      {children}
      {title}
    </p>
  )
}
