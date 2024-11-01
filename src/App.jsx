import movies from './data/movies.json';
import Movies from './components/Movies.jsx';

export default function App() {
	return (
		<div className="p-4">
			<h1 className="p-4 text-2xl">My Movies</h1>
			<Movies movies={movies.movies} />
		</div>
	);
}
