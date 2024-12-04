import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewState = async ({ data, image }) => {
  if (!image) {
    throw new Error("Image is required");
  }
  if (!data?.name) {
    throw new Error("Name is required");
  }
 

  const newId = doc(collection(db, `ids`)).id;

  const imageRef = ref(storage, `states/${newId}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);

  await setDoc(doc(db, `states/${newId}`), {
    ...data,
    id: newId,
    image: imageUrl,
    timestampCreate: Timestamp.now(),
  });
};


export const updateState = async ({ data, image }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.id) {
    throw new Error("ID is required");
  }
 

  const id = data?.id;

   let imageURL = data?.image;

   if(image){
    const imageRef = ref(storage, `states/${id}`);
    await uploadBytes(imageRef, image);
    imageURL = await getDownloadURL(imageRef);

   }
 
  await updateDoc(doc(db, `states/${id}`), {
    ...data,
    image: imageURL,
    timestampUpdate: Timestamp.now(),
  });
};

export const deleteState = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }

  await deleteDoc(doc(db, `states/${id}`));
};
