import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "Uppsala" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    console.log(`loading weather...`);
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location"
            value={this.state.location}
            onChange={(event) =>
              this.setState({ location: event.target.value })
            }
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    );
  }
}

export default App;
