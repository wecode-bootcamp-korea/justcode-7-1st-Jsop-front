import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgotpassword.scss';

const Forgotpassword = () => {
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate('/login');
  };

  return (
    <div className="forgotpwModal">
      <div className="forgotpwWrapper">
        <div className="buttonWrapper">
          <button className="backButton" onClick={goBackPage}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6813/6813862.png"
              alt="backSpaceBtn"
            />
          </button>
          <button className="exitButton">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
              alt="exitBtn"
            />
          </button>
        </div>
        <div className="forgotpwcontent">
          <h1 className="title">비밀번호 재설정하기</h1>
          <span className="content">
            새 패스워드를 만들기 위한 링크를 전송해드립니다.
          </span>
          <input type="text" placeholder="이메일 주소" />
          <button>보내기</button>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
