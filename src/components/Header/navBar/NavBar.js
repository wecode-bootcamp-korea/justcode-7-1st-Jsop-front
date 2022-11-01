import React, { useState, useEffect } from 'react';
import css from './NavBar.module.scss';

function NavBar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategory(res.data));
  }, []);

  return (
    <div className={css.container}>
      <ul className={css.left}>
        {category.map(e => (
          <li key={e.id}>
            <button>{e.content}</button>
          </li>
        ))}
        <li>
          <button>
            <img src="images/search.png" alt="glass" />
          </button>
        </li>
      </ul>
      <ul className={css.right}>
        <li>
          <button>로그인</button>
        </li>
        <li>
          <button>카트</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
