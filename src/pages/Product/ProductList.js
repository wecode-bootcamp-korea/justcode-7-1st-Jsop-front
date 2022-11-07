// 맨 앞에 보여지는 상품 리스트 페이지 껍데기 (데이터는 여기 불러와서)
import React, { useState, useEffect } from 'react';
import css from './ProductList.module.scss';
import CategoryProductList from '../../components/CategoryProductList/CategoryProductList';

function ProductList() {
  const [detail, setDetails] = useState([]);

  useEffect(() => {
    fetch('/data/CategoryProduct.json')
      .then(res => res.json())
      .then(res => {
        setDetails(detail => (detail = res.content));
      });
  }, []);

  return (
    <div className={css.details}>
      <CategoryProductList items={detail} />
    </div>
  );
}

export default ProductList;
