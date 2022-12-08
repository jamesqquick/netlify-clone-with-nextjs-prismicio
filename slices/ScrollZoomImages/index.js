import React, { useState, useEffect } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import Image from 'next/image';

/**
 * @typedef {import("@prismicio/client").Content.ScrollZoomImagesSlice} ScrollZoomImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScrollZoomImagesSlice>} ScrollZoomImagesProps
 * @param { ScrollZoomImagesProps }
 */
const ScrollZoomImages = ({ slice }) => {
  const [topImageTranslateY, setTopImageTranslateY] = useState(-200);
  const [bottomImageLeft, setBottomImageLeft] = useState(100);
  const [topImageTranslateX, setTopImageTranslateX] = useState(0);
  const [scale, setScale] = useState(0.6);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    let newTranslateY = -200 + scrollPosition;
    if (newTranslateY > 0) newTranslateY = 0;
    setTopImageTranslateY(newTranslateY);

    let newScale = 0.6 + scrollPosition / 1000;
    if (newScale > 1.0) newScale = 1.0;
    setScale(newScale);

    let newBottomImageLeft = 100 - scrollPosition / 2;
    if (newBottomImageLeft < -150) {
      newBottomImageLeft = -150;
    }
    setBottomImageLeft(newBottomImageLeft);

    let newTopImageTranslate = 0 + scrollPosition / 4.5;
    if (newTopImageTranslate > 40) {
      newTopImageTranslate = newTopImageTranslate - 40;
      if (newTopImageTranslate > 80) {
        newTopImageTranslate = 80;
      }
    } else {
      newTopImageTranslate = 0;
    }
    setTopImageTranslateX(newTopImageTranslate);
  }, [scrollPosition, topImageTranslateY, scale]);
  return (
    <section className="flex flex-col items-center">
      hehe
      <div
        style={{
          transform: `translateY(${topImageTranslateY}px) scale(${scale}) translateX(${topImageTranslateX}px)`,
        }}
        className="relative"
      >
        <Image
          src={slice.primary.topImage.url}
          height="437"
          width="700"
          alt={slice.primary.topImage.alt}
          className=" z-50 rounded"
        />
        <Image
          src={slice.primary.bottomImage.url}
          width={500}
          height={200}
          alt={slice.primary.bottomImage.alt}
          className="bottom-10 -translate-y-[10%] -z-10 absolute"
          style={{
            left: `${bottomImageLeft}px`,
          }}
        />
      </div>
    </section>
  );
};

export default ScrollZoomImages;
