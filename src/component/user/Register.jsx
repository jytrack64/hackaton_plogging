import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterFunc = (e) => {
  e.preventDefault();
}

export default function Register() {
  let navigate = useNavigate();

  return (
    <div className="loginContainer">
      <h3 className="loginHeader">회원가입</h3>

      <form className="loginBody" style={{marginBottom: 40}} onSubmit={RegisterFunc}>
        <label>아이디</label>
        <input type="text" />
        <label>이름</label>
        <input type="text" />
        <label>비밀번호</label>
        <input type="password" />
        <label>비밀번호 확인</label>
        <input type="password" />
        <button>회원가입</button>
      </form>

      <span className="or-txt">또는</span>
      
      {/* 소셜로그인 */}
      <ul className="loginType" style={{marginBottom: 40}}>
        <li style={{backgroundColor: "#FFDE02"}}><img src="/kakao.svg" /></li>
        <li style={{backgroundColor: "#1EC800"}}><img src="/naver.svg" /></li>
        <li style={{backgroundColor: "#406BBE"}}><img src="/facebook.svg" /></li>
			</ul>

      <div className="register">
        <span style={{marginRight: 5}}>이미 회원이신가요?</span>
        <span className="registerBtn" onClick={() => {navigate("/login")}}>로그인</span>
      </div>
    </div>
  )
}
