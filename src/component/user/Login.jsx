import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Login.css'

const loginFunc = (e) => {
  e.preventDefault();
}

export default function Login() {
  let navigate = useNavigate();

  return (
    <div className="loginContainer">
      <h3 className="loginHeader">로그인</h3>

      <form className="loginBody" onSubmit={loginFunc}>
        <label>아이디</label>
        <input />
        <label>비밀번호</label>
        <input />
        <button>로그인</button>
      </form>

      <span className="or-txt">또는</span>
      
      {/* 소셜로그인 */}
      <ul className="loginType">
        <li style={{backgroundColor: "#FFDE02"}}><img src="/kakao.svg" /></li>
        <li style={{backgroundColor: "#1EC800"}}><img src="/naver.svg" /></li>
        <li style={{backgroundColor: "#406BBE"}}><img src="/facebook.svg" /></li>
			</ul>

      <div className="register">
        <span style={{marginRight: 5}}>줍고가 처음이신가요?</span>
        <span className="registerBtn" onClick={() => {navigate("/register")}}>회원가입</span>
      </div>
    </div>
  )
}
