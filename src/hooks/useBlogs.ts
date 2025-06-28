import { getBlogs } from "@/api/blogsApi";
import { useQuery } from "@tanstack/react-query";
import { Blog } from "@/types";

interface UseBlogsReturn {
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    blogs: Blog[] | undefined;
}

export const useBlogs = (): UseBlogsReturn => {
    const {
        isFetching: isLoading,
        isError,
        error,
        data: blogs
    } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    });
    
    return { isLoading, isError, error, blogs };
};