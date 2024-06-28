import { collection, getDocs, query } from "firebase/firestore"
import { db } from "./firebase"

export const getBlogs = async() => {
    try{
        const q = query(collection(db, "blogs"))
        const response = await getDocs(q)
        const blogs = response.docs.map((document) => document.data())
    }catch (error){
        throw new Error('Could not fetch listings')
    }
}