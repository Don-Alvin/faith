import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { Blog } from "@/types";

export const getBlogs = async (): Promise<Blog[]> => {
    try {
        const q = query(collection(db, "blogs"));
        const response = await getDocs(q);
        const blogs = response.docs.map((document) => document.data() as Blog);
        return blogs;
    } catch (error) {
        throw new Error('Could not fetch blogs');
    }
};