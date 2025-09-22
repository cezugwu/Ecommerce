import { useState } from "react";

const PriceSlider = ({ min = 0, max = 1000, step = 1, gap = 5 }) => {
  const [price, setPrice] = useState([min, max]);
  const [active, setActive] = useState(null); // track which handle is active

  const handleMinChange = (e) => {
    let value = Number(e.target.value);
    if (value > price[1] - gap) {
      value = price[1] - gap;
    }
    setPrice([value, price[1]]);
  };

  const handleMaxChange = (e) => {
    let value = Number(e.target.value);
    if (value < price[0] + gap) {
      value = price[0] + gap;
    }
    setPrice([price[0], value]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Price Range</h2>

      {/* Values */}
      <div className="flex justify-between mb-2 text-sm">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>

      <div className="relative h-6">
        {/* Track */}
        <div className="absolute h-1 bg-gray-300 w-full top-1/2 -translate-y-1/2 rounded"></div>

        {/* Active range */}
        <div
          className="absolute h-1 bg-black top-1/2 -translate-y-1/2 rounded"
          style={{
            left: `${(price[0] / max) * 100}%`,
            right: `${100 - (price[1] / max) * 100}%`,
          }}
        ></div>

        {/* Min handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={price[0]}
          onChange={handleMinChange}
          onMouseDown={() => setActive("min")}
          onMouseUp={() => setActive(null)}
          className={`absolute w-full appearance-none bg-transparent pointer-events-auto ${
            active === "min" ? "z-20" : "z-10"
          }`}
        />

        {/* Max handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={price[1]}
          onChange={handleMaxChange}
          onMouseDown={() => setActive("max")}
          onMouseUp={() => setActive(null)}
          className={`absolute w-full appearance-none bg-transparent pointer-events-auto ${
            active === "max" ? "z-20" : "z-10"
          }`}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
