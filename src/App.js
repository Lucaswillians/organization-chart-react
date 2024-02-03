import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const infos = [
    {
      name: "Protagonistas",
      firstColor: "#b8860b",
      secondColor: "#A00B17",
    },

    {
      name: "Coadjuvantes",
      firstColor: "#b8860b",
      secondColor: "#000",
    },

    {
      name: "Armas",
      firstColor: "#b8860b",
      secondColor: "#A00B17",
    },

    {
      name: "Cavalos",
      firstColor: "#b8860b",
      secondColor: "#000",
    },

    {
      name: "Cidades",
      firstColor: "#b8860b",
      secondColor: "#A00B17",
    },

    {
      name: "Vestimentas",
      firstColor: "#b8860b",
      secondColor: "#000",
    },

    {
      name: "Easter-egg",
      firstColor: "#b8860b",
      secondColor: "#A00B17",
    },
  ];

  const [gameCards, setGameCards] = useState([]);

  const toTheGameCardAdded = (gameCard) => {
    console.log(gameCard);
    setGameCards([...gameCards, gameCard]);
  };

  return (
    <div className="App">
      <Banner />

      <Form
        infos={infos.map((info) => info.name)}
        toGameCard={(gameCard) => toTheGameCardAdded(gameCard)}
      />

      {infos.map((info) => (
        <Card
          key={info.name}
          name={info.name}
          firstColor={info.firstColor}
          secondColor={info.secondColor}
          gameCards={gameCards.filter(
            (gameCard) => gameCard.info === info.name
          )}
        />
      ))}
    </div>
  );
}

export default App;
