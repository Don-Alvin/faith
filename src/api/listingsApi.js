import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export const getListings = async () => {
  try {
    const q = query(collection(db, "listings").orderBy("id", "desc"));
    const response = await getDocs(q);
    const listings = response.docs.map((document) => document.data());
    return listings;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw new Error("Could not fetch listings");
  }
};
