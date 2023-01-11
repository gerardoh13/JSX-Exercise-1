function Tweet(props) {
    return (
      <div className="card col">
        <span>{props.name}</span>
        <span className="username">@{props.username}</span>
        <span className="date">{props.date}</span>
        <p>{props.msg}</p>
      </div>
    );
  }