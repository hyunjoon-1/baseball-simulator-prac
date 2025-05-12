import { useState,useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import type { Team } from "../types/Team";
import type { Match } from "../types/Match";
import { ModeModal } from "../components/ModeModal";
import { GameMatch } from "../components/GameMatch";

export function SchedulePage() {
  const location = useLocation();
  const { myTeam, teams }: { myTeam: Team; teams: Team[] } = location.state;

  const [schedule, setSchedule] = useState<Match[]>([]);
  const [selectMode, setSelectMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (myTeam && teams.length > 0) {
      const otherTeams = teams.filter(t => t.name !== myTeam.name);
      const randomOpponent = otherTeams[Math.floor(Math.random() * otherTeams.length)];

      const remainingTeams = otherTeams.filter(t => t.name !== randomOpponent.name);
      const otherMatches = [];
      while (remainingTeams.length >= 2) {
        const home = remainingTeams.pop()!;
        const away = remainingTeams.pop()!;
        otherMatches.push({ home: home.name, away: away.name });
      }

      const myMatch = { home: myTeam.name, away: randomOpponent.name };
      setSchedule([myMatch, ...otherMatches]);
    }
  }, [myTeam, teams]);

  const startGame = () => setSelectMode(true);

  const modeSelect = (mode: string) => {
    setSelectMode(false);
    console.log(`경기 진행 방식: ${mode}`);
    navigate("/game", {
      state: {
        myTeam,
        schedule,
        mode,
      },
    });
  };

  return (
    <div>
      <h1>{myTeam.name}</h1>
      <p>일정을 확인하세요</p>
      <div>
        {schedule.map((match, index) => (
          <GameMatch key={index} match={match} />
        ))}
      </div>
      <button onClick={startGame}>게임 시작</button>
      {selectMode && <ModeModal onSelect={modeSelect} />}
    </div>
  );
}