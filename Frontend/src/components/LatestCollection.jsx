import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [lastestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,8));
    }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis quidem totam quae, ipsam ex! Velit suscipit voluptate, ut aut, ipsam rerum eum explicabo aspernatur perferendis, eos placeat sint vero.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
         {
          lastestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price}/>
          ))
         }
      </div>
    </div>
  )
}

export default LatestCollection
