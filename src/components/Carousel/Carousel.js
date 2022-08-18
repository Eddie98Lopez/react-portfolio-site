import React, { createContext, useContext, useState, useEffect } from "react";
import IndexCircles from "./IndexCircles";
import Slider from "./styled/Slider";
import Image from "./styled/Image";
import ArrowButton from "./ArrowButton";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

const Carousel = (props) => {
  const { images, auto, duration, active } = props;
  const [counter, setCounter] = useState(active ? images.indexOf(active) : 0);
  const miliSeconds = duration
    ? 1000 * Number(duration.substr(0, duration.length - 1))
    : 4000;

  /*   useEffect(()=>{
    if(active){setCounter(images.indexOf(active))}
  }) */

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        setCounter(counter + 1 >= images.length ? 0 : counter + 1);
      }, miliSeconds);

      return () => clearInterval(interval);
    }
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, setCounter, images }}>
      <Slider {...props}>
        {images.map((img) => (
          <Image
            {...props}
            counter={counter}
            id={images.indexOf(img)}
            key={images.indexOf(img)}
            position={img.position}
          >
            <img src={img.href} alt={img} />
          </Image>
        ))}

        <ArrowButton left />
        <ArrowButton right />

        <IndexCircles />
      </Slider>
    </CounterContext.Provider>
  );
};

export default Carousel;
