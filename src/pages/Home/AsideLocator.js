import React from 'react';
import Aside from '../../components/Aside/Aside';
import css from './AsideLocator.module.scss';

function AsideContent() {
  return (
    <div className={css.Container}>
      <Aside />
      <img src="/images/perfume.png" alt="향수 이미지" />
    </div>
  );
}
export default AsideContent;
