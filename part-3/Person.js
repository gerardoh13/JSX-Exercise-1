function Person(props) {
    const canVote = props.age > 17 ? "please go vote!" : "you must be 18"
    const name = props.name.length > 8 ? props.name.slice(0, 6) : props.name
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>Name: {name}</p>
        <p>Age: {props.age}</p>
        <h5>Hobbies:</h5>
      <ul>
        {props.hobbies.map(h => <li>{h}</li>)}
      </ul>
      <h3>{canVote}</h3>
    </div>
  );
}
