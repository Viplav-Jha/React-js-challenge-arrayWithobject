import { useState } from "react";
import "./App.css";
import presentImg from "./assets/present3.png";

function App() {
  const [presents, setPresents] = useState([
    {
      presents: [
        {
          presents: [
            {
              presents: [],
            },
          ],
        },
        {
          presents: [],
        },
      ],
    },
    {
      presents: [],
    },
    {
      presents: [],
    },
  ]);

  return (
    <div className="app-container">
      <p>Click on any gift box and receive your Christmas gift!</p>
      {presents.map((present, clickedIdx) => (
        <button
          key={clickedIdx}
          onClick={() => {
            setPresents((curPresents) => {
              return curPresents.flatMap((value, index) => {
                if (index === clickedIdx) {
                  return value.presents.map((present) => ({
                    ...present,
                    scale: 0.5 * (value.scale ?? 0.8),
                  }));
                } else {
                  return value;
                }
              });
            });
          }}
        >
          <img
            style={{
              transform: `scale(${present.scale ?? 1})`,
            }}
            key={clickedIdx}
            src={presentImg}
            alt={`Present ${clickedIdx + 1}`}
          />
        </button>
      ))}
    </div>
  );
}

export default App;
