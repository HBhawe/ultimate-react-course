import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

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

	return (
		<CitiesContext.Provider value={{ cities, isLoading }}>
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
