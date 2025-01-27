import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusamus. Unde culpa nihil corporis vero officiis asperiores doloremque deleniti ipsa molestiae, beatae hic, excepturi qui, in veritatis consequuntur sed optio?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias asperiores natus laborum! Reprehenderit voluptatibus quidem earum repellat. Quos sequi porro deleniti vitae cum inventore, corrupti ipsam sunt, expedita veritatis nihil!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam natus facere aliquid excepturi praesentium, animi vel voluptatibus provident inventore ex, a deserunt dolorum quo quaerat quasi corporis eveniet tenetur?</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur, aliquam tenetur quia sequi eligendi facilis aut vel libero? Minima iste obcaecati earum, neque asperiores explicabo dolores consequatur natus sequi?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur, aliquam tenetur quia sequi eligendi facilis aut vel libero? Minima iste obcaecati earum, neque asperiores explicabo dolores consequatur natus sequi?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur, aliquam tenetur quia sequi eligendi facilis aut vel libero? Minima iste obcaecati earum, neque asperiores explicabo dolores consequatur natus sequi?</p>
        </div>
      </div>

      <Newsletter/>

    </div>
  )
}

export default About
