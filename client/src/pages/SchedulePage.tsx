import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { teams } from "../data/Teams";
// Match 타입 가져오기
import type { Match } from "../types/Match";
import { ModeModal } from "../components/ModeModal";
import { GameMatch } from "../components/GameMatch";

export function SchedulePage() {
  const { myTeam } = useParams();
  const [schedule, setSchedule] = useState<Match[]>([]);
  const [selectMode, setSelectMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if (myTeam) {
      // 상대팀 랜덤으로 설정
      const randomTeam = Math.floor(Math.random() * teams.length);
      // 내 팀과 랜덤팀 경기
      const myMatch = { home: myTeam, away: teams[randomTeam]! };

      const otherTeams = [...teams];
      // 내 팀과 경기하는 팀 뺴기
      otherTeams.splice(randomTeam, 1);

      const otherMatches = [];
      while (otherTeams.length >= 2) {
        const home = otherTeams.pop()!;
        const away = otherTeams.pop()!;
        otherMatches.push({ home, away });
      }
      
      setSchedule([myMatch, ...otherMatches]);
      }
  }, [myTeam]);
  
  // 게임 시작 버튼 클릭 시
  const startGame = () => setSelectMode(true);
  const modeSelect = (mode: string) => {
    setSelectMode(false);
    console.log(`경기 진행 방식: ${mode}`);
    navigate("/game", {
      state: {
        myTeam,
        schedule,
        mode
      }
    });
  }
  
  return (
    <div>
      <h1>{myTeam}</h1>
      <p>일정을 확인하세요</p>
      <div>
        {schedule.map((match, index) => (<GameMatch key={index} match={match} />))}
      </div>

      <button onClick={startGame}>게임 시작</button>
      {selectMode && <ModeModal onSelect={modeSelect} />}
    </div>
  )
}