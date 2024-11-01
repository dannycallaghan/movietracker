import MovieTable from './MovieTable.jsx';
import MovieSearch from './MovieSearch.jsx';
import { useEffect, useRef, useState } from 'react';

function formatMoviesJSON(movies) {
	return movies.map((movie) => {
		return {
			...movie,
			viewed: false,
		};
	});
}

export default function Movies({ movies }) {
	const [data, setData] = useState(movies);
	const [filteredData, setFilteredData] = useState(movies);

	const handleViewed = (e, id) => {
		setFilteredData((prev) =>
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

	const getViewed = () => {
		const viewed = filteredData.filter((movie) => movie.viewed === true);
		return viewed.length;
	};

	const sortAsc = useRef(true);

	const handleSort = (sort) => {
		setFilteredData((prev) => {
			const result = prev;
			if (sort === 'year') {
				if (sortAsc.current) {
					result.sort((a, b) => Number(a.year) - Number(b.year));
				} else {
					result.sort((a, b) => Number(b.year - a.year));
				}
			}
			if (sort === 'runtime') {
				if (sortAsc.current) {
					result.sort((a, b) => Number(a.runtime) - Number(b.runtime));
				} else {
					result.sort((a, b) => Number(b.runtime - a.runtime));
				}
			}
			if (sort === 'director') {
				if (sortAsc.current) {
					result.sort((a, b) => Number(a.runtime) - Number(b.runtime));
				} else {
					result.sort((a, b) => Number(b.runtime - a.runtime));
				}
			}
			if (sort === 'title') {
				if (sortAsc.current) {
					result.sort((a, b) => Number(a.runtime) - Number(b.runtime));
				} else {
					result.sort((a, b) => Number(b.runtime - a.runtime));
				}
			}
			sortAsc.current = !sortAsc.current;
			return [...result];
		});
	};

	const handleSearch = (search) => {
		setFilteredData((prev) => {
			const result = prev.filter((movie) => {
				return movie.title.toLowerCase().includes(search.toLowerCase());
			});
			return [...result];
		});
	};

	const handleReset = () => {
		setFilteredData(data);
	};

	const handleDelete = (id) => {
		setData((prev) => {
			const result = prev.filter((movie) => {
				return movie.id !== id;
			});
			return [...result];
		});
	};

	useEffect(() => {
		setFilteredData(data);
	}, [data]);

	return (
		<>
			<p className="w-1/2 text-gray-500">
				Of {data.length} movies, you've see {getViewed()}.
			</p>
			<MovieSearch handleSearch={handleSearch} handleReset={handleReset} />
			<MovieTable
				movies={filteredData}
				handleViewed={handleViewed}
				handleSort={handleSort}
				handleDelete={handleDelete}
			/>
		</>
	);
}
