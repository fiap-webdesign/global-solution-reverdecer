import { useContext, useState } from 'react'
import {
  MdFastfood,
  MdOutlineFlashOn,
  MdOutlineWaterDrop,
  MdSecurity,
  MdOutlineViewList,
} from 'react-icons/md'
import styles from './filter.module.css'
import { TutorialContext } from '../../context/Tutorial'

export default function Filter() {
  const { filterTutorial, category } = useContext(TutorialContext)

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${category === 'all' ? styles.active : ''}`}
        onClick={() => filterTutorial('all')}
      >
        <MdOutlineViewList color='var(--darkGreen)' />
        Todos
      </button>
      <button
        className={`${styles.btn} ${category === 'water' ? styles.active : ''}`}
        onClick={() => filterTutorial('water')}
      >
        <MdOutlineWaterDrop color='var(--darkGreen)' />
        Água
      </button>
      <button
        className={`${styles.btn} ${
          category === 'energy' ? styles.active : ''
        }`}
        onClick={() => filterTutorial('energy')}
      >
        <MdOutlineFlashOn color='var(--darkGreen)' />
        Energia
      </button>
      <button
        className={`${styles.btn} ${category === 'food' ? styles.active : ''}`}
        onClick={() => filterTutorial('food')}
      >
        <MdFastfood color='var(--darkGreen)' />
        Alimentos
      </button>
      <button
        className={`${styles.btn} ${
          category === 'security' ? styles.active : ''
        }`}
        onClick={() => filterTutorial('security')}
      >
        <MdSecurity color='var(--darkGreen)' />
        Segurança
      </button>
    </div>
  )
}
