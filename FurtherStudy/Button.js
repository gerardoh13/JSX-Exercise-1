function Button(props) {
  return (
    <button style={{ backgroundColor: props.bgColor, color: props.fontColor }}>
      {props.text}
    </button>
  );
}
