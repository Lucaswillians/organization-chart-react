import "./GameCollection.css";

export default function GameCollection({name, image, role }) {
  return (
    <div className="game-collection">
      <div className="header">
        <img src={image} alt={name} />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}
