import { useState } from "react";
import Envelope from "./utils/Envelope";

export default function ValentinePage({ onYes }) {
  const [opened, setOpened] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [textIndex, setTextIndex] = useState(0);

  const messages = [
    "Yes ❤️",
    "please 🥺",
    "pretty please 💕",
    "I'm on my knees 😭",
    "don't do this to me 💔",
    "you know you want to 😏",
    "last chance 😤",
  ];

  const handleNo = () => {
    setYesSize(yesSize + 0.3);
    setNoSize(Math.max(noSize - 0.2, 0));
    setTextIndex((textIndex + 1) % messages.length);
  };

  const handleYes = () => {
    setOpened(true);
    setTimeout(onYes, 2500); // wait for animation
  };

  return (
    <div style={styles.container}>
      <h1>Will you be my Valentine? 💌</h1>

      <Envelope opened={opened} />

      <div style={styles.buttons}>
        <button
          onClick={handleYes}
          style={{ ...styles.yesBtn, transform: `scale(${yesSize})` }}
        >
          {messages[textIndex]}
        </button>

        {noSize > 0.1 && (
          <button
            onClick={handleNo}
            style={{ ...styles.noBtn, transform: `scale(${noSize})` }}
          >
            No 😢
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", paddingTop: "80px" },
  buttons: { marginTop: "30px" },
  yesBtn: {
    fontSize: "20px",
    padding: "15px 25px",
    margin: "10px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  noBtn: {
    fontSize: "20px",
    padding: "15px 25px",
    margin: "10px",
    background: "#999",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
