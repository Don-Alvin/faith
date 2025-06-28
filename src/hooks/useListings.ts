import { useQuery } from "@tanstack/react-query";
import { getListings } from "@/api/listingsApi";
import { Listing } from "@/types";

interface UseListingsReturn {
	isLoading: boolean;
	error: Error | null;
	isError: boolean;
	listings: Listing[] | undefined;
}

export const useListings = (): UseListingsReturn => {
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