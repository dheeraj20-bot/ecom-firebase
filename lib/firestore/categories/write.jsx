import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
// @ts-ignore
import { db, storage } from "/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async ({ data, image }) => {
  if (!image) {
    throw new Error("Image is required");
  }
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.slug) {
    throw new Error("Slug is required");
  }

  console.log("data taken ", Timestamp.now());


  const newId = doc(collection(db, `ids`)).id;
  console.log(newId);
  
  const imageRef = ref(storage, `categories/${newId}`);
  console.log(imageRef);
  
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);
   
  console.log("Hey Imageref here :-:" ,imageUrl)
 

   try {
    const res = await setDoc(doc(db, `categories/${newId}`), {
      ...data,
      id: newId,
      image: imageUrl,
      timestampCreate: Timestamp.now(),
    });
    console.log(res);
    
   } catch (error) {
        console.log(error); 
   }
  

  
  
};


export const updateCategory = async ({ data, image }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.id) {
    throw new Error("ID is required");
  }
  if (!data?.slug) {
    throw new Error("Slug is required");
  }

  const id = data?.id;

   let imageURL = data?.image;

   if(image){
    const imageRef = ref(storage, `categories/${id}`);
    await uploadBytes(imageRef, image);
    imageURL = await getDownloadURL(imageRef);

   }
 
  await updateDoc(doc(db, `categories/${id}`), {
    ...data,
    image: imageURL,
    timestampUpdate: Timestamp.now(),
  });
};

export const deleteCategory = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }

  await deleteDoc(doc(db, `categories/${id}`));
};
