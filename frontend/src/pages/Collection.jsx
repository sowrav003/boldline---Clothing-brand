import {  useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('default');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory((prev) => prev.filter(item => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if(SubCategories.includes(e.target.value)){
      setSubCategories((prev) => prev.filter(item => item !== e.target.value));
    }

    
    else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();
    if(category.length > 0){
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if(SubCategories.length > 0){
      productsCopy = productsCopy.filter((item) => SubCategories.includes(item.subCategory));
    }
    setFilterProducts(productsCopy); 
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();
    switch(sortType){
      case 'lowtohigh':
        setFilterProducts(filterProductsCopy.sort((a,b) => a.price - b.price));
        break;
      case 'hightolow':
        setFilterProducts(filterProductsCopy.sort((a,b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
 
  useEffect(() => {
    applyFilters();
  }, [category, SubCategories]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} alt="Dropdown Icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`} >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light" >
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Men'} onChange={toggleCategory}/>
              Men
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Kids'} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        {/* SubCategories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`} >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light" >
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Topwear'} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={toggleSubCategory}/>
              Bottomwear
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Winterwear'} onChange={toggleSubCategory}/>
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Products Grid */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/*Products */}
          <select onChange={(e) => setSortType(e.target.value)} name="products" id="products" className="border border-gray-300 px-3 py-1 text-sm sm:text-base">
            <option value="default">Default Sorting</option>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
            {/* <option value="newarrivals">New Arrivals</option> */}
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product,index) => (
            <ProductItems
              key={index} 
              name ={product.name}
              id= {product.id}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Collection