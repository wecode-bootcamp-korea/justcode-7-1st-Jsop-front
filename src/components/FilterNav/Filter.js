import React, { useEffect, useState } from 'react';
import FilterItemList from './FilterItemList';
import css from './Filter.module.scss';

function Filter() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/filter.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.filter);
      });
  }, []);

  return (
    <div className={css.filter}>
      <div className={css.filterList}>
        {item.map(filter => {
          return <FilterItemList key={filter.id} {...filter} />;
        })}
      </div>
    </div>
  );
}

export default Filter;
