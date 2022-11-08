import css from './CategoryProductDetail.module.scss';

function CategoryProductDetail({ props }) {
  const { id, title, img_url, description, price, properties } = props;
  return (
    <div>
      <div className={css.ProductContentWrapper} key={id}>
        <div className={css.ProductLeftImage}>
          <picture className={css.ImageWrapper}>
            <img alt="상품이미지" src={img_url} />
          </picture>
        </div>
        <div className={css.ProductRightDescription}>
          <div className={css.ProductRightDescriptionWrapper}>
            <nav className={css.ProductDetailCategory}>
              <ul>
                <li className={css.ProductDetailFirstCategory}>
                  <span>스킨 </span>
                </li>
                <li className={css.ProductDetailSecondCategory}>
                  <span>토너</span>
                </li>
              </ul>
            </nav>
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
                {/* <div className={css.ingredientPlusButton}>
                      <i className={css.faCirclePlus} />
                    </div> */}
              </div>
            </div>
            <div className={css.ProductSizeSelect}>
              <h2>사이즈</h2>
              <ul>
                <li>
                  <label className={css.RadioButton}>
                    <input
                      className={css.RadioInput}
                      name="size"
                      type="radio"
                    />
                    <span className={css.RadioContent}>{price[0]}ml</span>
                  </label>
                </li>
                <li>
                  <label className={css.RadioButton}>
                    <input
                      className={css.RadioInput}
                      name="size"
                      type="radio"
                    />
                    <span className={css.RadioContent}>{price[1]}ml</span>
                  </label>
                </li>
              </ul>
              <button className={css.AddToCartButton} type="button">
                <span className={css.AddToCartPrice}>
                  카트에 추가하기 — ₩47,000
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
