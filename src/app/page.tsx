import { MovieResult } from "./models/apiData";
import Results from "@/components/Results";
import { fetchData, fetchMovieDetailsData } from "./utils/dataService";

interface Props {
	params: {};
	searchParams: { genre: string };
}

export default async function Home(p: Props) {

    const genre = p.searchParams.genre;

	let trendingData = await fetchData("fetchTrending");
	let topRatedData = await fetchData("fetchTopRated");

	const LIMIT = 5;

	trendingData = trendingData.slice(0, LIMIT);
	topRatedData = topRatedData.slice(0, LIMIT);

	trendingData = await Promise.all(
		trendingData.map(
			async (movie) => await fetchMovieDetailsData(movie.imdb_id)
		)
	);

	topRatedData = await Promise.all(
		topRatedData.map(
			async (movie) => await fetchMovieDetailsData(movie.imdb_id)
		)
	);

    const data = genre == "fetchTopRated" ? topRatedData : trendingData;

	return <Results results={data} />;
}
