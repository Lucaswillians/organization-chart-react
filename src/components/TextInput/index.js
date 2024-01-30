import './TextInput.css'

export default function TextInput (props)
{
  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input required={props.require} placeholder={props.placeholder} />
    </div>
  );
}