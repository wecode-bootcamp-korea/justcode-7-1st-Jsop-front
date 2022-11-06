import React from 'react';
import FilterItems from './FilterItems';
import css from './Filter.module.scss';

function Filter({ detail, all, list }) {
  return (
    <div className={css.filterItemWrap}>
      <span>{detail}</span>
      <ul>
        <FilterItems listItem={all} />
        {list.map((listItem, itemId) => {
          return <FilterItems key={itemId} listItem={listItem} />;
        })}
      </ul>
    </div>
  );
}

export default Filter;
