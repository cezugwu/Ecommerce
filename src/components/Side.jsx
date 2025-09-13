import { useContext } from 'react'
import "../side.css"
import { sideContext } from '../context/SideContext';
import { X } from 'lucide-react';

const Side = () => {
    const {open, closeOpen} = useContext(sideContext);
  return(
    <div className={`${open ? 'right-0 side' : 'right-[-100%]'} fixed top-0 h-[100vh] bg-red-100 space-y-10 px-2 pt-10 duration-300`}>
        <X onClick={closeOpen} className='absolute right-0 top-0 cursor-pointer' />
        <div className='item item1'>home</div>
        <div className='item item2'>categories</div>
        <div className='item item3'>about</div>
        <div className='item item4'>contact</div>
    </div>
  );
}

export default Side;