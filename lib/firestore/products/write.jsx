import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage,db } from "/lib//firebase";
import {
    collection,
    deleteDoc,
    doc,
    setDoc,
    Timestamp,
    updateDoc,
  } from "firebase/firestore";

export const createNewProduct = async ({ data, featureImage, imageList }) => {
  if (!data?.title) {
    throw new Error("Title is required");
  }

  if (!featureImage) {
    throw new Error("featureImage is required");
  }

  const featureImageRef = ref(storage, `products/${data.title}`);
  await uploadBytes(featureImageRef, featureImage);

  const featureImageUrl = await getDownloadURL(featureImageRef);

  let imageURLList = [];

  for (let i = 0; i < imageList?.length; i++) {
      const image = imageList[i];
      const imageRef = ref(storage, `products/${data.title}/${i}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      imageURLList.push(imageUrl)
  }
  
  const newId = doc(collection(db, `ids`)).id;

  await setDoc(doc(db,`products/${newId}`),{
    ...data,
    id: newId,
    featureImageUrl: featureImageUrl,
    imageList: imageURLList,
    timestampCreate: Timestamp.now(),
  })
};


export const deleteProduct = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }

  await deleteDoc(doc(db, `products/${id}`));
};