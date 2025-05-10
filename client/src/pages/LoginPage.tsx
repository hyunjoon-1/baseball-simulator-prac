import { LoginForm } from "../components/LoginForm"

export function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <LoginForm />
      <p>아직 회원이 아니신가요? <a href="/signup">회원가입</a></p>
      <p>비밀번호를 잊으셨나요? <a href="/reset-password">비밀번호 찾기</a></p>
    </div>
  )
}