import { Box, Circle, MoveRight, X } from 'lucide-react';
import {} from 'react';


const Fail = () => {
    return(
        <div className='mt-20'>
            <div className='py-6 px-4 bg-red-200'>
                <h1 className='font-bold '>Failed Order</h1>
                <p><span>Ecommerce</span> - Failed order</p>
            </div>
            <div className='bg-white min-h-[400px] w-full flex flex-col items-center justify-center text-center space-y-4' style={{ height: "calc(100vh - 175px)" }}>
                <div className='relative'><Box className='size-32' strokeWidth={0.5} /><div className='absolute bottom-6 right-0'><Circle className='size-10 z-10 fill-white' strokeWidth={1.3} /><X className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-red-700' /></div></div>
                <div className=''>
                    <h1 className='font-bold text-[1.2em]'>Thank you for shopping</h1>
                    <p>Your order has been successfully placed and is now <br /> beign processed</p>
                </div>
                <div className='flex gap-2 items-center bg-black text-white px-6 py-2 rounded-sm font-light'>Reorder <MoveRight className='mt-1' strokeWidth={1}/></div>
            </div>
        </div>
    );
}

export default Fail;