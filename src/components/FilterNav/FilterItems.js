import React from 'react';
import './FilterItems.module.scss';
import css from './FilterItems.module.scss';

function FilterItems({ listItem }) {
  return (
    <li className={css.itemList}>
      <label>
        <input type="checkbox" id="checkBox" value={listItem} />
        {listItem}
      </label>
    </li>
  );
}
export default FilterItems;
