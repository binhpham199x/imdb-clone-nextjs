"use client";

import { useEffect } from "react";

interface Prop {
	error: Error;
	reset: () => void;
}

const Error = ({ error, reset }: Prop) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="text-center mt-10">
			<h1>Something went wrong. Please try again later.</h1>
			<button className="hover:text-amber-600" onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
};

export default Error;
