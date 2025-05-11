import { useLocation } from "react-router-dom"
import { useState } from "react";

export function GamePage() {
  const location = useLocation();
  const { myTeam, schedule, mode } = location.state;

  const { home, away } = schedule[0];
  const repeatCount = mode === "1경기" ? 1 : 3;

  const [currentRound, setCurrentRound] = useState(1);

  return (
    <div>
      <h1>{myTeam} - {mode} 시작</h1>
      <h2>{currentRound}차전: {home} vs {away}</h2>
      
      <button onClick={() => setCurrentRound(prev => prev + 1)} disabled={currentRound >= repeatCount}>
        {currentRound < repeatCount ? "다음 경기 진행" : "경기 종료"}
      </button>
    </div>
  )
}