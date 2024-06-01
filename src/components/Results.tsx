"use client";
import { useSearchParams } from "next/navigation";
import { MovieResult } from "../app/models/apiData";

interface Props {
	trendingData: MovieResult[];
	topRatedData: MovieResult[];
}

const Results = ({trendingData, topRatedData}: Props) => {
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");

    const results = genre == "fetchTopRated" ? topRatedData : trendingData;

	return (
		<div>
			{results.map((res) => (
				<div key={res.imdb_id}>
					<h2>{res.title}</h2>
				</div>
			))}
		</div>
	);
};

export default Results;
