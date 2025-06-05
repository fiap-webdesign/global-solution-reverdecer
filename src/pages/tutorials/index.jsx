import { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import Card from '../../components/Card'
import Filter from '../../components/Filter'
import Modal from '../../components/Modal'
import Title from '../../components/Title'
import { TutorialContext } from '../../context/Tutorial'
import styles from './tutorials.module.css'

export default function Tutorials() {
  const { handleClickOpen } = useContext(TutorialContext)
  
  return (
    <section className={styles.container}>
      <Title title={'Tutoriais para um futuro sustentável'} />
      <Filter />
      <Card />
      <button className={styles.btnAddTutorial} onClick={handleClickOpen}>
        <FaPlus/>
        <p>Publicar tutorial</p>
      </button>
      <Modal />
    </section>
  )
}
