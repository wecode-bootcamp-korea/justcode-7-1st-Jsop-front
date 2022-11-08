import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './CategoryProduct.module.scss';
// 이름 바꾸기

function CategoryProduct({ id, image_path, title, type, use }) {
  // 함수 이름 바꾸기
  const navigate = useNavigate();
  return (
    <div className={css.container} onClick={() => navigate(`/detail/${id}`)}>
      {/* 네비게이트 안 주소 바꾸기 */}
      <div className={css.containerWrapper}>
        <div className={css.mainContainer}>
          <img src={image_path} alt="상품이미지" />
          <div className={css.productName}>
            <h4>{title}</h4>
            <p className={css.productSize}>2 사이즈 / ₩47,000원부터</p>
            <div className={css.productWrap}>
              <div className={css.productType}>
                <h2>피부 타입</h2>
                <p>{type}</p>
              </div>
              <div className={css.productUse}>
                <h2>사용감</h2>
                <p>{use}</p>
              </div>
            </div>
          </div>
        </div>
        <button className={css.addCartButton}>
          <span className={css.addCart}>카트에 추가하기 — ₩47,000</span>
        </button>
      </div>
    </div>
  );
}
// 이 카드 눌리면 상품 눌리면 상페 페이지로 이동함
export default CategoryProduct;
