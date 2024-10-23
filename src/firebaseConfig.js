import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7XcexDPrGwSkRPmuVN_yHTEaxYTe5Ixo",
    authDomain: "hni-quiz.firebaseapp.com",
    projectId: "hni-quiz",
    storageBucket: "hni-quiz.appspot.com",
    messagingSenderId: "414929099966",
    appId: "1:414929099966:web:d6b1dbe57f97ee519cd2ef",
    measurementId: "G-TJ3ZJR02P1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
