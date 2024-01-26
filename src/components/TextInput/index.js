import './TextInput.css'

export default function TextInput ()
{
  return (
    <div className="text-input">
      <label>Nome</label>
      <input placeholder='Digite seu nome'/>
    </div>
  );
}