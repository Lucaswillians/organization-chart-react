import './TextInput.css'

// Use significa que vai ser feito alguma coisa.

export default function TextInput (props)
{
  const toType = (event) => {
    props.toChanged(event.target.value)
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input value={props.val} onChange={toType}  required={props.require} placeholder={props.placeholder} />
    </div>
  );
}