import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeApplication = () => {
    initializeApp(firebaseConfig)
}
export default initializeApplication;