import Navigation from "../../components/Navigation/Navigation";
import css from "./MovieDetailsPage.module.css";

const movie = {
  adult: false,
  backdrop_path: "/iHtowSAkNDALwQ9xQUVuhFZeX9z.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 99,
      name: "Documentary",
    },
  ],
  homepage: "http://forgemotionpictures.com/films/cold/",
  id: 81776,
  imdb_id: "tt2093084",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Cold",
  overview:
    "For the past 26 years 16 expeditions have tried and failed to climb one of Pakistan's 8,000 meter peaks in winter. On February 2, 2011, Simone Moro, Denis Urubko and Cory Richards became the first. Cory is now the only American to summit any 8,000 meter peak in winter. The journey nearly killed them. Cory carried a small camera and filmed the ordeal constantly. This is their story, as seen from the raw, honest perspective of Cory's lens.",
  popularity: 1.236,
  poster_path: "/gU8p4pgdLM1fV9YXJd8SqyqRxoz.jpg",
  production_companies: [
    {
      id: 8242,
      logo_path: "/xPQFWek22kiGUzCMkmF54yKoP5P.png",
      name: "Forge Motion Pictures",
      origin_country: "US",
    },
    {
      id: 5234,
      logo_path: "/24GREmyxfSHuaLUkrDCVngO18rO.png",
      name: "Sender Films",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2011-12-08",
  revenue: 0,
  runtime: 19,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "",
  title: "Cold",
  video: false,
  vote_average: 7,
  vote_count: 2,
};

const MovieDetailsPage = () => {
  return (
    <>
    <Navigation />
    <div className={css.container}>
      <div className={css.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={css.info}>
        <h1 className={css.title}>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
        <p>User score: {movie.vote_average * 10}%</p>
        <h2 className={css.subtitle}>Overview</h2>
        <p>{movie.overview}</p>
        <h2 className={css.subtitle}>Genres</h2>
        <ul className={css.genres}>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default MovieDetailsPage;
