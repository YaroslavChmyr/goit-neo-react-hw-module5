import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className={css.link}>{movie.title} </Link>
      ))}
    </ul>
  );
};

export default MovieList;
