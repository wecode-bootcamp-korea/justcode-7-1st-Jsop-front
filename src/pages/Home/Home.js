import React from 'react';
import './Home.module.scss';
import MainProduct from './MainProduct';
import css from './Home.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Category/CategoryCard';
import AsideContent from './AsideContent';
import AsideLocator from './AsideLocator';

function Home() {
  return (
    <div className="mainWrap">
      {/* nav 자리 */}
      <div className={css.mainContent}>
        <MainProduct />
        <Carousel />
        <Card />
        <Carousel />
        <Card />
        <AsideContent />
        <AsideLocator />
      </div>
      {/* footer 자리  */}
    </div>
  );
}

export default Home;
