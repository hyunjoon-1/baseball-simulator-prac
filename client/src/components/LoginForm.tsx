// * 로그인 폼 컴포넌트
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export function LoginForm() {
  // 아이디, 비밀번호 상태 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // 로그인 버튼 함수
  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 함수 login은 로그인 Fetch API를 호출하는 함수
    const userInfo = await login(id, password);
    if (userInfo) {
      console.log("로그인 성공:", userInfo);
      // 로그인 성공시 세션스토리지에 저장
      sessionStorage.setItem("user", JSON.stringify(userInfo.user));

      // 로그인 성공 후 이동할 페이지로 리다이렉트
      navigate("/select-team");
    } else {
      console.log("로그인 실패");
    }
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