import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { _STORAGE_PREFIX } from "./environment";

const firebaseConfig = {
    apiKey: "AIzaSyDedtj9Xv8HUdvszVwuPbgIJmci_pCdkFw",
    authDomain: "openui-35be6.firebaseapp.com",
    projectId: "openui-35be6",
    storageBucket: "openui-35be6.appspot.com",
    messagingSenderId: "975993131867",
    appId: "1:975993131867:web:3858d681d504795ac3807e"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function firebaseUploadFile(file) {
    try {
        const filename = file.name.split(' ').join('_') + '_' + Date.now();
        const storageRef = ref(storage, _STORAGE_PREFIX + '/' + filename);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        return url;
    } catch(e) {
        throw new Error(e);
    }
}