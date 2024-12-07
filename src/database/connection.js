import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsrEQAcx7C9eMSdodznRxFCNK0ys5p7Xc",
    authDomain: "react-nasce.firebaseapp.com",
    projectId: "react-nasce",
    storageBucket: "react-nasce.firebasestorage.app",
    messagingSenderId: "463453146600",
    appId: "1:463453146600:web:3716bf5d39f315d0c2685d",
    measurementId: "G-6P86PSRM33"
};
  
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);