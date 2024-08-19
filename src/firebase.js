import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPooUo9GmqRKjT4cVAMqLPCYjvTc_l4gc",
  authDomain: "yt-clone-995.firebaseapp.com",
  projectId: "yt-clone-995",
  storageBucket: "yt-clone-995.appspot.com",
  messagingSenderId: "771305617473",
  appId: "1:771305617473:web:af6729f1f81f7099ec2ec0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
