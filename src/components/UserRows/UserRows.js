import './UserRows.css';


function UserRow(props) {
  const check = { color: props.user.age < 25 ? "red" : "green" }
  const style = { border: "1px solid black" }
  return <tr style={style}>
    <td>{props.user.name}</td>
    <td style={check}>{props.formatAge(props.user.age)}</td>
    <td>{props.user.city}</td>
  </tr>
}

export function UserRows(props) {
  const style = { border: "1px solid black" }

  return <table style={style}>
    <tbody>
    {props.data.map(user => <UserRow user={user} formatAge={props.formatAge}></UserRow>)}
    </tbody>
  </table>
}


