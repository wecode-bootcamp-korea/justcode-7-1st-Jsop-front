import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  /* password의 타입에 따른 텍스트가 보이는 방법을 다르게 하기 위해 useState사용 */
  const [pwShow, setPwShow] = useState({ type: 'password', text: '보기' });

  /** 버튼을 클릭했을때 onclick 이벤트로 줄 함수 생성.
   *  버튼 클릭시 패스워드가 text 보기 일시 세터함수 setPwShow를 타입 텍스트 나타내는 버튼의 텍스트는 숨기기
   * 그렇지 않을 경우 타입은 패스워드 나타내는 버튼의 텍스트는 보기이다.
   */
  const pwShowBtn = () => {
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

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToForgotPw = () => {
    navigate('/forgotpw');
  };

  return (
    <div className="loginModal">
      <div className="loginWrapper">
        <button className="exitButton">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
            alt="exitBtn"
          />
        </button>
        <div className="loginModule">
          <h1 className="loginName">로그인</h1>
          <div className="loginForm">
            <input
              className="emailInput"
              type="text"
              placeholder="이메일 주소"
            />
            <div className="passwordInputWrapper">
              <input
                className="passwordInput"
                type={pwShow.type}
                placeholder="비밀번호"
              />
              <button className="passwordView" onClick={pwShowBtn}>
                {pwShow.text}
              </button>
            </div>
            <button className="passwordReset" onClick={goToForgotPw}>
              비밀번호 재설정하기
            </button>
            <button className="loginButton">로그인</button>
          </div>
          <span className="memberComment">회원이 아니신가요?</span>
          <button className="signupButton" onClick={goToSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
