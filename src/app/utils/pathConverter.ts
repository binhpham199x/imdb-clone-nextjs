export const homeParamToPath = (param: string): string => {
	const res =
		param == "fetchTopRated" ? "order/byRating/" : "order/byPopularity/";

	return res;
};
