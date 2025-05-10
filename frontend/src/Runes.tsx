import { useEffect, useState } from "react";

interface RunePage {
  title: string;
  primary: string[];
  secondary: string[];
  winrate: string;
}

function Runes({ champion, vs }: { champion: string; vs: string }) {
  const [runes, setRunes] = useState<RunePage[]>([]);

  useEffect(() => {
    if (!champion || !vs) return;

    fetch(`http://127.0.0.1:8000/runes?champion=${champion}&vs=${vs}`)
      .then((res) => res.json())
      .then((data) => setRunes(data.runes));
  }, [champion, vs]);

  if (!runes.length) return null;

  return (
    <div className="runes-container">
      <h2>Rune Recommendation</h2>
      {runes.map((rune, index) => (
        <div key={index} className="rune-box">
          <h3>
            {rune.title} - <span className="winrate">{rune.winrate}</span>
          </h3>
          <div className="rune-list">
            <div>
              <strong>Primary:</strong>
              {rune.primary.map((perk, i) => (
                <span key={i} className="rune-pill">
                  {perk}
                </span>
              ))}
            </div>
            <div>
              <strong>Secondary:</strong>
              {rune.secondary.map((perk, i) => (
                <span key={i} className="rune-pill">
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Runes;
