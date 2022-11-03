import React from 'react';
import './Info.scss';

const Info = ({ title, content }) => {
  return (
    <div>
      <div className="checkBoxModule">
        <input type="checkbox" />
        <span>{title}</span>
      </div>
      <div className="privacyInfo">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Info;
