import React from 'react';
import css from './useDetail.module.scss';

function useDetail() {
  return (
    <div className={css.contentWrap}>
      <div className={css.serviceWrapper}>
        <div className={css.service}>
          <h4>무료 선물 포장 서비스</h4>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </div>
        <div className={css.present}>
          <h4>샘플 & 코튼 백 증정</h4>
          <p>
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </p>
        </div>
      </div>
      <div className={css.imageWrapper}>
        <div className={css.leftContainer}>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5p8HTAsan1kAf7lvy3mglz/927167c016a3c8b8639f46f9352b6721/Aesop-Skin-Parsley-Seed-Facial-Toner-Texture-1440x1800.jpg"
            alt="왼쪽 이미지"
          />
        </div>
        <div className={css.rightContainer}>
          <div className={css.ProductRightDescription}>
            <div className={css.ProductRightDescriptionWrapper}>
              <p>사용법</p>
              <h4 className={css.ProductTitle}>
                젖은 화장솜에 덜어 눈 주위에 지긋이 눌러 아이 메이크업 제품이
                용해될 때까지 기다렸다 닦아냅니다. 여러 번 닦아내줍니다.
              </h4>
              <div className={css.ProductDetailWrapper}>
                <div className={css.amount}>
                  <h2>사용량</h2>
                  <p>반 티스푼</p>
                </div>
                <div className={css.texture}>
                  <h2>텍스처</h2>
                  <p>워터 제형</p>
                </div>
                <div className={css.scent}>
                  <h2>향</h2>
                  <p>허브, 플로럴, 프레시</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default useDetail;
