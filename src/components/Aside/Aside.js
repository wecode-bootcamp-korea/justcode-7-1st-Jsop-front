import React from 'react';
import css from './Aside.module.scss';

function Aside() {
  return (
    <div className={css.asideWrap}>
      <p className={css.topic}>아로마의 만남</p>
      <p className={css.title}>존재의 울림: 이더시스 오 드 퍼퓸</p>
      <p className={css.body}>
        제이솝 아더토피아 향수 컬렉션의 다음 장에서 매혹적인 현대적 신화가
        펼쳐집니다.
      </p>
      <button className={css.asideBtn}>
        <span>더 읽기</span>
        <span>→</span>
      </button>
    </div>
  );
}
export default Aside;
