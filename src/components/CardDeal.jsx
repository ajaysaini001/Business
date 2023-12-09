import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          In this type of buisness you can join and 
          purchase shares and can beacome owaner of company 
          because this type of company provide a 
          diffrent type of oppotunuity. 
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal