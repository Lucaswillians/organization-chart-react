import './Form.css';
import TextInput from '../TextInput'

export default function Form ()
{
  return (
    <section className='form'>
      <form>
        <h2>Preencha os dados para criar algum card do game!</h2>
        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="anexe sua imagem" />
      </form>
    </section>
  );
}