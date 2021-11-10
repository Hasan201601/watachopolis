import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeApplication = () => {
    return initializeApp(firebaseConfig)
}
export default initializeApplication