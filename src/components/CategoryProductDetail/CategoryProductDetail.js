import css from './CategoryProductDetail.module.scss';
import { useNavigate } from 'react-router-dom';
function CategoryProductDetail(props) {
  const { id, title, img_url, description, price, properties } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div className={css.ProductContentWrapper} key={id}>
        <div
          className={css.logoContainer}
          onClick={() => {
            navigate('/');
          }}
        >
          <img src="/logo-black.png" alt="로고이미지" />
        </div>
        <div className={css.ProductLeftImage}>
          <picture className={css.ImageWrapper}>
            <img alt="상품이미지" src={img_url} />
          </picture>
        </div>
        <div className={css.ProductRightDescription}>
          <div className={css.ProductRightDescriptionWrapper}>
            <header className={css.ProductName}>
              <h1 className={css.ProductTitle}>{title}</h1>
              <p className={css.ProductDescription}>{description}</p>
            </header>
            <div className={css.ProductDetailWrapper}>
              <div className={css.type}>
                {properties
                  .filter(props => props.types === '피부 타입')
                  .map(({ types, values }) => (
                    <div className={css.productUse} key={types}>
                      <h2>{types}</h2>
                      <p className={css.typeValue}>{values}</p>
                    </div>
                  ))}
              </div>
              <div className={css.use}>
                {properties
                  .filter(props => props.types === '사용감')
                  .map(({ types, values }) => (
                    <div className={css.productUse} key={types}>
                      <h2>{types}</h2>
                      <p className={css.typeValue}>{values}</p>
                    </div>
                  ))}
              </div>
              <div className={css.ingredient}>
                {properties
                  .filter(props => props.types === '주요 성분')
                  .map(({ types, values }) => (
                    <div className={css.productUse} key={types}>
                      <h2>{types}</h2>
                      <p className={css.typeValue}>{values}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className={css.ProductSizeSelect}>
              <h2>사이즈</h2>
              <ul>
                <li>{price[0][0]}</li>
              </ul>
              <button className={css.AddToCartButton} type="button">
                <span className={css.AddToCartPrice}>
                  카트에 추가하기 - ₩ {price[0][1]}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryProductDetail;
