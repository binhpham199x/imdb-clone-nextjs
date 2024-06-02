import { MovieResult } from "@/app/models/apiData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

interface Props {
	result: MovieResult;
}

const Card = ({ result }: Props) => {
	return (
		<div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
			<Link
				href={`/movie/${result.imdb_id}`}
				className="flex flex-col items-center justify-between h-full"
			>
				<Image
					alt={result.title}
					src={result.banner || result.image_url}
					width={400}
					height={300}
					className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 justify-self-center"
				/>

				<div className="p-2 w-full">
					<p className="line-clamp-2 text-base">
						{result.description}
					</p>
					<h2 className="text-lg font-bold truncate">
						{result.title}
					</h2>
					<p className="flex items-center">
						{result.release}
						<FaRegStar className="h-5 mr-1 ml-3" /> {result.rating}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
