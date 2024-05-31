"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface Props {
	title: string;
	param: string;
}

const NavBarItem = ({ title, param }: Props) => {
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");

	const currentLink =
		genre === param
			? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
			: "";

	return (
		<div>
			<Link
				className={"hover:text-amber-600 font-semibold " + currentLink}
				href={`/?genre=${param}`}
			>
				{title}
			</Link>
		</div>
	);
};

export default NavBarItem;
