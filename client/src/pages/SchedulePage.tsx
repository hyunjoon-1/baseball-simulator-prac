import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { teams } from "../data/Teams";
import type { Match } from "../types/Match";

export function SchedulePage() {
  const { myTeam } = useParams();

  const [schedule, setSchedule] = useState<Match[]>([]);

  useEffect(() => {

    if (myTeam) {
      // 상대팀 랜덤으로 설정
      const randomTeam = Math.floor(Math.random() * teams.length);
      // 내 팀과 랜덤팀 경기
      const myMatch = { home: myTeam, away: teams[randomTeam]! };

      const otherTeams = [...teams];
      // 내 팀 뺴기
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
  
  return (
    <div>
      <h1>{myTeam}</h1>
      <p>일정을 확인하세요</p>
      <div>
        {schedule.map((match, index) => (
          <div key={index}>
            {match.home} vs {match.away}
          </div>
        ))}
      </div>
    </div>
  )
}