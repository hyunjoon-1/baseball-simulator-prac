export async function fetchTeams() {
  try {
    const response = await fetch('http://localhost:8000/teams', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('fetchTeams 오류');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "fetchTeams 요청 중 오류 발생");
    return [];
  }

}