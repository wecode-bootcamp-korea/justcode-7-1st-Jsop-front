import React, { useState } from 'react';
import SideBar from '../sideBar/SideBar';
import css from './InfoBar.module.scss';

function InfoBar({ content, type, url }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  if (type === 'page') {
    return (
      <div className={css.pageContainer}>
        <a href={url}>{content}</a>
      </div>
    );
  } else if (type === 'slide') {
    return (
      <div className={css.slideContainer}>
        <button onClick={handleOpen}>
          <p>{content}</p>
          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt="plus" />
        </button>
        {open && <SideBar open={open} setOpen={setOpen} />}
      </div>
    );
  }
}

export default InfoBar;
