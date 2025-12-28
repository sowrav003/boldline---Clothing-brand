import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} alt="Dropdown Icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`} >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light" >
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Men'} />
              Men
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Women'} />
              Women
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Kids'} />
              Kids
            </p>
          </div>
        </div>
        {/* SubCategories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`} >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light" >
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Topwear'} />
              Topwear
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Bottomwear'} />
              Bottomwear
            </p>
            <p className="flex gap-2"> 
              <input type="checkbox" className="w-3" value={'Winterwear'} />
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
          <select name="products" id="products" className="border border-gray-300 px-3 py-1 text-sm sm:text-base">
            <option value="default">Default Sorting</option>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
            {/* <option value="newarrivals">New Arrivals</option> */}
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">

        </div>
      </div>
    </div>

  )
}

export default Collection