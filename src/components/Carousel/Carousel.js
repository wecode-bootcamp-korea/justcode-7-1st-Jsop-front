import React, { useState, useRef, useEffect } from 'react';
import css from './Carousel.module.scss';

function Carousel(props) {
  const { CarouselName } = props;
  const [item, setItems] = useState([]);
  const [moveButton, setMoveButton] = useState(false);
  const [carousel, setCarousel] = useState(0);

  const carouselRef = useRef();
  const pageRef = useRef();

  let currentCarousel = carousel;

  useEffect(() => {
    fetch('/data/item.json')
      .then(res => res.json())
      .then(data => {
        setItems(data[CarouselName]);
      });
  }, [CarouselName]);

  const prevCarousel = () => {
    if (currentCarousel > 0) {
      currentCarousel = currentCarousel - 1;
    }
    let moveToCarousel = currentCarousel * -32;
    let moveToPage = currentCarousel * 22;
    carouselRef.current.style.transform = `translate(${moveToCarousel}vw)`;
    pageRef.current.style.transform = `translate(${moveToPage}vw)`;
    setCarousel(currentCarousel);
  };

  const nextCarousel = () => {
    if (currentCarousel < item.length - 3) {
      currentCarousel = currentCarousel + 1;
    }
    let moveToCarousel = currentCarousel * -32;
    let moveToPage = currentCarousel * 22;
    carouselRef.current.style.transform = `translate(${moveToCarousel}vw)`;
    pageRef.current.style.transform = `translate(${moveToPage}vw)`;
    setCarousel(currentCarousel);
  };

  const moveHandler = boolean => {
    setMoveButton(boolean);
  };

  return (
    <div
      className={css.mainCarousel}
      onMouseLeave={() => moveHandler(false)}
      onMouseOver={() => moveHandler(true)}
    >
      <div className={css.carouselArea}>
        <div ref={carouselRef} className={css.carouselWrap}>
          {item.map(({ itemId, itemName, itemImage, itemType }) => (
            <div key={itemId} className={css.carouselContainer}>
              <div className={css.imageContainer}>
                <img
                  className={css.carouselImage}
                  alt="캐러셀"
                  src={itemImage}
                />
              </div>
              <div className={css.carouselProductName}>{itemName}</div>
              <div className={css.carouselProductType}>{itemType}</div>
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

export default Carousel;
