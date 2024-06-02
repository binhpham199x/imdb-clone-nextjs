export interface MovieResult {
	imdb_id: string;
	title: string;
	year: number;
	popularity: number;
	description: string;
	content_rating: string;
	movie_length: number;
	rating: number;
	trailer: string;
	image_url: string;
	release: string;
	plot: string;
	banner: string;
	type: string;
}

export interface ApiResponse {
	results: MovieResult[];
}
