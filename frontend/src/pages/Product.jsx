import React, {  useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId} = useParams();
  const {products,currency} =  useContext(ShopContext);

  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

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
              {productData.sizes.map((item, index) => (
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'bg-orange-400 text-white ' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5 border-gray-300'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy returns and exchanges in 14 days</p>
          </div>
        </div>
      </div>
      {/* Additional Information Section */}
      <div className='mt-20'>
        <div className='flex'>
            <b className='border border-gray-300 px-5 py-3 text-sm'>Product Details</b>
        <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
              <p>Key features of an e-commerce website include product listings with detailed descriptions and images, a shopping cart system for users to add and manage their selected items, secure payment gateways for processing transactions, and user accounts for tracking orders and managing personal information. E-commerce websites may also incorporate features such as customer reviews, wish lists, and personalized recommendations to enhance the shopping experience.</p>
              <p>Overall, e-commerce websites have revolutionized the way people shop and conduct business, providing a convenient and efficient platform for both buyers and sellers in the digital age.</p>
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'>Loading...</div>
}


export default Product