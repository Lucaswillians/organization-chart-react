import './Form.css';
import TextInput from '../TextInput'
import Dropdown from '../Dropdown';
import Button from '../Button';

export default function Form ()
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

  const __isSaved = (event) =>
  {
    event.preventDefault()

    console.log('Form   Was Submited')
  }

  return (
    <section className='form'>
      <form onSubmit={__isSaved}>
        <h2>Preencha os dados para criar algum card do game!</h2>
        <TextInput require={true} label="Nome" placeholder="Digite seu nome" />
        <TextInput require={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="anexe sua imagem" />
        <Dropdown require={true}label="Card" items={cards} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}