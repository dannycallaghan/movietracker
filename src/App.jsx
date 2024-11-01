import movies from './data/movies.json';
import Movies from './components/Movies.jsx';

export default function App() {
	return (
		<div className="p-4">
			<h1 className="text-3xl">My Movies</h1>
			<Movies movies={movies.movies} />
		</div>
	);
}
