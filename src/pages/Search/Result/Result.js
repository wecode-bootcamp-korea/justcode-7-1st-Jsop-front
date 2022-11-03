import css from './Result.module.scss';
function Result({ searchItem }) {
  console.log(searchItem);
  if (searchItem.length > 0) {
    return (
      <div className={css.container}>
        {searchItem.map(eachItem => (
          <h1 key={eachItem.id}>{eachItem.title}</h1>
        ))}
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        <h1>죄송하지만 검색 결과를 찾을 수 없습니다.</h1>
      </div>
    );
  }
}

export default Result;
