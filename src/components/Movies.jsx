import MovieTable from './MovieTable.jsx';
import MovieSearch from './MovieSearch.jsx';

export default function Movies({ movies }) {
	return (
		<>
			<MovieSearch />
			<MovieTable movies={movies} />
		</>
	);
}
