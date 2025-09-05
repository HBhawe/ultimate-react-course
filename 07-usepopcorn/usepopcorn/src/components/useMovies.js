import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { SearchResults } from "./SearchResults";
import { Main } from "./Main";
import { Box } from "./Box";
import { MovieList } from "./MovieList";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { MovieDetails } from "./MovieDetails";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";
import { KEY } from "./API";
import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );

          if (!response.ok)
            throw new Error(`Something went wrong with fetching movies!`);

          const data = await response.json();

          if (data.Response === "False") throw new Error(`Movie not found`);

          setMovies((movies) => data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );

  return { movies, isLoading, error };
}
