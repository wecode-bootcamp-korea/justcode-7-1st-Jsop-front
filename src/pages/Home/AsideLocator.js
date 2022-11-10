import React from 'react';
import Aside from '../../components/Aside/Aside';
import Locator from '../../components/Carousel/CarouselLocator';
import css from './AsideLocator.module.scss';

function AsideContent() {
  return (
    <div className={css.Container}>
      <div className={css.aside}>
        <Aside asideName="locatorAside" />
      </div>
      <div className={css.locator}>
        <Locator />
      </div>
    </div>
  );
}
export default AsideContent;
