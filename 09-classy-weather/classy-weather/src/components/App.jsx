import React from "react";
import { Input } from "./Input.jsx";
import { Weather } from "./Weather.jsx";

function convertToFlag(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

class App extends React.Component {
	state = {
		location: "",
		isLoading: false,
		displayLocation: "",
		weather: {},
	};

	fetchWeather = async () => {
		if (this.state.location.length < 1) return this.setState({ weather: {} });

		try {
			this.setState({ isLoading: true });

			// 1) Getting location (geocoding)
			const geoRes = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`,
			);
			const geoData = await geoRes.json();
			console.log(geoData);

			if (!geoData.results) throw new Error("Location not found");

			const { latitude, longitude, timezone, name, country_code } =
				geoData.results.at(0);
			this.setState({
				displayLocation: `${name} ${convertToFlag(country_code)}`,
			});

			// 2) Getting actual weather
			const weatherRes = await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
			);
			const weatherData = await weatherRes.json();
			this.setState({ weather: weatherData.daily });
		} catch (err) {
			console.err(err);
		} finally {
			this.setState({ isLoading: false });
		}
	};

	setLocation = (e) => {
		this.setState({ location: e.target.value });
	};

	//similar to useEffect with empty dependency array
	componentDidMount() {
		this.setState({ location: localStorage.getItem("location") || "" });
	}

	// use effect [location]
	componentDidUpdate(prevProps, prevState) {
		// only do the effect if the location is different
		if (this.state.location !== prevState.location) {
			this.fetchWeather();
			localStorage.setItem("location", this.state.location);
		}
	}

	render() {
		return (
			<div className="app">
				<h1>Classy Weather</h1>
				<Input
					location={this.state.location}
					onChangeLocation={this.setLocation}
				/>
				{this.state.isLoading && <p className="loader">Loading....</p>}

				{this.state.weather.weathercode && (
					<Weather
						weather={this.state.weather}
						location={this.state.displayLocation}
					/>
				)}
			</div>
		);
	}
}
export default App;
