
export function SignupPage() {

  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <button type="submit">회원가입</button>
      </form>
      <p>이미 회원이신가요? <a href="/">로그인</a></p>
    </div>
  )
} 