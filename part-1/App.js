function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Gerardo" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
