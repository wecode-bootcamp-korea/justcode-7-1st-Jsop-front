import React, { useState, useEffect } from 'react';
import css from './MainAside.module.scss';

function MainAside() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/mainProduct.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.mainAside);
      });
  }, []);

  return (
    <div className={css.asideWrap}>
      {item.map(({ id, topic, title, body }) => (
        <div key={id}>
          <p className={css.topic}>{topic}</p>
          <p className={css.title}>{title}</p>
          <p className={css.body}>{body}</p>
          <button className={css.asideBtn}>
            <span>더 읽기</span>
            <span>→</span>
          </button>
        </div>
      ))}
    </div>
  );
}
export default MainAside;
