import React from 'react';
import css from './InfoBar.module.scss';

function InfoBar({ content, type, url, func }) {
  if (type === 'page') {
    return (
      <div className={css.pageContainer}>
        <a href={url}>{content}</a>
      </div>
    );
  } else if (type === 'slide') {
    return (
      <div className={css.slideContainer}>
        <button>
          <p>{content}</p>
          <img src="./images/plus.png" alt="plus" />
        </button>
      </div>
    );
  }
}

export default InfoBar;
