import React from 'react';
import './Home.scss';
import MainProduct from './MainProduct';
import Carousel from '../../components/Carousel/Carousel';
import AsideContent from './AsideContent';
import AsideLocator from './AsideLocator';

function Home() {
  return (
    <div className="mainWrap">
      {/* nav 자리 */}
      <div className="mainContent">
        <MainProduct />
        <Carousel />
        <AsideContent />
        <Carousel />
        <AsideLocator />
      </div>
      {/* footer 자리  */}
    </div>
  );
}

export default Home;
