import MovieTable from './MovieTable.jsx';
import MovieSearch from './MovieSearch.jsx';
import { useState } from 'react';

function formatMoviesJSON(movies) {
	return movies.map((movie) => {
		return {
			...movie,
			viewed: false,
		};
	});
}

export default function Movies({ movies }) {
	const [data, setData] = useState(() => formatMoviesJSON(movies));

	const handleViewed = (e, id) => {
		setData((prev) =>
			prev.map((movie) => {
				if (movie.id === id) {
					return {
						...movie,
						viewed: e.target.checked,
					};
				}
				return movie;
			}),
		);
	};

	return (
		<>
			<p className="w-1/2 text-gray-500">
				Of {data.length} movies, you've see XXX.
			</p>
			<MovieSearch />
			<MovieTable movies={data} handleViewed={handleViewed} />
		</>
	);
}
