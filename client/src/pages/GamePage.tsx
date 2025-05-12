import { useLocation } from "react-router-dom";

export function GamePage() {
  const location = useLocation();
  const { myTeam, schedule, mode } = location.state;
  
  return (
    <div>
      <h1>{myTeam.name} - {mode}</h1>
      <p>{schedule[0].home} vs {schedule[0].away}</p>
      <p>게임 진행 중...</p>
      {/* 게임 진행 로직을 여기에 추가 */}
    </div>
  );
}