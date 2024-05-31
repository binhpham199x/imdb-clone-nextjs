"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const currentTheme = theme === "system" ? systemTheme : theme;
	useEffect(() => setMounted(true), []);

	const toLightSwitch = (
		<MdLightMode
			onClick={() => setTheme("light")}
			className="text-xl cursor-pointer hover:text-amber-500 "
		/>
	);

	const toDarkSwitch = (
		<MdDarkMode
			onClick={() => setTheme("dark")}
			className="text-xl cursor-pointer hover:text-amber-500"
		/>
	);

	return (
		<div>
			{mounted &&
				(currentTheme === "dark" ? toLightSwitch : toDarkSwitch)}
		</div>
	);
};

export default DarkModeSwitch;
