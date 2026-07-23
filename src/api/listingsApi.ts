import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { cache } from "react";
import { db } from "./firebase";
import { Listing } from "@/types";

export const getListings = async (): Promise<Listing[]> => {
  try {
    const q = query(collection(db, "listings"), orderBy("id", "desc"));
    const response = await getDocs(q);
    const listings = response.docs.map((document) => document.data() as Listing);
    return listings;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw new Error("Could not fetch listings");
  }
};

// Cached per-request (React's cache()) so generateMetadata and the page body
// share one Firestore read instead of two.
export const getListingById = cache(async (id: number): Promise<Listing | null> => {
  try {
    const q = query(collection(db, "listings"), where("id", "==", id), limit(1));
    const response = await getDocs(q);
    if (response.empty) return null;
    return response.docs[0].data() as Listing;
  } catch (error) {
    console.error("Error fetching listing:", error);
    return null;
  }
});
