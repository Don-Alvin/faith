import { useQuery } from "@tanstack/react-query";
import { getListings } from "../api/listingsApi";

export const useListings = () => {
	const {
		isFetching: isInitialLoading,
		error,
		isError,
		data: listings,
	} = useQuery({
		queryKey: ["listings"],
		queryFn: getListings,
	});

	return { isInitialLoading, error, isError, listings };
};