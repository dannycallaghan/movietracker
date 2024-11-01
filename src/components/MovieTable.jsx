import { TbArrowsSort } from 'react-icons/tb';

export default function MovieTable({ movies }) {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full table-fixed text-left text-sm text-gray-500 rtl:text-right">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700">
					<tr>
						<th className="px-6 py-3">
							<button className="flex items-center gap-2">
								Title <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">
							<button className="flex items-center gap-2">
								Year <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">
							<button className="flex items-center gap-2">
								Runtime <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">Genres</th>
						<th className="px-6 py-3">
							<button className="flex items-center gap-2">
								Director <TbArrowsSort className="h-4 w-4" />
							</button>
						</th>
						<th className="px-6 py-3">Actors</th>
						<th className="px-6 py-3">Plot</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((movie) => (
						<tr
							className="border-b odd:bg-white even:bg-gray-50"
							key={movie.id}
						>
							<th
								scope="row"
								className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
							>
								{movie.title}
							</th>
							<td className="px-6 py-4">{movie.year}</td>
							<td className="px-6 py-4">{movie.runtime}</td>
							<td className="w-[50px] truncate px-6 py-4"></td>
							<td className="px-6 py-4">{movie.director}</td>
							<td className="w-[50px] truncate px-6 py-4"></td>
							<td className="w-[50px] truncate px-6 py-4">{movie.plot}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
