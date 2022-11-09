import React from 'react';
import css from './Forgotpassword.module.scss';

const Forgotpassword = ({ closeBtn }) => {
  return (
    <div className={css.container}>
      <div className={css.forgotpwModal}>
        <div className={css.forgotpwWrapper}>
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
          <div className={css.forgotpwcontent}>
            <h1 className={css.title}>비밀번호 재설정하기</h1>
            <span className={css.content}>
              새 패스워드를 만들기 위한 링크를 전송해드립니다.
            </span>
            <div className={css.inputlabel}>
              <label className={css.label} for={css.emailUrl}>
                <input
                  className={css.emailUrl}
                  type="text"
                  placeholder="이메일 주소"
                />
                <span className={css.inputSpan}>이메일 주소</span>
              </label>
            </div>
            <button className={css.send}>보내기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
