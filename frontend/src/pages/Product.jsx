import React, {  useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId} = useParams();
  const {products,currency} =  useContext(ShopContext);

  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
  })
}
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Images and Details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Images Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${productData.name} - ${index + 1}`}
                className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'
                onClick={() => setImage(imgSrc)}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt={productData.name} className='w-full h-auto'/>
          </div>
        </div>
        {/* Product Details Section */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="star icon" className='w-3.5' />
            <img src={assets.star_icon} alt="star icon" className='w-3.5' />
            <img src={assets.star_icon} alt="star icon" className='w-3.5' />
            <img src={assets.star_icon} alt="star icon" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="star icon" className='w-3.5' />
            <p className='text-sm text-gray-600'>(120 reviews)</p>
          </div>
          <p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
          <p className='text-gray-500 mt-5 md:w-4/5'>{productData.description}</p>
          <div className='my-8 flex flex-col gap-4'>
            <p className=''>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((size, index) => (
                <button className={`border-gray-300 py-2 px-4 bg-gray-100`} key={index}>{size}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors ease-in-out'>Add to Cart</button>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'>Loading...</div>
}


export default Product