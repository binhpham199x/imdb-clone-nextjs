import { ApiResponse } from "../models/apiData";
import { homeParamToPath } from "./pathConverter";

const baseUrl = "https://moviesminidatabase.p.rapidapi.com/movie/";
// const API_KEY = process.env.API_KEY;
const API_KEY = "";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": API_KEY || "",
		"X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
	},
};

export const fetchTrendingData = async () => {
	const pathTrending = homeParamToPath("fetchTrending");
	const resTrending = await fetch(baseUrl + pathTrending, options);

	if (!resTrending.ok) {
		throw new Error("Failed to fetch data trending");
	}

	const dataTrending: ApiResponse = await resTrending.json();

	return dataTrending.results;
};

export const fetchTopRatedData = async () => {
	const pathTopRated = homeParamToPath("fetchTopRated");
	const resTopRated = await fetch(baseUrl + pathTopRated, options);

	if (!resTopRated.ok) {
		throw new Error("Failed to fetch data top rated");
	}
	const dataTopRated: ApiResponse = await resTopRated.json();

	return dataTopRated.results;
};
