import { getBlogs } from "../api/blogsApi"
import { useQuery } from "@tanstack/react-query"

export const useBlogs = () => {
    const{
        isFetching: isLoading,
        isError,
        error,
        data: blogs
    } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    })
}