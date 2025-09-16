import { CircleChevronLeft, CircleChevronRight, Scissors, SquarePen } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const items = [
    "https://ae-pic-a1.aliexpress-media.com/kf/Sdfa1fb3090d64b43a802245feb2678c7H.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S2de8237c68bc49bf945e519b7b3c14e6q.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S944766c8221041fc8b5581dbfb106244i.jpg_960x960q75.jpg_.avif",
    "http://ae-pic-a1.aliexpress-media.com/kf/S4fdff1e056374f8bbab562f467dca48aM.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/Sadd2f5d499194f0894ada5fc5708eab9g.jpg_960x960q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/Sdfa1fb3090d64b43a802245feb2678c7H.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S2de8237c68bc49bf945e519b7b3c14e6q.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S944766c8221041fc8b5581dbfb106244i.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/Sadd2f5d499194f0894ada5fc5708eab9g.jpg_960x960q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/Sdfa1fb3090d64b43a802245feb2678c7H.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S2de8237c68bc49bf945e519b7b3c14e6q.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S944766c8221041fc8b5581dbfb106244i.jpg_960x960q75.jpg_.avif",

]
const Checkout = () => {
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

    const moveScroll = (direction) => {
    if (boxRef.current) {
        const scrollAmount = 100;
        const newScrollPosition =
        boxRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

        boxRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
        });
    }
    };

  const refParent = useRef(null);
  const [isFull, setFull] = useState(false);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const parent = refParent.current;

    if (!box || !parent) {
      return;
    }

    const checkFull = () => {
      setFull(box.scrollWidth > parent.clientWidth);
    };

    checkFull();

    const observer = new ResizeObserver(checkFull);
    observer.observe(box);
    observer.observe(parent);

    window.addEventListener('resize', checkFull);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkFull);
    };
  }, []);

    return(
        <div className='mt-20 font-jost'>
            <div className="py-2 font-semibold text-[1.3em] px-4">Checkout</div>

            <div className='flex flex-col md:flex-row bg-white px-4 gap-8 items-center py-4 pb-12'>
                <div className='w-full md:w-[60%]'>
                    <div className='font-semibold py-4'>shipping Address</div>
                    <div className='space-y-2'>
                        <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>street Address</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>city</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>state</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>zip code</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>country</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>email</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                            <div className='flex flex-col w-full'><label htmlFor="shipping" className='capitalize font-medium text-slate-600'>full name</label><input type="text" className='border outline-none w-[100%] h-10 px-4 font-light' /></div>
                        </div>
                    </div>
                </div>

                <div className='md:border md:h-[300px] border-gray-400'></div>

                <div className='w-full md:w-[40%]'>
                    <div className='flex pb-4 items-center justify-between'><div className='font-semibold'>Your Order</div><SquarePen className='size-6 cursor-pointer select-none' strokeWidth={1.5} /></div>
                    <div ref={refParent} className='relative all group select-none'>
                        <div onMouseDown={(e) => mouseDown(e, boxRef)} onMouseMove={(e) => mouseMove(e, boxRef)} onMouseUp={mouseUp} onMouseLeave={mouseLeave} ref={boxRef} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} flex gap-2 w-fit duration-300 overflow-auto overflow-auto scrollbar-hide`}>
                            {items.map((item, index) => 
                                <img key={index} src={item} className='w-10 h-10 border' alt="" />
                            )}
                        </div>
                        <CircleChevronLeft onClick={() => moveScroll('left')} className={`${isFull ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : ''} absolute left-1 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer select-none opacity-0 duration-500`} strokeWidth={1} />
                        <CircleChevronRight onClick={() => moveScroll('right')} className={`${isFull ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : ''} absolute right-1 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer select-none opacity-0 duration-500`} strokeWidth={1} />
                    </div>

                    <div className="w-full px-4 space-y-4 flex flex-col justify-center py-4">

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <h1 className="text-gray-600">Subtotal</h1>
                                <p>$ 90.00</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h1 className="text-gray-600">Shipping</h1>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h1 className="text-gray-600">Tax</h1>
                                <p>$ 3.00</p>
                            </div>
                        </div>

                        <div className="border border-gray-300"></div>

                        <div className="flex justify-between items-center">
                            <h1 className="text-gray-600">Total</h1>
                            <p>$ 100.00</p>
                        </div>

                        <div className="text-center bg-black text-white py-[8px] rounded-md font-light cursor-pointer select-none">Place Order</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;