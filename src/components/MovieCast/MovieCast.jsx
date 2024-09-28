import css from "./MovieCast.module.css";

const cast = [
  {
    adult: false,
    gender: 2,
    id: 592463,
    known_for_department: "Acting",
    name: "Cory Richards",
    original_name: "Cory Richards",
    popularity: 0.403,
    profile_path: "/zWsHpTQfuD6axsMDzOiDX7bEnKy.jpg",
    cast_id: 1002,
    character: "Himself",
    credit_id: "52fe482b9251416c91082a7b",
    order: 0,
  },
  {
    adult: false,
    gender: 2,
    id: 592465,
    known_for_department: "Acting",
    name: "Denis Urubko",
    original_name: "Denis Urubko",
    popularity: 1.147,
    profile_path: "/Aojsa4W2gD0F1YyYJ9hpJfowobD.jpg",
    cast_id: 1004,
    character: "Himself",
    credit_id: "52fe482b9251416c91082a83",
    order: 1,
  },
];

const MovieCast = () => {
  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.item}>
          <img
            src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
            alt={actor.name}
            className={css.img}
          />
          <p className={css.name}>{actor.name}</p>
          <p className={css.character}>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
