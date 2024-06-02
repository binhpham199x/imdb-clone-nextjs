import { MovieResult } from "./models/apiData";
import Results from "@/components/Results";
import { fetchData, fetchMovieDetailsData } from "./utils/dataService";

export default async function Home() {
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


	return <Results trendingData={trendingData} topRatedData={topRatedData} />;
}
