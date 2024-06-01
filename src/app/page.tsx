import { MovieResult } from "./models/apiData";
import Results from "@/components/Results";
import { fetchData } from "./utils/dataService";

export default async function Home() {
	const trendingData = await fetchData("fetchTrending");
	const topRatedData = await fetchData("fetchTopRated");

	return <Results trendingData={trendingData} topRatedData={topRatedData} />;
}
