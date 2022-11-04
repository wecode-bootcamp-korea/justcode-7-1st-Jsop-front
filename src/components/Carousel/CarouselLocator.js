import React, { useState, useRef, useEffect } from 'react';
import css from './CarouselLocator.module.scss';

function CarouselLocator() {
  const [item, setItems] = useState([]);
  const [moveButton, setMoveButton] = useState(false);
  const [carousel, setCarousel] = useState(0);

  const carouselRef = useRef();
  const pageRef = useRef();

  let currentCarousel = carousel;

  const prevCarousel = () => {
    if (currentCarousel > 0) {
      currentCarousel = currentCarousel - 1;
    } else if (currentCarousel === 0) {
      currentCarousel = item.length - 1;
    }
    let moveToCarousel = currentCarousel * -800;
    let moveToPage = currentCarousel * 250;
    carouselRef.current.style.transform = `translate(${moveToCarousel}px)`;
    pageRef.current.style.transform = `translate(${moveToPage}px)`;
    setCarousel(currentCarousel);
  };

  const nextCarousel = () => {
    if (currentCarousel < item.length - 1) {
      currentCarousel = currentCarousel + 1;
    } else if (currentCarousel === item.length - 1) {
      currentCarousel = 0;
    }
    let moveToCarousel = currentCarousel * -800;
    let moveToPage = currentCarousel * 250;
    carouselRef.current.style.transform = `translate(${moveToCarousel}px)`;
    pageRef.current.style.transform = `translate(${moveToPage}px)`;
    setCarousel(currentCarousel);
  };

  const moveHandler = boolean => {
    setMoveButton(boolean);
  };

  useEffect(() => {
    fetch('/data/locator.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.locator);
      });
  }, []);

  return (
    <div
      className={css.mainCarousel}
      onMouseLeave={() => moveHandler(false)}
      onMouseOver={() => moveHandler(true)}
    >
      <div className={css.carouselArea}>
        <div ref={carouselRef} className={css.carouselContainer}>
          {item.map(({ locatorId, locatorName, locatorImage }) => (
            <div key={locatorId}>
              <div className={css.imageContainer}>
                <img src={locatorImage} alt="locator 이미지" />
              </div>
              <p className={css.location}>{locatorName}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={css.pageContainer}>
        <span ref={pageRef} className={css.page} />
      </div>
      {moveButton && (
        <button className={css.prevButton} onClick={prevCarousel}>
          ＜
        </button>
      )}
      {moveButton && (
        <button className={css.nextButton} onClick={nextCarousel}>
          ＞
        </button>
      )}
    </div>
  );
}

export default CarouselLocator;
