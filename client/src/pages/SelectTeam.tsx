import { useNavigate } from "react-router-dom";
import { teams } from "../data/Teams";

export function SelectTeamPage() {
  const navigate = useNavigate();

 

  const teamClick = (team: string) => {
    console.log(`${team} 팀 선택`);
    navigate(`/team/${team}/schedule`);
  }

    return (
      <div>
        <h1>구단 선택</h1>
        <p>구단을 선택하세요</p>
        <div>
          {teams.map((team) => (
            <button key={team} onClick={() => teamClick(team)}>
              {team}
            </button>
          ))}
        </div>
      </div>
    )
  }
