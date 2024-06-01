export interface MovieResult {
	imdb_id: number;
	title: string;
}

export interface ApiResponse {
    results: MovieResult [];
}