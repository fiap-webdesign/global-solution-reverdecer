import styles from './subtitle.module.css'

export default function Subtitle({subtitle}) {
  return (
    <h2 className={styles.subtitle}>{subtitle}</h2>
  )
}
