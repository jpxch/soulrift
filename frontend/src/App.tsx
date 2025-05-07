import { useState } from "react";
import "./App.css";
import champions from "./data/champions.json";

function App() {
  const [champion, setChampion] = useState("");
  const [vs, setVs] = useState("");
  const [tip, setTip] = useState<string | null>(null);

  const fetchTip = async () => {
    if (!champion || !vs) return;
    const res = await fetch(
      `http://127.0.0.1:8000/matchup?champion=${champion}&vs=${vs}`
    );
    const data = await res.json();
    setTip(data.tip);
  };

  return (
    <div className="app">
      <h1>Soulrift Matchup Tips</h1>

      <select value={champion} onChange={(e) => setChampion(e.target.value)}>
        <option value="">Select Your Champion</option>
        {champions.map((champ: string) => (
          <option key={champ} value={champ}>
            {champ}
          </option>
        ))}
      </select>

      <select value={vs} onChange={(e) => setVs(e.target.value)}>
        <option value="">Select Opponent</option>
        {champions.map((champ: string) => (
          <option key={champ} value={champ}>
            {champ}
          </option>
        ))}
      </select>

      <button onClick={fetchTip}>Get Tip</button>

      {tip && (
        <div className="tip-box">
          <h2>Matchup Tip</h2>
          <p>{tip}</p>
        </div>
      )}
    </div>
  );
}

export default App;
