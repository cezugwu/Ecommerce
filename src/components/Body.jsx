import { ArrowRight, BadgeCheck, Car, Shield, Star } from 'lucide-react';
import { useRef, useState } from 'react'


const best = [
  {
    title: "Plain Black Tee",
    price: "$22",
    image: "https://www.kindpng.com/picc/m/2-27356_plain-tshirt-black-plain-black-tshirt-png-transparent.png"
  },
  {
    title: "White Polo Classic",
    price: "$30",
    image: "https://www.kindpng.com/picc/m/2-27356_plain-tshirt-black-plain-black-tshirt-png-transparent.png"
  },
  {
    title: "Polo Shirt (Transparent)",
    price: "$28",
    image: "https://www.kindpng.com/picc/m/2-27356_plain-tshirt-black-plain-black-tshirt-png-transparent.png"
  },
  {
    title: "Classic White Polo Collared",
    price: "$35",
    image: "https://www.kindpng.com/picc/m/2-27356_plain-tshirt-black-plain-black-tshirt-png-transparent.png"
  }
];

const featured = [
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

const options = ["Featured", "Latest"];



const Body = () => {
  const [grab, setGrab] = useState(false);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const [option, setOption] = useState("Featured");

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const mouseDown = (e, ref) => {
    e.preventDefault();
    setGrab(true);
    if (ref.current) {
      startX.current = e.pageX - ref.current.offsetLeft;
      scrollLeft.current = ref.current.scrollLeft;
    }
  };

  const mouseLeave = () => setGrab(false);
  const mouseUp = () => setGrab(false);

  const mouseMove = (e, ref) => {
    e.preventDefault();
    if (!grab) return;
    if (ref.current) {
      const x = e.pageX - ref.current.offsetLeft;
      const walk = x - startX.current;
      ref.current.scrollLeft = scrollLeft.current - walk; // keep relative scroll
    }
  };

  
  return(
    <div>
      <div className='bg-white py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
          <div className='space-y-4'>
            <Car className='bg-gray-300 p-2 size-11 rounded-full' strokeWidth={1.5} />
            <h2 className='font-medium capitalize'>Free shipping</h2>
            <p className='text-gray-700'>Upgrade your style tody and get free <br /> 
            shipping on all orders! Dont't miss out</p>
          </div>
          <div className='space-y-4 py-8 lg:py-0'>
            <BadgeCheck className='bg-gray-300 p-2 size-11 rounded-full' strokeWidth={1.5} />
            <h2 className='font-medium capitalize'>Satisfaction guarantee</h2>
            <p className='text-gray-700'>Upgrade your style tody and get free <br /> 
            shipping on all orders! Dont't miss out</p>
          </div>
          <div className='space-y-4'>
            <Shield className='bg-gray-300 p-2 size-11 rounded-full' strokeWidth={1.5} />
            <h2 className='font-medium capitalize'>secure payment</h2>
            <p className='text-gray-700'>Upgrade your style tody and get free <br /> 
            shipping on all orders! Dont't miss out</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='relative mt-20'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2'>
              <p className='capitalize font-medium text-gray-500'>Shop now</p>
              <h3 className='font-medium text-[1.3em]'>Best selling</h3>
            </div>
          </div>

          <div onMouseDown={(e) => mouseDown(e, boxRef1)} onMouseMove={(e) => mouseMove(e, boxRef1)} onMouseUp={mouseUp} onMouseLeave={mouseLeave}
          ref={boxRef1} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} w-full overflow-auto scrollbar-hide pt-20`}>
            <div className='flex gap-12 w-fit mx-auto p-4'>
              {best.map((item, index) => 
                <div key={index} className='w-[200px] space-y-1'>
                  <img src={item.image} className='w-full h-[250px] object-cover' />
                  <p className='capitalize font-medium text-[0.95em]'>{item.title}</p>
                  <div className='flex gap-8 items-center'>
                    <div className='uppercase border w-fit px-2 rounded-full text-[0.85em] font-medium'>In stock</div>
                    <div className='font-light text-[0.95em]'>{item.price}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row-reverse justify-around gap-16 items-center md:px-10 py-20'>
          <div className='md:w-[40%] w-full flex justify-center'>
              <img src="https://cezugwu.github.io/Ecommerce/s.png" className='w-[350px] object-cover z-10' />
          </div>
          <div className='space-y-2 capitalize md:w-[60%] w-full px-10'>
              <div className='text-[2em] font-bold'>Browse our fashion paradise!</div>
              <p className='text-gray-500'>
                step into a world of style and explore our diverse collection of clothing category.
              </p>
              <div className='flex items-center gap-2 bg-black text-white w-fit rounded-md px-2 py-1 cursor-pointer mt-8'>
                  <div>start browsing</div>
                  <ArrowRight className='mt-1' strokeWidth={1} />
              </div>
          </div>
      </div>

      <div className='py-20 bg-white'>
        <div className='w-full'>
          <div className="flex gap-16 justify-center items-center py-5">
            {options.map((item, index) => (
              <div
                onClick={() => setOption(item)}
                key={index}
                className={`px-2 py-1 rounded-full cursor-pointer select-none  
                  ${option === item 
                    ? 'border text-gray-950 font- border-gray-600 bg-white' 
                    : 'text-gray-500 border border-transparent'
                  }`}
              >
                {item}
              </div>
            ))}
          </div>


          <div onMouseDown={(e) => mouseDown(e, boxRef2)} onMouseMove={(e) => mouseMove(e, boxRef2)} onMouseUp={mouseUp} onMouseLeave={mouseLeave}
          ref={boxRef2} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} ${option !== 'Featured' && 'hidden'} w-full overflow-auto scrollbar-hide`}>
            <div className='p-4 flex gap-12 w-fit mx-auto'>
              {best.map((item, index) => 
                <div key={index} className='w-[200px] space-y-1'>
                  <img src={item.image} className='w-full h-[250px] object-cover' />
                  <p className='capitalize font-medium text-[0.95em]'>{item.title}</p>
                  <div className='flex gap-8 items-center'>
                    <div className='uppercase border w-fit px-2 rounded-full text-[0.85em] font-medium'>In stock</div>
                    <div className='font-light text-[0.95em]'>{item.price}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div onMouseDown={(e) => mouseDown(e, boxRef3)} onMouseMove={(e) => mouseMove(e, boxRef3)} onMouseUp={mouseUp} onMouseLeave={mouseLeave}
          ref={boxRef3} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} ${option !== 'Latest' && 'hidden'} w-full overflow-auto scrollbar-hide`}>
            <div className='p-4 flex gap-12 w-fit mx-auto'>
              {featured.map((item, index) => 
                <div key={index} className='w-[200px] space-y-1'>
                  <img src={item.image} className='w-full h-[250px] object-cover' />
                  <p className='capitalize font-medium text-[0.95em]'>{item.title}</p>
                  <div className='flex gap-8 items-center'>
                    <div className='uppercase border w-fit px-2 rounded-full text-[0.85em] font-medium'>In stock</div>
                    <div className='font-light text-[0.95em]'>{item.price}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Body;
