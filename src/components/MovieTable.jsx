import { TbArrowsSort } from 'react-icons/tb';
import { useEffect, useState } from 'react';

export default function MovieTable({
	movies,
	handleViewed,
	handleSort,
	handleDelete,
}) {
	const [data, setData] = useState(movies);

	useEffect(() => {
		setData(movies);
	}, [movies]);

	const canSort = ['year', 'runtime', 'director', 'title'];
	const hideCols = ['id', 'posterUrl'];

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full table-fixed text-left text-sm text-gray-500 rtl:text-right">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700">
					<tr>
						{Object.keys(movies[0]).map((key) => (
							<>
								{!hideCols.includes(key) && (
									<th key={key} className="px-6 py-3 uppercase">
										{canSort.includes(key) ? (
											<button
												className="flex items-center gap-2 uppercase"
												onClick={() => handleSort(key)}
											>
												{key} <TbArrowsSort className="h-4 w-4" />
											</button>
										) : (
											key
										)}
									</th>
								)}
							</>
						))}
						<th className="px-6 py-3"></th>
					</tr>
				</thead>
				<tbody>
					{data.map((movie) => (
						<tr
							className="border-b odd:bg-white even:bg-gray-50"
							key={movie.id}
						>
							{Object.keys(movies[0]).map((key) => (
								<>
									{!hideCols.includes(key) && (
										<td className="px-6 py-4">
											<>
												{key === 'viewed' ? (
													<input
														type="checkbox"
														value={movie?.viewed}
														onChange={(e) => handleViewed(e, movie.id)}
													/>
												) : (
													movie[key]
												)}
											</>
										</td>
									)}
								</>
							))}
							<td className="px-6 py-4">
								<button
									className="inline-flex items-center rounded-lg border border-red-700 bg-red-700 px-3 text-sm font-medium text-white"
									onClick={() => handleDelete(movie.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
