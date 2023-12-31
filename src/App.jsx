import React from 'react'
import styles from './style'
import { Navbar,Billing,CardDeal, Business,Clent,CTA,Stats,Fotter,Testimonials,Hero} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
      </div>

      <div className={`bg-primary ${styles.padding} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          {/* <Navbar/> */}
          
          
          <Business/>
          <Billing/>
          <CardDeal/>
          
          
          <Fotter/>
          <Testimonials/>
          <Clent/>
          <CTA/>
          <Fotter/>
          {/* <Hero/> */}
        </div>
      </div>
      </div>
  )
}

export default App