type Props = {
  onSelect: (mode: string) => void;
};

export function ModeModal({ onSelect }: Props) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div style={{ margin: "20% auto", padding: "20px", backgroundColor: "#fff", width: "300px", textAlign: "center" }}>
        <p>경기 진행</p>
        <button onClick={() => onSelect("1경기")}>1경기</button>
        <button onClick={() => onSelect("3경기")}>3경기</button>
      </div>
    </div>
  );
}