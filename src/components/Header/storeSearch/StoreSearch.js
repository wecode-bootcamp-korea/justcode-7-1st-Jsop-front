import React, { useEffect } from 'react';
import css from './StoreSearch.module.scss';
const { kakao } = window;
function StoreSearch() {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      '서울특별시 중구 소공로 63 신세계백화점 본점 신관 1층',
      function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:170px;color:black;text-align:center;padding:2px 0;">이솝 신세계 백화점 본점</div>',
          });
          infowindow.open(map, marker);
          map.setCenter(coords);
        }
      }
    );
  }, []);
  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <div className={css.imgBox}>
          <img src="./logo-black.png" alt="logo" />
        </div>
        <div className={css.inputBox}>
          <h3>이솝 신세계 백화점 본점</h3>
          <h4>서울특별시 중구 소공로 63 신세계백화점 본점 신관 1층</h4>
          <h4>서울특별시 중구 충무로1가 52-5</h4>
          <h4>TEL: 02-310-5118</h4>
          <h4>영업시간: 매일 10:30 - 20:00</h4>
          <button>
            <img src="./next.png" alt="arrow" />
          </button>
        </div>
      </div>
      <div className={css.secondBox}>
        <div className={css.map}>
          <div
            id="myMap"
            style={{
              width: '1120px',
              height: '840px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StoreSearch;
