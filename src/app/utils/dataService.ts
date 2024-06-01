import { ApiResponse } from "../models/apiData";
import { fetchTypeToPath } from "./pathConverter";

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

type FetchType = "fetchTrending" | "fetchTopRated";

export const fetchData = async (fetchType: FetchType, page: number = 1) => {
	const path = fetchTypeToPath(fetchType);
	const pageOption = "?page=" + page;
	const res = await fetch(baseUrl + path + pageOption, options);

	if (!res.ok) {
		throw new Error("Failed to fetch data " + fetchType);
	}

	const data: ApiResponse = await res.json();

	return data.results;
};
