import Line from '../Line'
import styles from './descriptionPillar.module.css'

export default function ProjectPillars({children}) {
  return (
    <div className={styles.container}>
      {children}
      <Line />
    </div>
  )
}
