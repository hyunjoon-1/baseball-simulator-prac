// * 로그인 폼 컴포넌트
import { useState } from "react";

export function LoginForm() {
  // 아이디, 비밀번호 상태 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 버튼 함수
  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 콘솔 확인용');


    // 로그인 fetch 사용공간


  }

  return (
    <form onSubmit={loginSubmit}>
      <input
        type='text'
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type='password'
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
    </form>
  )
}