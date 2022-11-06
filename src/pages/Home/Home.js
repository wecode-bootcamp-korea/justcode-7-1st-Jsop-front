import React, { useState } from 'react';
import './Home.module.scss';
import MainProduct from './MainProduct';
import css from './Home.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Category/CategoryCard';
import AsideContent from './AsideContent';
import AsideLocator from './AsideLocator';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
function Home() {
  const [pageOpen, setPageOpen] = useState(true);
  return (
    <div className="mainWrap">
      <Header setPageOpen={setPageOpen} />
      {pageOpen && (
        <div className={css.mainContent}>
          <MainProduct />
          <Carousel />
          <Card />
          <Carousel />
          <Card />
          <AsideContent />
          <AsideLocator />
        </div>
      )}
      {pageOpen && <Footer />}
    </div>
  );
}

export default Home;
