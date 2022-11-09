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
      <div className={css.mainContent}>
        <MainProduct />
        <Carousel CarouselName="itemData1" />
        <Card categoryName="card1" />
        <Carousel CarouselName="itemData3" />
        <Card categoryName="card2" />
        <AsideContent />
        <AsideLocator />
      </div>
    </div>
  );
}

export default Home;
