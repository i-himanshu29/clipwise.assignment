import React from 'react'
import cart from "../assets/cart.png"
import logo from "../assets/icon.png"
import  backgroundImage from "../assets/blue.png"
import welcome from "../assets/Welcome to Pop Rock Crystal Shop!.png"
import shop from "../assets/shop-now.png"
import down from "../assets/white-down.png"
import crystal from "../assets/crystal.png"
import scroll from "../assets/scroll-down.png"
import group113 from "../assets/Group 113.png"
import backgroundImage1 from "../assets/white-down.png"
import lot from "../assets/new-lot.png"
function Header() {
  return (
        <div
        className="h-screen bg-cover  relative w-full flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="h-screen bg-cover  relative w-full"
             style={{ backgroundImage: `url(${backgroundImage1}) `
              }}
              >
            {/* </div>   */}
                {/*---------------------- Navbar --------------------------------------------------------*/}
                <nav className=" w-full  p-5 mx-auto flex justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center ml-10 ">
                        <img src={logo} alt="Logo" className="h-10 " />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center ml-15 ">
                        <div className="hidden md:flex space-x-8 mx-10 gap-10 ">
                        <a href="#home" className="text-white  hover:text-gray-400">Home</a>
                        <a href="#shop" className="text-white  hover:text-gray-400">Shop</a>
                        <a href="#about-us" className="text-white  hover:text-gray-400">About us</a>
                        <a href="#help" className="text-white hover:text-gray-400">Help</a>
                        </div>

                        {/* Cart Icon */}
                        <div className="flex items-center ml-10">
                            <img src={cart} alt="cart" className="h-10 mr-3" />
                        </div>
                    </div>
                </nav>

            {/* ----------------------------------Hero Section--------------------------------------- */}

                <div className="flex justify-center mt-6 relative">
                    {/* First Div */}
                    <div className="flex mx-10 p-2">
                        <div className="flex-col">
                        <img className="mt-6" src={welcome} alt="Welcome" />

                        <div className="mt-6 text-wrap">
                            <p>Here you will find unique phone accessories, crystals,</p>
                            <p>jewelry, and more. Free Shipping inside the U.S and our</p>
                            <p>phone grips come with a limited warranty. Enjoy!</p>
                        </div>

                        <img className="mt-6" src={shop} alt="Shop" />
                        </div>
                    </div>

                    {/* Second Div */}
                    <div className="flex-col relative ">
                        <img src={lot} alt="new" className="mt-16 absolute"/>
                        <div className="flex rounded-2xl items-center p-3 mt- 10 w-96 h-96 bg-white">
                            <img className="flex w-80 h-80" src={crystal} alt="Crystal" />
                        </div>
                        <img className="mt-3 ml-12" src={group113}/>
                    </div>
                </div>


                {/* ----------------------scroll down ----------------------- */}
                <div className="flex mt-26 items-center justify-center">
                    <img src= {scroll}/>
                </div>
            </div>  
    </div>
  )
}

export default Header