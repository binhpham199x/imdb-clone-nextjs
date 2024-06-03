"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		router.push(`/search/${search}`);
        setSearch("");
	};

	return (
		<form
			className="flex justify-between px-3 pt-5 max-w-6xl mx-auto gap-3"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search keywords..."
				className="w-full h-12 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border-gray-400 border p-4"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className="font-bold bg-amber-500 focus:outline-none hover:bg-amber-600 disabled:bg-gray-400 rounded-lg px-3"
				disabled={search === ""}
			>
				Search
			</button>
		</form>
	);
};

export default SearchBox;
