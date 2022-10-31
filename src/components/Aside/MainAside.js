import React from 'react';
import css from './MainAside.module.scss';

function Aside() {
  return (
    <div className={css.asideWrap}>
      <p className={css.topic}>숲,온기,경이로움</p>
      <p className={css.title}>이더시스 오 드 퍼퓸</p>
      <p className={css.body}>
        스파이시 블랙 패퍼,유향 그리고 매력적인 샌달우드
      </p>
      <button className={css.asideBtn}>
        <span>이더시스 보기</span>
        <span>→</span>
      </button>
    </div>
  );
}
export default Aside;
