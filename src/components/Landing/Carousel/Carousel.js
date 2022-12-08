import React, {useState, useEffect} from 'react';
import {useSwipeable} from 'react-swipeable';

import './index.css';

export const CarouselItem = ({children}) => {
  return <div className='carousel-item'>{children}</div>;
};

const Carousel = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className='carousel relative'>
      <div
        className='inner'
        style={{transform: `translateX(-${activeIndex * 100}%)`}}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: '100vw'});
        })}
      </div>
      <div className='indicators'>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''} dot`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
