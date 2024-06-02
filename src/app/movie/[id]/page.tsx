import { MovieResult } from "@/app/models/apiData";
import { fetchMovieDetailsData } from "@/app/utils/dataService";
import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

interface Props {
	params: { id: string };
	searchParams: {};
}

export default async function MoviePage(p: Props) {
	const movieId = p.params.id;

	const movie: MovieResult = await fetchMovieDetailsData(movieId);

	return (
		<div className="w-full">
			<div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
				<Image
					alt={movie.imdb_id}
					src={movie.banner}
					width={300}
					height={500}
					className="rounded-lg"
					style={{ maxWidth: "100%", height: "100%" }}
				/>
				<div className="p-2">
					<h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
					<p className="text-lg mb-3">{movie.description}</p>
					<p className="mb-3">
						<span className="font-semibold mr-1">
							Date Released:
						</span>
						{movie.release}
					</p>
					<p className="mb-3 flex">
						<span className="font-semibold mr-1">Rating:</span>
						<FaRegStar className="h-5 mr-1 ml-1" />
						{movie.rating}
					</p>
				</div>
			</div>
		</div>
	);
}
