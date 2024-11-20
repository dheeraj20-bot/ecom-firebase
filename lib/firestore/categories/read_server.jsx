import { doc, getDoc } from "firebase/firestore"
import { db } from "/lib/firebase";


export const getCategory = async({id}) =>{
    // console.log(id);
    const data = await getDoc(doc(db,`categories/${id}`));

    if(data.exists()){
          return data.data();
    } else{
        return null;
    }
}