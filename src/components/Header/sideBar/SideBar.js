import React, { useState, useEffect } from 'react';
import css from './SideBar.module.scss';
function SideBar() {
  const [side, setSide] = useState([]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    fetch('/data/sidebar.json')
      .then(res => res.json())
      .then(res => setSide(res.data));
  }, []);

  const change = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <div className={css.container}>
        <button onClick={e => change(e)}>
          <img src="./images/cancel.png" alt="cancel" />
        </button>
        <div>
          <h2>전 구매 무료 배송</h2>
          {side.map(e => (
            <div key={e.id}>
              <h2>{e.title}</h2>
              <p>{e.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideBar;
