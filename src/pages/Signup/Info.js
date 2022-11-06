import React from 'react';
import css from './Info.module.scss';

const Info = ({ title, content }) => {
  return (
    <div className={css.container}>
      <div className={css.checkBoxModule}>
        <input className={css.checkBox} type="checkbox" />
        <span>{title}</span>
      </div>
      <div className={css.privacyInfo}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Info;
