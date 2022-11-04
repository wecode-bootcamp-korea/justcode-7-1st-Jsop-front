import React from 'react';
import css from './Footer.module.scss';

function Footer() {
  return (
    <div>
      <div className={css.footer}>
        <section className={css.sustain}>
          <h3>지속가능성</h3>
          <div className={css.borderline} />
          <div>
            <p>
              이솝은 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은
              브랜드입니다.
              <a href="#blank" className={css.more}>
                더 알아보기
              </a>
            </p>
          </div>
        </section>
        <section className="order">
          <h3 className="">주문 및 지원</h3>
          <div className="border-line" />
          <ul className="">
            <li>
              <a className="" href="#blank" target="_self" title="문의 하기">
                문의 하기
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_blank"
                title="자주 묻는 질문"
              >
                자주 묻는 질문 →
              </a>
            </li>
            <li>
              <a className="" href="#blank" target="_blank" title="배송">
                배송 →
              </a>
            </li>
            <li>
              <a className="" href="#blank" target="_blank" title="반품">
                반품 →
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_blank"
                title="배송 조회하기"
              >
                배송 조회하기 →
              </a>
            </li>
            <li>
              <a className="" href="#blank" target="_self" title="주문 내역">
                주문 내역
              </a>
            </li>
            <li>
              <a className="" href="#blank" target="_self" title="이용 약관">
                이용 약관
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_self"
                title="자진 회수 안내"
              >
                자진 회수 안내
              </a>
            </li>
          </ul>
        </section>
        <section className="service">
          <h3 className="">서비스</h3>
          <div className="border-line" />
          <ul className="">
            <li>
              <a className="" href="#blank" target="_self" title="기업체 구매">
                기업체 구매
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_self"
                title="페이셜 어포인트먼트"
              >
                페이셜 어포인트먼트
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_self"
                title="1:1 채팅 상담"
              >
                1:1 채팅 상담
              </a>
            </li>
            <li>
              <a
                className=""
                href="#blank"
                target="_self"
                title="린스 앤 리턴 캠페인"
              >
                린스 앤 리턴 캠페인
              </a>
            </li>
          </ul>
        </section>
        <section className="position">
          <h3 className="">위치 기본 설정</h3>
          <div className="border-line" />
          <ul className="">
            <li className="">
              <span className="">배송: </span>
              <button className="more" title="대한민국" type="button">
                대한민국
              </button>
            </li>
            <li className="">
              <span className="">언어: </span>
              <a className="more" href="#blank">
                한국어
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
