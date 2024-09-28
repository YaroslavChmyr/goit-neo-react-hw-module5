import css from './MoviesPage.module.css';
import { searchMovies } from '../../services/api';
import Navigation from '../../components/Navigation/Navigation';
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value.trim();

    if (query === "") {
      form.reset();
      return;
    }

    navigate(`?query=${query}`);

    const fetchMovies = async () => {
      const data = await searchMovies(query);
      if (data) {
        setMovies(data);
      }
    };

    fetchMovies();
    form.reset();
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    if (query) {
      const fetchMovies = async () => {
        const data = await searchMovies(query);
        if (data) {
          setMovies(data);
        }
      };
      fetchMovies();
    }
  }, [location.search]);

  return (
    <div>
      <Navigation />
      <form onSubmit={handleSubmit} className={css.searchBar}>
        <div className={css.inputContainer}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            className={css.searchInput}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </div>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;