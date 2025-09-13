import { Github, Instagram, ShoppingBag, Youtube } from 'lucide-react';
import { } from 'react'

const Footer = () => {
  return(
    <div>
      <div className='flex flex-col lg:flex-row justify-around gap-10 py-20 px-4'>
        <div>
          <h1 className='capitalize font-bold text-[2em]'>Join our newsletter</h1>
          <p className='text-gray-600 text-[0.85em]'>We love surprise our subscribers with occasional gifts.</p>
        </div>
        <div className='flex items-center gap-4'>
          <input type="text" className='w-[300px] h-10 outline-none border border-gray-800 rounded-md px-2' name="" id="" />
          <div className='bg-black h-10 text-white font-bold flex items-center px-4 rounded-md'>Subscribe</div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-10 lg:justify-items-center w-full bg-white px-4 py-20'>
        <div className='space-y-5'>
          <div className='flex font-bold gap-1'>
            <ShoppingBag />
            <h2>Ecommerce</h2>
          </div>
          <p>DevCut is a YouTube channel for <br /> practical project-based learning.</p>
          <div className='flex gap-10'>
            <Github className='cursor-pointer select-none' strokeWidth={1.5} />
            <Instagram className='cursor-pointer select-none' strokeWidth={1.5} />
            <Youtube className='cursor-pointer select-none' strokeWidth={1.5} />
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 lg:w-[120%]'>
          <div>
            <h1 className='text-gray-500 font-bold uppercase'>support</h1>
            <div className='grid grid-rows-1 gap-4 pt-8'>
              <a className='w-fit' href="">FAQ</a>
              <a className='w-fit' href="">Terms of use</a>
              <a className='w-fit' href="">Privacy Policy</a>
            </div>
          </div>
          <div>
            <h1 className='text-gray-500 font-bold uppercase'>Company</h1>
            <div className='grid grid-rows-1 gap-4 pt-8'>
              <a className='w-fit' href="">About us</a>
              <a className='w-fit' href="">Contact</a>
              <a className='w-fit' href="">Careers</a>
            </div>
          </div>
          <div >
            <h1 className='text-gray-500 font-bold uppercase'>shop</h1>
            <div className='grid grid-rows-1 gap-4 pt-8'>
              <a className='w-fit' href="">My Account</a>
              <a className='w-fit' href="">Checkout</a>
              <a className='w-fit' href="">Cart</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center space-y-4'>
          <p className='text-gray-500 font-bold uppercase'>Accepted Payment</p>
          <div className='flex gap-10'>
            <p>MasterCard</p>
            <p>AMEX</p>
            <p>VISA</p>
          </div>
        </div>
      </div>

      <div className='w-full py-4 text-center bg-white text-gray-600 font-light'>c DevCut. All rights reserved.</div>
    </div>
  );
}

export default Footer;