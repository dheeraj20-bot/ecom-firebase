import { collection, deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
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

  const newId = doc(collection(db, `ids`)).id;

  const imageRef = ref(storage, `categories/${newId}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);

  await setDoc(doc(db, `categories/${newId}`), {
    ...data,
    id: newId,
    image: imageUrl,
    timestampCreate: Timestamp.now(),
  });
};


export const deleteCategory = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }
 
  await deleteDoc(doc(db, `categories/${id}`));
};
