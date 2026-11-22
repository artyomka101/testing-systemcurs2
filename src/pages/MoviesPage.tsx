import { Link, useParams } from "react-router";

interface Movie {
  id: string;
  title: string;
  description: string;
}

const Movies: Movie[] = [
  {
    id: "1",
    title: "Человек паук",
    description: "Он просто красавчик",
  },
  {
    id: "2",
    title: "Халк",
    description: "Крушить и ломать",
  },
  {
    id: "3",
    title: "Железный человек",
    description: "Гений в",
  },
];

export function MoviesPage() {
  return (
    <>
      <h1>Каталог фильмов</h1>
      <ul>
        {Movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function MoviePage() {
  const { movieId } = useParams();

  const movie = Movies.find((item) => item.id === movieId);
  return (
    <>
      <h1>{movie?.title}</h1>
      <p>{movie?.description}</p>
      <Link to="/movies">Вернуться к каталогу фильмов</Link>
    </>
  );
}
