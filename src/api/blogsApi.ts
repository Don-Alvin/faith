import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { cache } from "react";
import { db } from "./firebase";
import { Blog } from "@/types";

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const q = query(collection(db, "blogs"));
    const response = await getDocs(q);
    const blogs = response.docs.map((document) => document.data() as Blog);
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Could not fetch blogs");
  }
};

// Cached per-request (React's cache()) so generateMetadata and the page body
// share one Firestore read instead of two.
export const getBlogByTitle = cache(async (title: string): Promise<Blog | null> => {
  try {
    const q = query(collection(db, "blogs"), where("title", "==", title), limit(1));
    const response = await getDocs(q);
    if (response.empty) return null;
    return response.docs[0].data() as Blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
});
