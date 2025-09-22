import { Check, ChevronDown, ChevronRight, ListFilterPlus, X } from 'lucide-react';
import { useState } from 'react'
import "../search.css";
import Filter from './Filter';
import { useLocation, useNavigate } from 'react-router-dom';

const category = ['perfume', 'trousers', 'shoe', 'handbag', 'hat', 'thermog'];
const sizes = ['S', 'M', 'X', 'XL', 'XXL'];

const recommend = [
  {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
    {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
    {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S80c0995631954fbbbf7df2c9db498250Y.jpg_960x960q75.jpg_.avif"
  }
];

const Search = () => {
    const [q, setQ] = useState('');
    const [size, setSize] = useState('');
    const [fil, setFil] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname.split('/')[1])
    return(
        <div className='mt-20'>
            <div className="py-2 px-4">
                <div className="font-semibold text-[1.2em]">Cart</div>
                <div className='flex items-center text-sm tracking-[0.5px]'><span className='hover:underline cursor-pointer select-none' onClick={() => {navigate("../"); window.scrollTo(0, 0)}} >Ecommerce</span> <ChevronRight className='size-5 mt-[1px]' strokeWidth={1.5}/> <span className='font-light'>Search</span></div>
            </div>

            <div className='flex bg-white pb-20'>
              <div className='text-[0.8em] w-[250px] sticky top-[100px] px-4 min-h-[450px] hidden md:block border m-4 rounded-xl border-gray-400' style={{height: "calc(80vh)"}}>
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

              <div className='border hidden md:block my-5 border-gray-300'></div>

              <div className='flex-1 px-4 pt-10'>
                  <div className='pb-3'>
                      <div className='flex items-center gap-4'><h1 className='font-semibold py-2'>Applied Filters</h1><ListFilterPlus onClick={() => setFil(true)} className='size-5 cursor-pointer select-none' strokeWidth={2.5} /></div>
                      <div className='flex gap-4 text-[0.85em]'>
                          {q && <div className='relative border w-fit px-2 flex items-center gap-1 rounded-full capitalize'><p>{q}</p><X onClick={() => setQ('')} className='size-4 cursor-pointer select-none hover:scale-[1.2] duration-300 mt-[1px]' strokeWidth={1.5} /></div>}
                          {size && <div className='relative border w-fit px-2 flex items-center gap-1 rounded-full capitalize'><p>{size}</p><X onClick={() => setSize('')} className='size-4 cursor-pointer select-none hover:scale-[1.2] duration-300 mt-[1px]' /></div>}
                      </div>
                  </div>

                  <div className='flex items-enter justify-between pb-3'>
                      <h1>showing 1-9 of 36 result</h1>
                      <p className='flex items-center gap-1 text-[0.9em] cursor-pointer select-none'>SORT BY <ChevronDown className='mt-[1px]' strokeWidth={1.5} /></p>
                  </div>
                  <div className='result grid gap-4'>
                  {recommend.map((item, index) => 
                      <div onClick={() => {navigate("../product"); window.scrollTo(0, 0);}} className='mx-auto text-[0.9em] space-y-2' key={index}>
                          <img src={item.image} className='w-40 h-44 p-1 object-cover' />
                          <h1 className='capitalize font-medium'>{item.title}</h1>
                          <div className='flex gap-4 items-center'>
                            <div className='uppercase border w-fit px-2 rounded-full text-[0.85em] font-medium'>In stock</div>
                            <div className='font-light'>{item.price}</div>
                          </div>
                      </div>
                  )}
                  </div>
              </div>
            </div>

            <Filter fil={fil} setFil={setFil} size={size} setSize={setSize} q={q} setQ={setQ} />
        </div>
    );
}

export default Search;