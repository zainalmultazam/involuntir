import React from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import KabarTerbaru from "./KabarTerbaru";
import Fundraiser from "./Fundraiser";

import "./index.css";

const TabCarousel = ({ children, activeIndex, setActiveIndex }) => {
  const updateIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < React.Children.count(children)) {
      setActiveIndex(newIndex);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="tab-details-wrapper py-0 relative">
      <div
        className="whitespace-nowrap tab-inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 300ms",
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export const TabItem = ({ children, width }) => {
  return (
    <div
      className="tab-item text-peduly-dark leading-[22px]"
      style={{ marginTop: "-20px", marginBottom: "-32px" }}
      width={width}
    >
      {children}
    </div>
  );
};

const TabDetailsBawah = ({
  kabarTerbaru
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="font-medium text-lg">
      <nav
        style={{ boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.06)" }}
        className="px-[20px] py-0 text-[#C4C4C4]"
      >
        <ul className=" whitespace-nowrap space-x-[24px] overflow-x-scroll max-w-full mx-h-[72px] no-scrollbar">
          <li
            onClick={() => setActiveIndex(0)}
            className={`py-[24px] inline-block cursor-pointer ${
              activeIndex === 0
                ? " border-b-2 border-peduly-primary text-peduly-primary"
                : ""
            }`}
          >
            Kabar terbaru
          </li>
          <li
            onClick={() => setActiveIndex(1)}
            className={`py-[24px] inline-block cursor-pointer ${
              activeIndex === 1
                ? " border-b-2 border-peduly-primary text-peduly-primary"
                : ""
            }`}
          >
            Supporter
          </li>
        </ul>
      </nav>
      <TabCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <TabItem>
          <div className={` ${activeIndex === 0 ? "" : "hidden"}`}>
            <KabarTerbaru kabar={kabarTerbaru} />
          </div>
        </TabItem>
        <TabItem>
          <div className={` ${activeIndex === 1 ? "" : "hidden"}`}>
            <Fundraiser />
          </div>
        </TabItem>
      </TabCarousel>
    </div>
  );
};

export default TabDetailsBawah;
