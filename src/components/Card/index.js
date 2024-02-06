import GameCollection from "../GameCollection";
import "./Card.css";

export default function Card(props) {
  return (
    props.gameCards.length > 0 && (
      <section
        key={props}
        className="card"
        style={{ backgroundColor: props.secondColor }}
      >
        <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>

        <div className="cards">
          {props.gameCards.map((gameCard) => (
            <GameCollection
              key={gameCard.name}
              name={gameCard.name}
              role={gameCard.role}
              image={gameCard.image}
            />
          ))}
        </div>
      </section>
    )
  );
}
