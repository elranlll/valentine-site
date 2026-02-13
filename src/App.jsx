import { useState } from "react";
import ValentinePage from "./pages/ValentinePage";
import TulipAnimation from "./pages/TulipAnimation";
import AnniversaryPage from "./AnniversaryPage";

export default function App() {
  const [stage, setStage] = useState("valentine");

  return (
    <div className="fade-wrapper">
      {stage === "valentine" && (
        <ValentinePage onYes={() => setStage("tulips")} />
      )}
      {stage === "tulips" && (
        <TulipAnimation onFinish={() => setStage("anniversary")} />
      )}
      {stage === "anniversary" && <AnniversaryPage />}
    </div>
  );
}