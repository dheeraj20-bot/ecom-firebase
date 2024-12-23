import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "/lib/firebase";


export const getProduct = async({id}) =>{
    // console.log(id);
    const data = await getDoc(doc(db,`pretrips/${id}`));

    if(data.exists()){
          return data.data();
    } else{
        return null;
    }
}

export const getProductsByState = async ({state}) => {
    try {
      // Reference to the "pretrips" collection
      const pretripsRef = collection(db, "pretrips");
  
      // Firestore query to filter documents where state equals the provided value
      const q = query(pretripsRef, where("brandId", "==", state));
  
      // Get the filtered documents
      const querySnapshot = await getDocs(q);
  
      // Map and return the data from the filtered documents
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return products; // Return filtered products
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
