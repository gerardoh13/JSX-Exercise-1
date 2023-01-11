function App() {
  return (
    <div className="row">
      <Tweet
        username="gerardoh13"
        name="Gerardo"
        date={new Date().toDateString()}
        msg="React is cool"
      />
            <Tweet
        username="DonMateo"
        name="Rafael"
        date={new Date().toDateString()}
        msg="**Baby Noises**"
      />
            <Tweet
        username="SamDaCat"
        name="Samantha"
        date={new Date().toDateString()}
        msg="I love cardboard boxes!"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
