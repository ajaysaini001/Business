import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        Navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
      </div>

      <div className={`bg-primary ${styles.padding} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business   
        </div>
      </div>
      </div>
  )
}

export default App