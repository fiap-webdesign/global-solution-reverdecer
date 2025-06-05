import React from 'react'
import styles from './titlePillar.module.css'

export default function TitlePillar({title, children}) {
  return (
    <p className={styles.title}>
      {children}
      {title}
    </p>
  )
}
