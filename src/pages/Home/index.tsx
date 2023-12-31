import styles from './index.module.scss'
import Header from '../../components/Header'
import Button from '../../components/Button'

export default function Home() {
  return (
    <>
      <Header />

      <h1 className={styles.title}>Vite + React</h1>
      <div className={styles.card}>
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
