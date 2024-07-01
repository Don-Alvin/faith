import { useQuery } from "@tanstack/react-query";
import { getListings } from "../api/listingsApi";

export const useListings = () => {
	const {
		isFetching: isLoading,
		error,
		isError,
		data: listings,
	} = useQuery({
		queryKey: ["listings"],
		queryFn: getListings,
	});

	return { isLoading, error, isError, listings };
};