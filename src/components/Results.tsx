import { MovieDetails } from "../app/models/apiData";
import Card from "./Card";

interface Props {
	results: MovieDetails[];
}

const Results = ({ results }: Props) => {

	return (
		<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
			{results.map((res) => (
				<Card key={res.imdb_id} result={res} />
			))}
		</div>
	);
};

export default Results;
