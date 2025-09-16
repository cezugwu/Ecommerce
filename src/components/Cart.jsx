import { Minus, Plus, X } from "lucide-react";
import { useRef, useState } from "react";


const Cart = () => {
    const text = 'Raw black T-Shirt Lineup';

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
    return(
        <div className="mt-20 font-jost">
            <div className="py-2 font-semibold text-[1.3em]">Cart</div>
            <div className="flex justify-around flex-col md:flex-row gap-10 md:gap-4 bg-white px-2 py-4">
                <div className="w-full md:w-[60%] flex items-center justify-center">
                    <div className="w-[100%]">
                        <div className="py-2 font-medium text-[1.2em]">Your cart</div>
                        <div className="border w-full h-0 border-gray-400"></div>
                        <div ref={boxRef} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseLeave} className={`${grab ? 'cursor-grabbing' : 'cursor-grab'} h-[60vh] md:h-[300px] scrollbar-hide text-[0.9em] space-y-2 overflow-auto`}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((items, index) => 
                            <div key={index} className="flex items-center gap-4 justify-between mt-2">
                                <div className="flex gap-4 items-center">
                                    <img className="w-20 h-20 object-fit" src="https://ae-pic-a1.aliexpress-media.com/kf/Sdfa1fb3090d64b43a802245feb2678c7H.jpg_960x960q75.jpg_.avif" alt="" />
                                    <div>
                                        <h1 className="font-medium">{text.slice(0,20) + '...'}</h1> 
                                        <p className="font-light">size: M</p> 
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="font-medium">$75.00</div>
                                    <div className="flex items-center border border-gray-500 w-fit"><Minus className="size-4 mx-1 cursor-pointer select-none" strokeWidth={1} /> <div className="border-l border-r border-gray-500 px-2 text-gray-600">1</div> <Plus className="size-5 mx-1 cursor-pointer select-none" strokeWidth={1} /></div>
                                    <X  className="size-6 cursor-pointer" strokeWidth={1}/>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%] px-4 space-y-8 flex flex-col justify-center border border-gray-400 rounded-md py-4">
                    <div>Order summary</div>

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

                    <div className="text-center bg-black text-white py-[8px] rounded-md font-light cursor-pointer select-none">Checkout</div>

                    <div className="text-center underline text-[0.95em] cursor-pointer select-none">Continue shopping</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;