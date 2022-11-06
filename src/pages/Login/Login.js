import React, { useState, useEffect } from 'react';
import css from './Login.module.scss';
import Forgotpassword from './Forgotpassword';
import Signup from '../Signup/Signup';

const Login = ({ closeBtn }) => {
  const [pwShow, setPwShow] = useState({ type: 'password', text: '보기' });
  const [pwModal, setPwModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

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
                />
                <span className={css.inputSpan}>비밀번호</span>
              </label>
              <button className={css.passwordView} onClick={pwShowBtn}>
                {pwShow.text}
              </button>
            </div>
            <button className={css.passwordReset} onClick={openPw}>
              비밀번호 재설정하기
            </button>
            {pwModal ? <Forgotpassword closeBtn={closeBtn} /> : null}
            <button className={css.loginButton}>로그인</button>
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
