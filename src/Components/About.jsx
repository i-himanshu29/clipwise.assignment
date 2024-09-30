import React from 'react'
import blue from "../assets/blue.png"
import white from "../assets/white-up.png"
import group from "../assets/Ellipse 11.png"
import group2 from "../assets/Ellipse 10.png"
import backgroundImage from "../assets/blue.png"
import backgroundImage1 from "../assets/white-up.png"
import group0 from "../assets/Ellipse 9.png"
import cry from "../assets/cry.png"
function About() {
  return (
      <div className="h-screen bg-cover  relative w-full flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
         
         <div className="absolute bg-cover top-0 left-0  w-full p-0 h-screen items-center bottom-0" 
          style={{ backgroundImage: `url(${backgroundImage1})` }}>

            <div className="mt-12 flex justify-center items-center">
                <button
                  className="text-blue-300 border-2 border-blue-300 rounded-lg font-semibold 
                  text-[14px] p-3 mt-2 px-7 mb-4 uppercase  items-center justify-center
                  hover:bg-blue-300
                  hover:text-white transition duration-300 ease-in"
                  >
                    View all
                </button>
            </div>

              <div className="flex justify-center gap-x-20 mt-24 " >
                <div classname="flex-col justify-item-end">
                 
                    <h1 className="text-4xl text-black flex justify-end items-center  ">Best Price</h1>
                    <h1 className="font-bold text-6xl mb-3 text-blue-900">Agate phone grip</h1>
                    {/* <div className="flex mb-2 gap-5"> */}

                    <div className="flex justify-end items-baseline space-x-4 my-4">
                      <span className="line-through text-gray-900 text-xl">44.50$</span>
                      <span className="text-red-500 text-5xl font-bold">19.50$</span>
                    </div>
                    {/* </div> */}
                    <p className="flex justify-end items-center">These Pop Rock Crystal grip tops can be swapped with</p>
                    <p className="flex justify-end items-center">other tops depending on your mood , outfit , nails,</p>
                    <p className="flex justify-end items-center">pjone case, holiday,etc.! Just gently squeeze the sides</p>
                    <p className="flex justify-end items-center">to remove and swap out with another color or design!</p>
                  <div className="flex justify-end items-center">
                    <button
                      className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:opacity-90"
                      >
                        BUY NOW
                      </button>
                  </div> 
                </div>


                {/* circle */}
                <div className="relative w-80 h-80">

                <img
                    src={group0}
                    alt="Image 1"
                    className="absolute w-96 h-auto p-1 "
                  />

                  <img
                    src={group}
                    alt="Image 1"
                    className=" absolute w-80 h-auto p-3"
                  />
                  <img
                    src={group2}
                    alt="Image 2"
                    className="absolute w-80 h-auto p-7 "
                  />
                  <img
                    src={cry}
                    alt="Image 3"
                    className="absolute w-80 h-auto p-9 "
                  />

                  {/* <img
                    src={group0}
                    alt="Image 1"
                    className=" absolute w-80 h-auto p-1 "
                  /> */}
                </div>


            </div>
         </div>
      
    </div>
  )
}

export default About