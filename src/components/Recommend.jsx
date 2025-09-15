import { useRef, useState } from 'react';

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

const Recommend = () => {
  const [grab, setGrab] = useState(false);
  const boxRef = useRef(null);

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
        <div className='space-y-2'>
          <h1 className='font-semibold'>You might also like</h1>
          <p className='text-[0.8em] font-medium text-gray-500'>SIMILAR PRODUCTS</p>
        </div>
        <div onMouseDown={(e) => mouseDown(e, boxRef)} onMouseMove={(e) => mouseMove(e, boxRef)} onMouseUp={mouseUp} onMouseLeave={mouseLeave}
        ref={boxRef} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} w-full overflow-auto scrollbar-hide mt-10`}>
        <div className='flex gap-12 w-fit mx-auto p-4'>
            {featured.map((item, index) => 
            <div key={index} className='w-[150px] space-y-1'>
                <img src={item.image} className='w-full h-[200px] object-cover' />
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
    );
}

export default Recommend;