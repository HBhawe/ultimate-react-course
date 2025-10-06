import { createContext, useContext, useEffect, useState } from "react";
import city from "../components/City.jsx";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentCity, setCurrentCity] = useState({});

	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCities();
	}, []);

	async function getCity(id) {
		try {
			setIsLoading(true);
			const res = await fetch(`${BASE_URL}/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	async function createCity(newCity) {
		try {
			setIsLoading(true);
			await fetch(`${BASE_URL}/cities`, {
				method: "POST",
				body: JSON.stringify(newCity),
				headers: {
					"Content-Type": "application/json",
				},
			});

			setCities((cities) => [...cities, newCity]);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	async function deleteCity(id) {
		try {
			setIsLoading(true);
			await fetch(`${BASE_URL}/cities/${id}`, {
				method: "DELETE",
			});

			setCities((cities) => cities.filter((city) => city.id !== id));
		} catch (error) {
			console.error(error);
			alert("There was an error deleting the city");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<CitiesContext.Provider
			value={{
				cities,
				isLoading,
				currentCity,
				getCity,
				createCity,
				deleteCity,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
}

const useCities = function () {
	const cities = useContext(CitiesContext);
	if (cities === undefined)
		throw new Error("CitiesContext was used outside of CitiesProvider");
	return cities;
};

export { CitiesProvider, useCities };
