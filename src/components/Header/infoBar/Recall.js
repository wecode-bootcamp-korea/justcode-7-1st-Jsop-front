import React, { useState } from 'react';
import css from './Recall.module.scss';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
function Recall() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  return (
    <div className={css.Container}>
      <Header setPageOpen={setOpen} />
      <div className={css.title}>
        <div className="logo" onClick={goMain}>
          <img src="/logo-black.png" alt="로고이미지" />
        </div>
        <div className="write">
          <h1>포스트-푸 드롭스와 오일 버너 블렌드 제품 자진 회수 안내</h1>
        </div>
      </div>
      <div className={css.recallTitle}>
        <p>• 포스트-푸 드롭스 100mL</p>
        <p>• 캐서린 오일 버너 블렌드 25mL</p>
        <p>• 이사벨 오일 버너 블렌드 25mL</p>
        <p>• 아누크 오일 버너 블렌드 25mL</p>
        <p>• 베아트리체 오일 버너 블렌드 25mL</p>
        <p>2. 회수 기간 : 2022년 10월 13일 ~ 2022년 12월 31일</p>
        <p>3. 회수 사유 : 어린이보호포장 미흡</p>
        <p>
          4. 회수 방법 : 사용 전 또는 사용 중인 제품과 구매 증빙을 가지고 가까운
          매장 방문 (※ 국문라벨의 수입자가 씨에프코인 제품)
        </p>
        <p>5. 환불 방법 : 제품 구매액에 대한 현금 지급</p>
        <p>
          금번 자진회수로 고객 여러분들께 불편을 드려 죄송합니다. 관련하여 회수
          및 환불 방법 등 추가 문의가 있을 경우 당사 고객서비스팀(070-4370-7510
          또는 aesop@aesop.com)으로 연락 부탁드립니다.
        </p>
        <p>
          이솝은 고객의 건강과 안전을 무엇보다 중요하게 생각하며, 더 나은 상품을
          제공할 수 있도록 노력하겠습니다. 감사합니다.
        </p>
        <p>이솝코리아 유한회사</p>
      </div>
      <Footer />
    </div>
  );
}

export default Recall;
