import { useEffect, useState } from "react";

export default function TulipAnimation({ onFinish }) {
  const [phase, setPhase] = useState("bud"); // bud → opening → full

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("opening"), 800),
      setTimeout(() => setPhase("full"), 2800),
      setTimeout(() => {
        // optional: trigger hearts a bit later
      }, 3200),
      setTimeout(onFinish, 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className="tulip-scene">
      <div className={`tulip ${phase}`}>
        {/* Stem */}
        <div className="stem"></div>

        {/* Leaves (simple) */}
        <div className="leaf leaf-left"></div>
        <div className="leaf leaf-right"></div>

        {/* Flower head container - rotates slowly */}
        <div className="flower-head">
          {/* Green sepals (bud wrapper) */}
          <div className="sepal sepal-1"></div>
          <div className="sepal sepal-2"></div>
          <div className="sepal sepal-3"></div>

          {/* Red petals - animate opening */}
          <div className="petal petal-1"></div>
          <div className="petal petal-2"></div>
          <div className="petal petal-3"></div>
          <div className="petal petal-4"></div>
          <div className="petal petal-5"></div>
          <div className="petal petal-6"></div>
        </div>
      </div>

      {/* Hearts appear after bloom */}
      <div className="hearts">
        <span>💖</span>
        <span>💗</span>
        <span>💞</span>
        <span>💕</span>
      </div>

      <h2 className="yay-text">Yaaay! 💕</h2>
    </div>
  );
}