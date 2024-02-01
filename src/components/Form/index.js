import './Form.css';
import TextInput from '../TextInput'
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

export default function Form (props)
{
  const cards = [
  "Protagonistas", 
  "Coadjuvantes",
  "Armas", 
  "Cavalos",
  "Cidades", 
  "Vestimentas",
  "Easter-eggs"
];

  const [name, setName] = useState('');
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [card, setCard] = useState("");
 
  const __isSaved = (event) =>
  {
    event.preventDefault()

    props.toGameCard({
      name, role, image, card // nota interessante, a esquerda é o mesmo que -> name: name, role: role
    })
  }

  return (
    <section className='form'>
      <form onSubmit={__isSaved}>
        <h2>Preencha os dados para criar algum card do game!</h2>

        <TextInput require={true} label="Nome" val={name} toChanged={val => setName(val)}
        placeholder="Digite seu nome" />

        <TextInput require={true} label="Cargo" val={role} toChanged={val => setRole(val)} 
        placeholder="Digite seu cargo" />

        <TextInput label="Imagem" placeholder="anexe sua imagem" 
        val={image} toChanged={val => setImage(val)} />
        
        <Dropdown require={true}label="Card" items={cards} 
        val={card} toChanged={val => setCard(val)} />
        
        <Button>Criar card</Button>
      </form>
    </section>
  );
}