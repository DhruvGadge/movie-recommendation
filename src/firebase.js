import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVo5rcOhNe0NYMTJBSW9skA4N_BVnxnOI",
    authDomain: "movierecommendationapp-69a86.firebaseapp.com",
    projectId: "movierecommendationapp-69a86",
    storageBucket: "movierecommendationapp-69a86.firebasestorage.app",
    messagingSenderId: "495172190804",
    appId: "1:495172190804:web:673ef7cd099e65e30863c1",
    measurementId: "G-9Y2DZJPLJC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Important for consistent behavior
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export { auth, googleProvider, signInWithPopup };