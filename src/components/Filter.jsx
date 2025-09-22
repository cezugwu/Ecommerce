import { Check, X } from 'lucide-react';


const category = ['perfume', 'trousers', 'shoe', 'handbag', 'hat', 'thermog'];
const sizes = ['S', 'M', 'X', 'XL', 'XXL'];
const Filter = ({fil, setFil, size, setSize, q, setQ}) => {
    return(
        <div className={`${fil && 'containfilter'} text-[0.95em]`}>
            <div className={`${fil ? 'filter left-0' : 'left-[-100%]'} duration-300`}>
                <div className='cursor-pointer select-none flex w-full justify-between items-center py-2 px-4'><h1 className='font-medium'>Filter</h1> <X onClick={() => setFil(!fil)} className='size-5' strokeWidth={2} /></div>

                <div className='border w-full h-0 border-gray-400'></div>
                
                <div className='px-4'>
                    <div className='py-3 font-medium'>Categories</div>

                    <div className='space-y-3'> 
                        {category.map((item, index) => 
                        <div>
                            <div key={index} className='flex gap-4 items-center'><div className={`${q === item ? 'bg-black' : ''} p-2 border border-gray-400 select-none relative duration-500`}><Check onClick={() => setQ(item)} className={`${q === item ? 'blur-100' : 'blur'} size-3 absolute top-1/2 left-1/2 -translate-1/2 -tarnslate-y-1/2 text-white duration-500`} strokeWidth={5} /></div><span className='capitalize'>{item}</span></div>
                            <div className='border mt-2 border-gray-300'></div>
                        </div>
                        )}
                    </div>

                    <div>
                        <div className='pt-3 font-medium'>Size</div>
                        <div className="flex gap-4">
                        {sizes.map((item, index) => 
                            <div key={index} onClick={() => setSize(item)} className={`border-gray-600 rounded-sm w-7 h-7 flex items-center justify-center font-jost cursor-pointer select-none ${size === item ? 'border border-1' : ''}`}>{item}</div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;