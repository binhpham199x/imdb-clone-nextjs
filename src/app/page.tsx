import { MovieDetails } from "./models/apiData";
import Results from "@/components/Results";
import { fetchData, fetchMovieDetailsData } from "./utils/dataService";

interface Props {
	params: {};
	searchParams: { genre: string };
}

export default async function Home(p: Props) {
	const genre = p.searchParams.genre;

	const RESULTS_LIMIT = 10;

	const trendingData = await fetchData("fetchTrending", RESULTS_LIMIT);
	const topRatedData = await fetchData("fetchTopRated", RESULTS_LIMIT);

	const trendingDataDetails = await Promise.all(
		trendingData.map(
			async (movie) => await fetchMovieDetailsData(movie.imdb_id)
		)
	);

	const topRatedDataDetails = await Promise.all(
		topRatedData.map(
			async (movie) => await fetchMovieDetailsData(movie.imdb_id)
		)
	);

	const data =
		genre == "fetchTopRated" ? trendingDataDetails : topRatedDataDetails;

	return <Results results={data} />;
}
