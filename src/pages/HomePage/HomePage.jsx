import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const movies = [
  {
    adult: false,
    backdrop_path: "/iHtowSAkNDALwQ9xQUVuhFZeX9z.jpg",
    genre_ids: [12, 99],
    id: 81776,
    original_language: "en",
    original_title: "Cold",
    overview:
      "For the past 26 years 16 expeditions have tried and failed to climb one of Pakistan's 8,000 meter peaks in winter. On February 2, 2011, Simone Moro, Denis Urubko and Cory Richards became the first. Cory is now the only American to summit any 8,000 meter peak in winter. The journey nearly killed them. Cory carried a small camera and filmed the ordeal constantly. This is their story, as seen from the raw, honest perspective of Cory's lens.",
    popularity: 1.236,
    poster_path: "/gU8p4pgdLM1fV9YXJd8SqyqRxoz.jpg",
    release_date: "2011-12-08",
    title: "Cold",
    video: false,
    vote_average: 7,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18, 53],
    id: 954369,
    original_language: "en",
    original_title: "Cold",
    overview:
      "UFC fighting star Felice Herrig stars in her first drama thriller about two co-workers who get trapped in a freezer box over the Christmas holidays.",
    popularity: 0.945,
    poster_path: "/qEDEMLgkQZT1UwhzzvmumghkV6N.jpg",
    release_date: "",
    title: "Cold",
    video: false,
    vote_average: 3,
    vote_count: 2,
  },
];

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;