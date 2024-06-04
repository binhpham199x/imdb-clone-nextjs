"use client";

import Image from "next/image";
import { useState } from "react";
import ImageError from "./ImageError";

interface Props {
   alt: string;
   src: string;
   className?: string;
}

const LoadedImage = ({ alt, src, className = "" }: Props) => {
   const [imageError, setImageError] = useState(false);

   const handleImageError = () => {
      setImageError(true);
   };

   return (
      <>
         {imageError ? (
            <ImageError />
         ) : (
            <Image
               alt={alt}
               src={src}
               sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
               width={300}
               height={500}
               style={{
                  maxWidth: "100%",
                  height: "auto",
               }}
               className={"w-auto " + className}
               onError={handleImageError}
               placeholder="blur"
               blurDataURL="/loading.svg"
            />
         )}
      </>
   );
};

export default LoadedImage;
