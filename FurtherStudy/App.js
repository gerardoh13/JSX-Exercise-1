function App() {
  return (
    <div>
      <Button text="Click me!" bgColor="blue" fontColor="white" />
      <Button text="Submit" bgColor="green" fontColor="white" />
      <Button text="Delete" bgColor="red" fontColor="white" />
      <Button text="Default" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
