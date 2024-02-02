import GameCollection from '../GameCollection';
import './Card.css'

export default function Card (props)
{
  return (
    <section className='card' style={{ backgroundColor: props.secondColor }}>
      <h3 style={{borderColor: props.firstColor}} >{props.name}</h3>
      <GameCollection/>
    </section>

  );
}