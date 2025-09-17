
import { ShoppingBag, ChevronDown, ShoppingCart, CircleUserRound, Menu, Search, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react'
import { sideContext } from '../context/SideContext';

const Header = () => {
    const {closeOpen} = useContext(sideContext);
    const [xOpen, setXOpen] = useState(false);

    const openX = () => {
      setXOpen(false)
    }
    useEffect(() => {
      window.addEventListener('scroll', openX)
      return () => window.removeEventListener('scroll', openX);
    }, [])

  return(
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='w-full bg-black py-1 text-slate-300 text-[0.9em] text-center font-medium'>Get 25% OFF on your first order. Order Now</div>
      <div className={`${xOpen ? 'top-0' : 'top-[-150%]'} absolute w-full bg-white/50 backdrop-blur-[2px] py-8 duration-300`}>
        <div className='relative left-1/2 -translate-x-1/2 w-[300px] h-[35px]'>
          <Search className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-800' strokeWidth={1.5} />
          <input type="text" className='border border-slate-500 rounded-md w-[300px] h-[35px] outline-none px-2 pl-10 font-jost text-sm' name="" id="" />
        </div>
      </div>
      <div className='w-full flex px-4 justify-between bg-white items-center h-13'>
        <div className='flex font-bold gap-1 text-[1.1em] items-center'>
          <ShoppingBag strokeWidth={2.5} />
          <div>Ecommerce</div>
        </div>

        <div className='hidden md:flex gap-6 items-center justify-around w-full px-20 font-funnel text-[0.95em]'>
          <a href=''>home</a>
          <a href='' className='flex items-center gap-2'>
              <p className=''>categories</p>
              <ChevronDown className='size-5  mt-[2px]' strokeWidth={1.5} />
          </a>
          <a href=''>about</a>
          <a href=''>contact</a>
        </div>

        <div className='flex gap-4 items-center'>
          <Search className='lg:hidden text-slate-800' strokeWidth={1.5} onClick={() => setXOpen(true)} />
          <div className='relative w-[310px] h-9 hidden lg:block'>
              <Search className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-800' strokeWidth={1.5} />
              <input type="text" className='border border-slate-500 rounded-md w-[310px] h-9 outline-none px-2 pl-10 font-jost text-sm' name="" id="" />
          </div>
          <ShoppingCart strokeWidth={1.5} />
          <CircleUserRound strokeWidth={1.5} />
          <Menu strokeWidth={1.5} onClick={closeOpen} className='md:hidden' />
        </div>
      </div>
    </div>
  );
}

export default Header;