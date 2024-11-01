import { TbArrowsSort } from 'react-icons/tb';
import { useEffect, useState } from 'react';

export default function MovieTable({ movies, handleViewed, handleSort }) {
	const [data, setData] = useState(movies);

	useEffect(() => {
		setData(movies);
	}, [movies]);

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full table-fixed text-left text-sm text-gray-500 rtl:text-right">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700">
					<tr>
						<th className="w-[20px] px-6 py-3"></th>
						<th className="px-6 py-3">
							<button
								className="flex items-center gap-2"
								onClick={() => handleSort('title')}
							>
								Title <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">
							<button
								className="flex items-center gap-2"
								onClick={() => handleSort('year')}
							>
								Year <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">
							<button
								className="flex items-center gap-2"
								onClick={() => handleSort('runtime')}
							>
								Runtime <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">Genres</th>
						<th className="px-6 py-3" onClick={() => handleSort('director')}>
							<button className="flex items-center gap-2">
								Director <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">Actors</th>
						<th className="px-6 py-3">Plot</th>
					</tr>
				</thead>
				<tbody>
					{data.map((movie) => (
						<tr
							className="border-b odd:bg-white even:bg-gray-50"
							key={movie.id}
						>
							<td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
								<input
									type="checkbox"
									value={movie?.viewed}
									onChange={(e) => handleViewed(e, movie.id)}
								/>
							</td>
							<th
								scope="row"
								className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
							>
								{movie.title}
							</th>
							<td className="px-6 py-4">{movie.year}</td>
							<td className="px-6 py-4">{movie.runtime}</td>
							<td className="w-[50px] truncate px-6 py-4">
								{movie.genres.join(', ')}
							</td>
							<td className="px-6 py-4">{movie.director}</td>
							<td className="w-[50px] truncate px-6 py-4">{movie.actors}</td>
							<td className="w-[50px] truncate px-6 py-4">{movie.plot}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
