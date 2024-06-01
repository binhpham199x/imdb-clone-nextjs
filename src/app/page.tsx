import { GetServerSideProps } from "next";
import { ApiResponse, MovieResult } from "./models/apiData";
import { homeParamToPath } from "./utils/pathConverter";
import Results from "@/components/Results";
import { fetchTopRatedData, fetchTrendingData } from "./utils/dataService";

export default async function Home() {
    let trendingData: MovieResult[] = [];
    let topRatedData: MovieResult[] = [];

	try {
		trendingData = await fetchTrendingData();
		topRatedData = await fetchTopRatedData();
	} catch (error) {
       console.log(error);
        
    }

	return <Results trendingData={trendingData} topRatedData={topRatedData} />;
}
