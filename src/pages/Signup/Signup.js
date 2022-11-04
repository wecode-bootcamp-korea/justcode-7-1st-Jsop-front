import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';
import Info from './Info';

const Signup = () => {
  const navigate = useNavigate();
  const [infoData, setInfoData] = useState([]);
  const [pwShow, setPwShow] = useState({ type: 'password', text: '보기' });
  const pwShowBtn = e => {
    if (pwShow.text === '보기') {
      setPwShow(prevState => ({
        ...prevState,
        type: 'text',
        text: '숨기기',
      }));
    } else {
      setPwShow({ type: 'password', text: '보기' });
    }
  };

  useEffect(() => {
    fetch('./data/Info.json')
      .then(res => res.json())
      .then(data => setInfoData(data.info));
  }, []);

  const goBackPage = () => {
    navigate('/login');
  };

  return (
    <div className="signupModal">
      <div className="signupWrapper">
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
        <div className="loginForm">
          <span className="signupName">회원가입</span>
          <span className="signupInfo">
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </span>
          <div className="nameInputWrapper">
            <input className="lastNameInput" type="text" placeholder="성" />
            <input className="firstNameInput" type="text" placeholder="이름" />
          </div>
          <input className="emailInput" type="text" placeholder="이메일 주소" />
          <div className="passwordInputWrapper">
            <input
              className="passwordInput"
              placeholder="비밀번호"
              type={pwShow.type}
            />
            <button className="passwordView" onClick={pwShowBtn}>
              {pwShow.text}
            </button>
          </div>
          <div className="checkBoxModule">
            <input type="checkbox" />
            <span> 본인은 만 14세 이상입니다 (필수)</span>
          </div>
          {infoData.map(info => {
            return (
              <Info key={info.id} title={info.title} content={info.content} />
            );
          })}
          <button className="signupButton">회원가입</button>
          <button className="haveIdButton">
            이미 이솝 계정을 가지고 계십니까?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
