export default function Envelope({ opened }) {
  return (
    <div className="envelope-wrapper">
      <div className={`envelope ${opened ? "open" : ""}`}>
        <div className="flap"></div>
        <div className="letter">💖</div>
      </div>
    </div>
  );
}
