import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchTeams } from "../services/teamService";
import type { Team } from "../types/Team";

export function SelectTeamPage() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Team[]>([]);
 
  useEffect(() => {
    fetchTeams()
      .then(setTeams)
      .catch(console.error);
  }, [])


  const teamClick = (team: Team) => {
    console.log(`${team.name} 팀 선택`);
    navigate(`/team/${team.name}/schedule`, {
      state: {
        myTeam: team,
        teams: teams
      }
    });
  }

    return (
      <div>
        <h1>구단 선택</h1>
        <p>구단을 선택하세요</p>
        <div>
          {teams.map((team) => (
            <button key={team.name} onClick={() => teamClick(team)}>
              {team.name}
            </button>
          ))}
        </div>
      </div>
    )
  }
