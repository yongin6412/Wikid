import Link from "next/link";
import style from "./SignupPage.module.scss";

function SignupPage() {
  return (
    <div className={style.signup_container}>
      <div className={style.form_container}>
        <h3>회원가입</h3>
        <form className={style.signup_form_box}>
          <div className={style.signup_input_box}>
            <label>이름</label>
            <div>
              <input placeholder="이름을 입력해 주세요" />
            </div>
          </div>
          <div className={style.signup_input_box}>
            <label>이메일</label>
            <div>
              <input placeholder="이메일을 입력해 주세요" />
            </div>
          </div>
          <div className={style.signup_input_box}>
            <label>비밀번호</label>
            <div>
              <input placeholder="비밀번호를 입력해 주세요" />
            </div>
          </div>
          <div className={style.signup_input_box}>
            <label>비밀번호 확인</label>
            <div>
              <input placeholder="비밀번호를 입력해 주세요" />
            </div>
          </div>
          <div>
            <button className={style.btn}>가입하기</button>
          </div>
        </form>
      </div>
      <p>
        이미 회원이신가요?
        <span>
          <Link href={"/login"}>로그인하기</Link>
        </span>
      </p>
    </div>
  );
}

export default SignupPage;
