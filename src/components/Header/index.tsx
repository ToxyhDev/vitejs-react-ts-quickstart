import styles from './index.module.scss'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <header>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className={`${styles.logo} ${styles.react}`}
          alt="React logo"
        />
      </a>
    </header>
  )
}
