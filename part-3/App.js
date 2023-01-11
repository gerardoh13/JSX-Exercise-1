function App() {
  return (
    <div>
      <Person name="Gerardo" age={30} hobbies={["Coding", "Running"]} />
      <Person name="Jannah Raeh" age={32} hobbies={["Eating", "Sleeping"]} />
      <Person name="Rafael Mateo" age={0} hobbies={["Sleeping", "Cooing"]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
