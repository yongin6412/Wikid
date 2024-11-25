import Image from "next/image";
import style from "./MainPage.module.scss";
import mainImg from "../../../public/assets/icons/mainimg.svg";
import img1 from "../../../public/assets/icons/img1.svg";
import img2 from "../../../public/assets/icons/img2.svg";
import img3 from "../../../public/assets/icons/img3.svg";
import img4 from "../../../public/assets/icons/img4.svg";
import img5 from "../../../public/assets/icons/img5.svg";
import img6 from "../../../public/assets/icons/img6.svg";
import mes1 from "../../../public/assets/icons/mes1.svg";
import mes2 from "../../../public/assets/icons/mes2.svg";
import mes3 from "../../../public/assets/icons/mes3.svg";

function MainPage() {
  return (
    <div className={style.main_container}>
      <section className={style.main_title_container}>
        <div className={style.main_title_box}>
          <div className={style.main_title}>
            <h4>남들이 만드는</h4>
            <h1>나만의 위키</h1>
          </div>
          <div>
            <button className={style.main_title_btn}>위키 만들기</button>
          </div>
          <div>
            <Image
              className={style.main_title_img}
              src={mainImg}
              alt="프로필 이미지"
            />
          </div>
          <div className={style.main_title_line}></div>
        </div>
      </section>
      <section className={style.main_write_container}>
        <div className={style.main_wirter_box}>
          <div className={style.main_wirter_content}>
            <h4>WRITE</h4>
            <p>
              친구의 위키,
              <br />
              직접 작성해 봐요
            </p>
            <Image
              className={style.main_wirter_content_img}
              src={img1}
              alt="이미지1"
            />
          </div>
          <div>
            <Image src={mes3} alt="메시지3" />
          </div>
        </div>
      </section>
      <section className={style.main_share_container}>
        <div className={style.main_share_box}>
          <h4>SHARE</h4>
          <p>
            내 위키 만들고 <br />
            친구에게 공유해요
          </p>
        </div>
        <div className={style.main_share_img_box}>
          <Image src={img2} alt="이미지2" />
          <Image src={img3} alt="이미지3" />
          <Image src={img4} alt="이미지4" />
          <Image src={img5} alt="이미지5" />
        </div>
      </section>
      <section className={style.main_view_container}>
        <div className={style.main_view_box}>
          <div className={style.main_view_content}>
            <h4>VIEW</h4>
            <p>
              친구들이 달아준 <br /> 내용을 확인해 봐요
            </p>
          </div>
          <div className={style.main_view_img_box}>
            <div>
              <Image src={mes2} alt="메시지2" />
            </div>
            <div className={style.main_view_img}>
              <Image src={img6} alt="이미지6" />
              <Image src={mes1} alt="메시지1" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.main_start_mes_container}>
        <h1>나만의 위키 만들어보기</h1>
        <button>지금 시작하기</button>
      </section>
      <footer className={style.main_footer}>
        <div className={style.main_footer_info}>
          <h4>Wikied ⓒ All Rights Reserved</h4>
          <p>사업자 등록번호 123-45-6789 | 대표 : 김용인</p>
          <p>부산광역시 북구 화명동 777, 위키드빌딩</p>
        </div>
        <div className={style.main_footer_provision}>
          <p>서비스 이용약관</p>
          <p>개인정보 취급방침</p>
          <p>전자금융거래 기본약관</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
