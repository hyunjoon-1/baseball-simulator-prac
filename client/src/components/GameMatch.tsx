// Match 타입 가져오기
import type { Match } from "../types/Match";


export function GameMatch({ match }: { match: Match }) {
  return <div>{match.home} vs {match.away}</div>;
}