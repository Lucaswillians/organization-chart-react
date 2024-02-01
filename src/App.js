import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {

  const [gameCards, setGameCards] = useState([]);

  const toTheGameCardAdded = (gameCard) =>
  {
    console.log(gameCard);
    setGameCards([...gameCards, gameCard])
  }

  return (
    <div className="App">
      <Banner />
        <Form toGameCard={ gameCard => toTheGameCardAdded(gameCard) } />
    </div>
  );
}


export default App;
