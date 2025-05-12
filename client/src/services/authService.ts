export const login = async (id: string, password: string) => {
  // 로그인 요청
  try {
    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ id, password })
    });

    if (!res.ok) {
      throw new Error('로그인 실패');
    }
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.error("로그인 요청 중 오류 발생:", error);
    return null;
  }

}