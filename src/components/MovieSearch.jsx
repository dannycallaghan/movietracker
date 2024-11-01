import { IoSearchOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';

export default function MovieSearch({ handleSearch, handleReset }) {
	const [searching, setSearching] = useState(false);
	const inputRef = useRef('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const searchString = inputRef.current.value;

		if (searchString && searchString.length) {
			setSearching(true);
			handleSearch(searchString);
		}
	};

	const handleResetData = (e) => {
		setSearching(false);
		inputRef.current.value = '';
		handleReset();
	};

	return (
		<div className="mb-10 flex items-center justify-end">
			<form
				className="flex w-1/2 items-center"
				onSubmit={handleSubmit}
				noValidate
			>
				<label htmlFor="voice-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<IoSearchOutline className="mr-2 h-5 w-5" />
					</div>
					<input
						type="text"
						id="voice-search"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
						placeholder="Search movie title"
						required
						name="search"
						ref={inputRef}
					/>
				</div>
				<button
					type="submit"
					className="ml-2 inline-flex items-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2.5 text-sm font-medium text-white"
				>
					<IoSearchOutline className="mr-2 h-5 w-5" />
					Search
				</button>
				<button
					disabled={!searching}
					onClick={handleResetData}
					className="ml-2 inline-flex items-center rounded-lg border border-orange-700 bg-orange-700 px-3 py-2.5 text-sm font-medium text-white disabled:border-orange-300 disabled:bg-orange-300"
				>
					Reset
				</button>
			</form>
		</div>
	);
}
