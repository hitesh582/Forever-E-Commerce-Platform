// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom'

// const ProductItem = ({id, image, name, price}) => {

//     const {currency} = useContext(ShopContext)

//   return (
//     <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//         <div className='overflow-hidden'>
//             <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//         </div>
//         <p className='pt-3 pb-1 text-sm'>{name}</p>
//         <p className='text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   )
// }

// export default ProductItem


import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext)

    console.log('ProductItem Image:', image); // Add this for debugging

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img 
                    className='hover:scale-110 transition ease-in-out' 
                    src={image} 
                    alt={name} 
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItem
