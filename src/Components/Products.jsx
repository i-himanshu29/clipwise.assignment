// import React from 'react'
// import filter from "../assets/All-product.png"
// import selling from "../assets/Best-Selling.png"
// import group from "../assets/Group 118.png"
import crystal from "../assets/crystal.png"
import cry from "../assets/cry.png"
// function Products() {
//   return (
//     <div className="flex-col">
//       <h1 className="item-center text-center text-4xl font-bold mt-7">All Product</h1>
//       <div className="bg-slate-500 w-1"></div>
//       <div className="flex gap-16 ml-28 ">
//             {/* <img src={filter}/> */}
//             <div className="flex">
//                 <p className="text-xl">Filter :<span className="text-2xl text-blue-900"> All Products</span></p>
//                 <MdOutlineArrowDropDown className="mt-3" />
//             </div>

//             <div className="flex">
//                 <p className="text-xl">sort :<sapn className="text-2xl text-blue-900">Best Selling</sapn></p>
//                 <MdOutlineArrowDropDown className="mt-3" />
//             </div>
            
           
//             {/* <img src={selling}/> */}
//       </div>

//       <div className="flex-col mx-auto item-center">
//         {/* <img src={group}/> */}
//         <div>
//             <div className="bg-white rounded-md ">
//                 <img src={crystal}/>
//             </div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//         <div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Products


import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
const products = [
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry, // Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry, // Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry, // Replace with your product image
  },

  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry,// Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry, // Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image:cry, // Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image: cry, // Replace with your product image
  },
  {
    name: 'Crystal Agate Phone Grip',
    price: '18.99$',
    image:cry, // Replace with your product image
  }
 
  // Add more products as needed
];

const Products = () => {
  return (
    <section className=" bg-white">
      <div className="container  rounded-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">All Products</h2>
        <div className="w-12 h-1  mx-auto bg-gray-200 rounded-md"></div>
        <div className="flex gap-5 mt-5 p-5">
            <div className="flex">
                <p className="text-xl">Filter :<span className="text-2xl text-blue-900"> All Products</span></p>
                <MdOutlineArrowDropDown className="mt-3" />
            </div>

            <div className="flex">
                <p className="text-xl">sort :<span className="text-2xl text-blue-900">Best Selling</span></p>
               <MdOutlineArrowDropDown className="mt-3" />
           </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8 ml-5 mr-5">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-3xl shadow-lg text-center">
              <img src={product.image} alt={product.name} className="w-56 p-1 ml-12  h-56 mt-5  object-cover mb-2 " />

              <h3 className="text-2xl  mb-1">{product.name}</h3>
              <p className="text-blue-500 text-xl mb-3 ">{product.price}</p>

              <button
              className="text-blue-300 border-2 border-blue-300 rounded-lg font-semibold 
              text-[14px] p-3 mt-2 px-7 mb-10 uppercase 
              hover:bg-blue-300
              hover:text-white transition duration-300 ease-in"
              >
                Buy Now
            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
