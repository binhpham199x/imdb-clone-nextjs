"use client";
import { useSearchParams } from "next/navigation";
import { MovieResult } from "../app/models/apiData";
import Card from "./Card";

interface Props {
	trendingData: MovieResult[];
	topRatedData: MovieResult[];
}

const Results = ({ trendingData, topRatedData }: Props) => {
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");

	const results = genre == "fetchTopRated" ? topRatedData : trendingData;

	return (
		<div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-6xl mx-auto py-4">
			{results.map((res) => (
				<Card key={res.imdb_id} result={res} />
			))}
		</div>
	);
};

export default Results;
