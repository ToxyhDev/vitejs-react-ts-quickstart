import './index.module.scss'
import styles from './index.module.scss'
import { useState } from 'react'

export default function Button() {
  const [count, setCount] = useState(0)

  return (
    <button
      className={styles.button}
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  )
}
