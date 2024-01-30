import './Dropdown.css'

export default function Dropdown (props)
{
  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select required={props.require}>
        {props.items.map(item => <option key={item}> {item} </option>)}
      </select>
    </div>
  );
}