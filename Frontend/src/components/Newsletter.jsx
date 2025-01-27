import React from 'react'

const Newsletter = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% OFF</p>
        <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi exercitationem reiciendis eaque laboriosam eum! Soluta, sint! Aperiam laboriosam dolorem totam corporis sint maiores harum. Atque quidem provident omnis iure earum?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter
