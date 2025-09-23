import { useContext, useEffect, useRef } from 'react'
import "../side.css"
import { sideContext } from '../context/SideContext';
import { Contact, EqualApproximately, House, Table } from 'lucide-react';

const Side = () => {
  const {open, setOpen, closeOpen} = useContext(sideContext);
  const sideRef = useRef(null);

  useEffect(() => {
    const closeBox = (e) => {
      if (sideRef.current && !sideRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeBox);
    return () => {
      document.removeEventListener("mousedown", closeBox);
    };
  }, []);


  return(
    <div ref={sideRef} className={`${open ? '-right-1 side' : 'right-[-100%]'} fixed top-0 h-[100vh] bg-red-100 px-2 duration-300 rounded- shadow z-10 w-[270px]`}>
        <div className='flex items-center gap-2 text-[0.9em] py-4'>
          <div className='w-14 h-14 bg-gray-500 rounded-full border-2 border-white'></div> 
          <div><h1 className='font-bold'>Jhon doe</h1><p className='font-light'>whoitis@gmail.com</p></div>
        </div>

        <div className='space-y-12 pt-8 tracking-[1px] font-medium text-[0.9em] capitalize'>
          <div className='flex items-center gap-4 cursor-pointer select-none w-fit'><House className='size-7 w-10' strokeWidth={1.5} /><h1 className='item item1'> home</h1></div>
          <div className='flex items-center gap-4 cursor-pointer select-none w-fit'><Table className='size-7 w-10' strokeWidth={1.5} /><h1 className='item item2'>Categories</h1></div>
          <div className='flex items-center gap-4 cursor-pointer select-none w-fit'><EqualApproximately className='size-7 w-10' strokeWidth={1.5} /><h1 className='item item3'>About</h1></div>
          <div className='flex items-center gap-4 cursor-pointer select-none w-fit'><Contact className='size-7 w-10' strokeWidth={1.5} /><h1 className='item item4'>Contact</h1></div>
        </div>
    </div>
  );
}

export default Side;