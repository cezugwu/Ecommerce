import React, { act, useEffect, useRef, useState } from "react";
import "../product.css";
import { Heart, Minus, Plus, Share2, Star } from "lucide-react";
import Recommend from "../components/Recommend";



const Product = () => {
  const items = [
    "https://ae-pic-a1.aliexpress-media.com/kf/Sdfa1fb3090d64b43a802245feb2678c7H.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S2de8237c68bc49bf945e519b7b3c14e6q.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/S944766c8221041fc8b5581dbfb106244i.jpg_960x960q75.jpg_.avif",
    "http://ae-pic-a1.aliexpress-media.com/kf/S4fdff1e056374f8bbab562f467dca48aM.jpg_960x960q75.jpg_.avif",
    "https://ae-pic-a1.aliexpress-media.com/kf/Sadd2f5d499194f0894ada5fc5708eab9g.jpg_960x960q75.jpg_.avif",
  ]

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [active]);

  const [grab, setGrab] = useState(false);
  const boxRef = useRef(null);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const mouseDown = (e) => {
    e.preventDefault();
    setGrab(true);
    if (boxRef.current) {
      console.log(e.pageY)
      startY.current = e.pageY;
      scrollTop.current = boxRef.current.scrollTop;
    }
  }

  const mouseLeave = () => setGrab(false);
  const mouseUp = () => setGrab(false);

  const mouseMove = (e) => {
    e.preventDefault();
    if (!grab) return;
    if (boxRef.current) {
      const y = e.pageY;
      const walk = y - startY.current;
      boxRef.current.scrollTop = scrollTop.current - walk;
    }
  }

  const childRefs = useRef([]);
  
  childRefs.current = items.map(
    (el, i) => childRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    if (boxRef.current && childRefs.current[active]?.current) {
      const parent = boxRef.current;
      const child = childRefs.current[active].current;

      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();

      const offset = 10;

      const relativeTop = childRect.top - parentRect.top;
      const relativeBottom = childRect.bottom - parentRect.bottom;

      if (relativeBottom + offset > 0) {
        parent.scrollTop += relativeBottom + offset;
      } else if (relativeTop - offset < 0) {
        parent.scrollTop += relativeTop - offset;
      }
    }
  }, [active]);

  const [grabs, setGrabs] = useState(false);
  const boxRefs = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const mouseDowns = (e, boxRefs) => {
    e.preventDefault();
    setGrabs(true);
    if (boxRefs.current) {
      startX.current = e.pageX - boxRefs.current.offsetLeft;
      scrollLeft.current = boxRefs.current.scrollLeft;
    }
  };

  const mouseLeaves = () => setGrabs(false);
  const mouseUps = () => setGrabs(false);

  const mouseMoves = (e, boxRefs) => {
    e.preventDefault();
    if (!grabs) return;
    if (boxRefs.current) {
      const x = e.pageX - boxRefs.current.offsetLeft;
      const walk = x - startX.current;
      boxRefs.current.scrollLeft = scrollLeft.current - walk; // keep relative scroll
    }
  };


  const [unit, setUnit] = useState(0);

  const sizes = ['S', 'M', 'X', 'XL', 'XXL'];

  const [size, setSize] = useState('S');

  return (
    <div className="bg-white py-28 px-4">
      <div className="flex flex-col md:flex-row gap-16 md:items-center">
        <div className="w-full md:w-[300px] flex justify-center">
          <div className="contain">
            <div onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseLeave} ref={boxRef} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} sliderbox`}>
              {items.map((item, index) => (
                <img key={index} ref={childRefs.current[index]} src={item} onClick={() => setActive(index)} className={`item ${active === index ? "active shadow-[0_0_0_1px_black]" : ""}`} alt={`item-${index}`} />
              ))}
            </div>
            <div className="slider">
              {items.map((item, index) => (
                <img key={index} src={item} className={`item ${active === index ? "active" : ""}`} alt={`item-${index}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex-1 md:w-0 w-full space-y-5">
          <div className="space-y-2">
            <div className="capitalise font-bold flex items-center justify-between"><div>Raw Black T-Shirt Lineup</div> <Share2 strokeWidth={1} className="size-6 cursor-pointer" /></div>
            <div className="flex items-center gap-16">
              <div className="flex gap-3 items-center w-fit rounded-full px-2 bg-gray-400 text-[0.9em] font-jost font-light"> <Star className="size-4 fill-gray-700 text-gray-700" /> <div className="flex items-center gap-1"> <div>4.2</div> <div className="border-[1.3px] w-3 h-0"></div> 54 Reviews</div></div>
              <div className="border w-fit px-2 rounded-full text-[0.9em] font-jost font-medium">IN STOCK</div>
            </div>
            <div className="font-medium text-gray-700">$75</div>
          </div>

          <div className="contains space-y-2">
            <div className="uppercase">Available Units</div>
            <div onMouseDown={(e) => mouseDowns(e, boxRefs)} onMouseMove={(e) => mouseMoves(e, boxRefs)} onMouseUp={mouseUps} onMouseLeave={mouseLeaves} ref={boxRefs} className={`${grabs ? 'cursor-grabbing' : 'cursor-grab'} slider`}>
              {items.map((item, index) => 
                <img src={item} key={index} onClick={() => {setUnit(index); setActive(index)}} className={`item  border-gray-600 ${unit === index ? 'border border-1' : ''}`} />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div>SELECT SIZE</div>
            <div className="flex gap-4">
              {sizes.map((item, index) => 
                <div key={index} onClick={() => setSize(item)} className={`border-gray-600 rounded-sm w-8 h-8 flex items-center justify-center font-jost font-medium cursor-pointer select-none ${size === item ? 'border border-1' : ''}`}>{item}</div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div>Quantity</div>
            <div className="flex items-center border w-fit"><Minus className="size-5 mx-1 cursor-pointer select-none" /> <div className="border-l border-r px-2">1</div> <Plus className="size-5 mx-1 cursor-pointer select-none" /></div>
          </div>

          <div className="space-y-1">
            <div className="flex gap-10 items-center">
              <div className="border px-20 py-[8px] text-[0.9em] font-jost rounded-sm bg-black text-white cursor-pointer select-none">Add to cart</div>
              <Heart className="size-5 text-gray-600 cursor-pointer select-none" />
            </div>
            <div className="flex items-center gap-1 text-gray-500 font-semibold"><div className="w-4 h-0 mt-1 border-[1.4px] border-gray-500"></div><div>free shipping on orders $100+</div></div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="font-jost font-semibold mt-10 py-4">Detail</h1>
        <p>
          Elevate your everyday style with our Men’s Black T-Shirt, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for all-day comfort, this versatile piece is a timeless addition to your collection.
          <br /><br />
          Whether you’re dressing up for a special occasion or keeping it casual, this black t-shirt effortlessly complements any outfit. The classic black color never goes out of style, making it a reliable go-to for every season.
        </p>
        <ul className="list-disc ml-5">
          <li>Versatile Wardrobe Staple</li>
          <li>Premium Quality Fabric</li>
          <li>Tailored Fit</li>
          <li>Available in Various Sizes</li>
        </ul>

      </div>

      <Recommend />
    </div>
  );
};

export default Product;
