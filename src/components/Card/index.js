import GameCollection from "../GameCollection";
import "./Card.css";

export default function Card(props) {
  return (
    <section className="card" style={{ backgroundColor: props.secondColor }}>
      <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>

      <div className="cards">
        {props.gameCards.map((gameCard) => (
          <GameCollection
            name={gameCard.name}
            role={gameCard.role}
            image={gameCard.image}
          />
        ))}
      </div>
    </section>
  );
}
