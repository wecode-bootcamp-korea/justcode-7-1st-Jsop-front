import React, { useState, useEffect } from 'react';
import css from './Signup.module.scss';
import Info from './Info';

const Signup = ({ closeBtn }) => {
  const [infoData, setInfoData] = useState([]);
  const [pwShow, setPwShow] = useState({ type: 'password', text: '보기' });
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');

  const onFirstNameHandler = event => {
    setFirst_name(event.currentTarget.value);
  };
  const onLastNameHandler = event => {
    setLast_name(event.currentTarget.value);
  };
  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const signUp = () => {
    fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'USER_CREATED'
          ? (alert('회원가입 성공'), closeBtn(true))
          : alert('회원가입 실패')
      );
  };

  return (
    <div className={css.container}>
      <div className={css.signupModal}>
        <div className={css.buttonWrapper}>
          <button className={css.backButton} onClick={closeBtn}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6813/6813862.png"
              alt="backSpaceBtn"
            />
          </button>
          <button className={css.exitButton} onClick={closeBtn}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
              alt="exitBtn"
            />
          </button>
        </div>
        <div className={css.loginForm}>
          <span className={css.signupName}>회원가입</span>
          <span className={css.signupInfo}>
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </span>
          <div className={css.nameInputWrapper}>
            <label className={css.label} for={css.lastNameInput}>
              <input
                className={css.lastNameInput}
                type="text"
                placeholder="성"
                value={last_name}
                onChange={onLastNameHandler}
              />
              <span className={css.inputSpan}>성</span>
            </label>
            <label className={css.label} for={css.firstNameInput}>
              <input
                className={css.firstNameInput}
                type="text"
                placeholder="이름"
                value={first_name}
                onChange={onFirstNameHandler}
              />
              <span className={css.inputSpan}>이름</span>
            </label>
          </div>
          <label className={css.label} for={css.emailInput}>
            <input
              className={css.emailInput}
              type="text"
              placeholder="이메일 주소"
              value={email}
              onChange={onEmailHandler}
            />
            <span className={css.inputSpan}>이메일 주소</span>
          </label>

          <div className={css.passwordInputWrapper}>
            <label className={css.label} for={css.passwordInput}>
              <input
                className={css.passwordInput}
                placeholder="비밀번호"
                type={pwShow.type}
                value={password}
                onChange={onPasswordHandler}
              />
              <span className={css.inputSpan}>비밀번호</span>
            </label>
            <button className={css.passwordView} onClick={pwShowBtn}>
              {pwShow.text}
            </button>
          </div>
          <div className={css.checkBoxModule}>
            <input className={css.checkBox} type="checkbox" />
            <span className={css.myInfo}>본인은 만 14세 이상입니다 (필수)</span>
          </div>
          {infoData.map(info => {
            return (
              <Info key={info.id} title={info.title} content={info.content} />
            );
          })}
          <button className={css.signupButton} onClick={signUp}>
            회원가입
          </button>
          <button className={css.haveIdButton}>
            이미 이솝 계정을 가지고 계십니까?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
