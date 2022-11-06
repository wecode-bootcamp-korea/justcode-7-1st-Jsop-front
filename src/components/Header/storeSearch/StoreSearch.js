import css from './StoreSearch.module.scss';

function StoreSearch() {
  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <div className={css.imgBox}>
          <img src="./logo-black.png" alt="logo" />
        </div>
        <div className={css.inputBox}>
          <input type="text" />
          <button>
            <img src="./next.png" alt="arrow" />
          </button>
        </div>
      </div>
      <div className={css.secondBox}>
        <div className={css.map}>지도</div>
      </div>
    </div>
  );
}

export default StoreSearch;
