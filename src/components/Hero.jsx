import { ArrowRight, Star } from 'lucide-react';
import { } from 'react'

const Hero = () => {
  return(
    <div className='w-full h-[300px] flex justify-around items-center mt-20'>
        <div className='space-y-2'>
            <div className='text-[2em] font-bold'>Fresh Arrivals Online</div>
            <div>Discver Our Newest Collection Tody</div>
            <div className='flex items-center gap-2 bg-black text-white w-fit rounded-md px-2 py-1 cursor-pointer mt-8'>
                <div>View Collection</div>
                <ArrowRight className='mt-1' strokeWidth={1} />
            </div>
        </div>
        <div className='relative hidden md:block'>
            <img src="./w.png" className='relative w-[350px] object-cover z-10' />
            <div className='absolute w-[250px] h-[250px] rounded-full bg-gray-300 -top-2'></div>
            <Star className='text-gray-400 absolute top-0' />
        </div>
    </div>
  );
}

export default Hero;