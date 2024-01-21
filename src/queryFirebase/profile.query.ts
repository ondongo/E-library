import { updateDoc } from "firebase/firestore";

const getFirestore = () => import("../firebase/firestore");
const getAuth = () => import("../firebase/auth");
const getStorage = () => import("../firebase/storage");

function timestamped(fileName: string) {
  return `${new Date().valueOf()}${fileName}`;
}

export async function updateUserInfo(
  uid: string,
  avatarURL: string,
  avatarPATH: string
) {
  const { setDoc, doc, db } = await getFirestore();
  const docRef = doc(db, "users", uid);

  const data = {
    avatarURL: avatarURL,
    avatarPATH: avatarPATH,
  };

  return await updateDoc(docRef, data);
}

/* export async function getUserInfo(data: any) {
  const { getDoc, doc, db } = await getFirestore();
  const docRef = doc(db, "users", data.id);
  return await getDoc(docRef);
} */

export async function addProfilePhoto(file: File) {
  const { ref, uploadBytes, storage, getDownloadURL } = await getStorage();
  let imageRef = ref(storage, `profileImages/${timestamped(file.name)}`);
  let imagePath = imageRef.fullPath;
  await uploadBytes(imageRef, file);
  const imageUrl = await getDownloadURL(imageRef);
  return [imageUrl, imagePath];
}

export async function deleteProfilePhoto(avatarPATH: string) {
  const { ref, deleteObject, storage } = await getStorage();
  let imageRef = ref(storage, avatarPATH);
  return await deleteObject(imageRef);
}
