"use client";

import { MovieDetails } from "@/app/models/apiData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import LoadedImage from "./LoadedImage";

interface Props {
   result: MovieDetails;
}

const Card = ({ result }: Props) => {
   const [imageError, setImageError] = useState(false);

   const handleImageError = () => {
      setImageError(true);
   };

   return (
      <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
         <Link
            href={`/movie/${result.imdb_id}`}
            className="flex flex-col items-center justify-between h-full"
         >
            <LoadedImage
               alt={result.title}
               src={result.banner}
               className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 justify-self-center"
            />

            <div className="p-2 w-full">
               <p className="line-clamp-2 text-base">{result.description}</p>
               <h2 className="text-lg font-bold truncate">{result.title}</h2>
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
