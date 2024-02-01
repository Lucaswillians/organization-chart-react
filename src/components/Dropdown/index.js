import './Dropdown.css'

export default function Dropdown (props)
{
  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select onChange={event => props.toChanged(event.target.value)}
       required={props.require} value={props.value}>
        {props.items.map(item => <option key={item}> {item} </option>)}
      </select>
    </div>
  );
}