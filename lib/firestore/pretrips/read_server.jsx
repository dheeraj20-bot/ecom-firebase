import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
// @ts-ignore
import { db } from "/lib/firebase";


export const getProduct = async({id}) =>{
    const data = await getDoc(doc(db,`pretrips/${id}`));

    if(data.exists()){
          return data.data();
    } else{
        return null;
    }
}


