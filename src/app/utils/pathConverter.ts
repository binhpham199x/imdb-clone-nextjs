export const fetchTypeToPath = (param: string): string => {
	const res =
		param == "fetchTopRated" ? "order/byRating/" : "order/byPopularity/";

	return res;
};
