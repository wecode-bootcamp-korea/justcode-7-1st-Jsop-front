import React from 'react';
import AsideLocator from '../../components/Aside/AsideLocator';
import Locator from '../../components/Carousel/CarouselLocator';
import css from './AsideLocator.module.scss';

function AsideContent() {
  return (
    <div className={css.Container}>
      <div className={css.aside}>
        <AsideLocator />
      </div>
      <div className={css.locator}>
        <Locator />
      </div>
    </div>
  );
}
export default AsideContent;
