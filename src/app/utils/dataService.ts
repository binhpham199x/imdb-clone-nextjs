import { error } from "console";
import { ApiResponse, MovieDetails, MovieResult } from "../models/apiData";
import { fetchTypeToPath } from "./pathConverter";

const baseUrl = "https://moviesminidatabase.p.rapidapi.com/movie/";
const API_KEY = process.env.API_KEY;
// const API_KEY = "";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": API_KEY || "",
		"X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
	},
};

type FetchType = "fetchTrending" | "fetchTopRated";

export const fetchData = async (
	fetchType: FetchType,
	page: number = 1
): Promise<MovieResult[]> => {
	const path = fetchTypeToPath(fetchType);
	const pageOption = `?page=${page}`;
	const res = await fetch(baseUrl + path + pageOption, options);

	if (!res.ok) {
		throw new Error("Failed to fetch data " + fetchType);
	}

	const data: ApiResponse = await res.json();

	return data.results;
};

export const fetchMovieDetailsData = async (
	id: string
): Promise<MovieDetails> => {
	const path = `id/${id}/`;
	const res = await fetch(baseUrl + path, options);

	if (!res.ok) {
		throw new Error("Failed to fetch movie details data");
	}

	const data = await res.json();
	return data.results;
};

export const fetchMovieByName = async (
	name: string,
	limit: number = 20
): Promise<MovieResult[]> => {
	const path = `imdb_id/byTitle/${name}/`;
	const res = await fetch(baseUrl + path, options);

	if (!res.ok) {
		throw new Error("Failed to fetch movie by name data");
	}

	const data: ApiResponse = await res.json();
	if (data.results.length < limit) {
		return data.results;
	}

	data.results = data.results.slice(0, limit);
	return data.results;
};
