import { doc, getDoc } from "firebase/firestore"
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