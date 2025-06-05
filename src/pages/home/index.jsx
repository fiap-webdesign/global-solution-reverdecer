import React from 'react'
import styles from './home.module.css'
import logo from '/logo.png'
import Button from '../../components/Button'

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <img src={logo} alt="Logo do Reverdecer" className={styles.image}/>
        <h1 className={styles.introducao}>Tutoriais práticos e colaborativos para ajudar comunidades em situação de vulnerabilidade a enfrentar desafios ambientais com autonomia e criatividade.</h1>
        <Button title={"Ver mais"} onClick={() => window.location.hash = "#quem-somos"}/>
      </main>
    </>
  )
}
