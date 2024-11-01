import MovieTable from './MovieTable.jsx';
import MovieSearch from './MovieSearch.jsx';

export default function Movies({ movies }) {
	return (
		<>
			<p className="w-1/2 text-gray-500">Of xxx movies, you've see XXX.</p>
			<MovieSearch />
			<MovieTable movies={movies} />
		</>
	);
}
