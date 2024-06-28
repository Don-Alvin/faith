import { collection, getDocs, query } from "firebase/firestore"
import { db } from "./firebase"

export const getListings = async() => {
    try{
        const q = query(collection(db, "listings"))
        const response = await getDocs(q)
        const projects = response.docs.map((document) => document.data())
    }catch (error){
        throw new Error('Could not fetch listings')
    }
}