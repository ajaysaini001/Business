import React from 'react'
import styles from '../style'
import { feedback } from '../constents'
import FeddbackCard from './FeddbackCard'
const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.padding} ${styles.flexCenter} flex-col relative`}>
      {/* Todo */}
      <div className='absolute z[0] w-[60%] h[60%] -right-50% rounded-full blue__gradient bg-red-800'/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16
    mb-6 relative z[1]">
      <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/>
      Saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        In this type of buisness you can join and 
          purchase shares and can beacome owaner of company 
          because this type of company. 
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container
    relative z[1]">
      {
        feedback.map((card)=>(
          <FeddbackCard key={card.id} {...card}/>
        ))
      }
    </div>
    </section>
  )
}

export default Testimonials