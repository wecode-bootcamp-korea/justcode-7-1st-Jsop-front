// 카드 6개 돌리기 - 맵으로 돌리기만 하기
import React from 'react';
import CategoryProduct from '../CategoryProduct/CategoryProduct';
//카드 1개 만들어 놓은거 불러오기
import css from './CategoryProductList.module.scss';

function CategoryProductList(props) {
  const { items } = props;
  return (
    <div className={css.list}>
      {items &&
        items.map(content => (
          <CategoryProduct
            className={css.container}
            key={content.id}
            id={content.id}
            title={content.title}
            type={content.type}
            use={content.use}
            image_path={content.image_path}
          />
        ))}
    </div>
  );
}
// 여기 있는 아이템은 몬스터즈 메인 페이지와 연결됨
export default CategoryProductList;
