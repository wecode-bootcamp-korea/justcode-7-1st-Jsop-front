import React, { useState, useEffect, useRef } from 'react';
import css from './Login.module.scss';
import Forgotpassword from './Forgotpassword';
import Signup from '../Signup/Signup';
import { useNavigate } from 'react-router-dom';

const Login = ({ closeBtn }) => {
  const [pwShow, setPwShow] = useState({ type: 'password', text: '보기' });
  const [pwModal, setPwModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const email = useRef();
  const pw = useRef();
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

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
  const openPw = () => {
    setPwModal(!pwModal);
  };

  const openSignup = () => {
    setSignUpModal(!signUpModal);
  };

  const goToProduct = () => {
    navigate('/product');
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleLogin = () => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.current.value,
        password: pw.current.value,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token !== undefined) {
          localStorage.setItem('token', result.token);
          alert('로그인에 성공하였습니다!');
          document.location.href = '/';
        } else {
          alert('이메일과 비밀번호를 확인해주세요!');
        }
      });
  };

  const handleInput = () => {
    pw.current.value.includes('@') && pw.current.value.length > 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <div className={css.container}>
      <div className={css.loginModal}>
        <button className={css.exitButton} onClick={closeBtn}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
            alt="exitBtn"
          />
        </button>
        <div className={css.loginModule}>
          <h1 className={css.loginName}>로그인</h1>
          <div className={css.loginForm}>
            <div className={css.emailInputWrapper}>
              <label className={css.label} for={css.emailInput}>
                <input
                  className={css.emailInput}
                  type="text"
                  placeholder="이메일 주소"
                  ref={email}
                />
                <span className={css.inputSpan}>이메일 주소</span>
              </label>
            </div>
            <div className={css.passwordInputWrapper}>
              <label className={css.label} for={css.passwordInput}>
                <input
                  className={css.passwordInput}
                  type={pwShow.type}
                  placeholder="비밀번호"
                  ref={pw}
                  onChange={handleInput}
                />
                <span className={css.inputSpan}>비밀번호</span>
              </label>
              <button
                className={css.passwordView}
                onClick={pwShowBtn}
                style={{ backgroundColor: isValid ? '#333333' : '#000000' }}
              >
                {pwShow.text}
              </button>
            </div>
            <button className={css.passwordReset} onClick={openPw}>
              비밀번호 재설정하기
            </button>
            {pwModal ? <Forgotpassword closeBtn={closeBtn} /> : null}
            <button className={css.loginButton} onClick={handleLogin}>
              로그인
            </button>
          </div>
          <span className={css.memberComment}>회원이 아니신가요?</span>
          <button className={css.signupButton} onClick={openSignup}>
            회원가입
          </button>
          {signUpModal ? <Signup closeBtn={closeBtn} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
