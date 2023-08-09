import {apple, bill, google} from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] h-[50%] w-[50%] rounded-full bottom-0 pink__gradient' />
    </div>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et maiores quasi quisquam voluptate rem, rerum nesciunt neque, cupiditate facere tenetur pariatur! Vitae, adipisci unde! Dolor in laborum fugiat. Nam, a!
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' alt="apple_store" />
        <img src={google} className='w-[128px] h-[42px] object-contain cursor-pointer' alt="Google_store" />
      </div>
    </div>
  </section>
)

export default Billing