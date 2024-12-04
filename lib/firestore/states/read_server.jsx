import { doc, getDoc } from "firebase/firestore"
import { db } from "/lib/firebase";


export const getState = async({id}) =>{
    // console.log(id);
    const data = await getDoc(doc(db,`states/${id}`));

    if(data.exists()){
          return data.data();
    } else{
        return null;
    }
}