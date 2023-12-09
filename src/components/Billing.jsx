import React from 'react'
import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bilimg" className='w-[100%] h-[100%] relative z-[5]'/>

      <div className="absolute z[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/>
        billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          It is a small type of buisine where we
           can buy electronic gooods like refrigrator,tv etc.
          if you want to buy product offline you can 
          come our office or contact us by our contact no.
        </p>
       
       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple store" className='w-[128px] h-[420px] object-contain mr-5 
        cursur-pointer'/>
         <img src={google} alt="apple store" className='w-[128px] h-[420px] object-contain 
        cursur-pointer'/>
       </div>
      </div>
    </section>
  )
}

export default Billing