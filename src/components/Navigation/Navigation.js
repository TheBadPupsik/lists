import './Navigation.css';

function Elems(props)
{
  const isActive = props.item.id === props.activeId;

  return <li style={{fontWeight: isActive? "bold":""}}>
         {props.item.label}{isActive}
        </li>
}

export function Navigations(props) 
{
return <ul>
   { props.nav.map(elem=> <Elems item={elem} activeId={props.activeId}></Elems>) }    
    </ul>
}