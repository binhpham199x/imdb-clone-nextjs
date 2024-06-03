import {
	fetchMovieByName,
	fetchMovieDetailsData,
} from "@/app/utils/dataService";
import Results from "@/components/Results";

interface Props {
	params: { searchTerm: string };
	searchParams: {};
}

export default async function SearchPage(p: Props) {
	const searchTerm = p.params.searchTerm;

	const movies = await fetchMovieByName(searchTerm, 3);

	const results = await Promise.all(
		movies.map(async (movie) => await fetchMovieDetailsData(movie.imdb_id))
	);

	console.log(results);
	const notFound = <h1 className="text-center pt-6">No results found</h1>;

    const content = <Results results={results}/>

	return (
		<div>
			{results && results.length === 0 && notFound}
			{content}
		</div>
	);
}
