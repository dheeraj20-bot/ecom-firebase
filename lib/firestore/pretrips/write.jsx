import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "/lib//firebase";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

export const createNewPreTrip = async ({ data, featureImage, imageList }) => {
  if (!data?.tripName) {
    throw new Error("Trip Name is required");
  }

  if (!featureImage) {
    throw new Error("featureImage is required");
  }

  const featureImageRef = ref(storage, `pretrips/${data.tripName}`);
  await uploadBytes(featureImageRef, featureImage);

  const featureImageUrl = await getDownloadURL(featureImageRef);

  let imageURLList = [];

  for (let i = 0; i < imageList?.length; i++) {
    const image = imageList[i];
    const imageRef = ref(storage, `pretrips/${data.tripName}/${i}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);
    imageURLList.push(imageUrl);
  }

  const newId = doc(collection(db, `ids`)).id;

  await setDoc(doc(db, `pretrips/${newId}`), {
    ...data,
    id: newId,
    featureImageUrl: featureImageUrl,
    imageList: imageURLList,
    timestampCreate: Timestamp.now(),
  });
};

export const updatePreTrip = async ({ data, featureImage, imageList }) => {
  if (!data?.tripName) {
    throw new Error("Trip Name is required");
  }
  if (!data?.id) {
    throw new Error("Trip Name is required");
  }

  let featureImageUrl = data?.featureImageUrl ?? "";

  if (featureImage) {
    const featureImageRef = ref(storage, `pretrips/${data.tripName}`);
    await uploadBytes(featureImageRef, featureImage);
    featureImageUrl = await getDownloadURL(featureImageRef);
  }

  let imageURLList = imageList?.length ===0 ? data?.imageList : [];

  for (let i = 0; i < imageList?.length; i++) {
    const image = imageList[i];
    const imageRef = ref(storage, `pretrips/${data.tripName}/${i}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);
    imageURLList.push(imageUrl);
  }


  await setDoc(doc(db, `pretrips/${data?.id}`), {
    ...data,
    featureImageUrl: featureImageUrl,
    imageList: imageURLList,
    timestampUpdate: Timestamp.now(),
  });
};

export const deletePreTrip = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }

  await deleteDoc(doc(db, `pretrips/${id}`));
};
