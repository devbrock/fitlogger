import * as firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGE_SENDER_ID,
//   appId: process.env.APP_ID
// });

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVw6slLRuURdtqlKMwEUcQjqtnOibQWGQ",
  authDomain: "fitlogger-2c5d3.firebaseapp.com",
  databaseURL: "https://fitlogger-2c5d3.firebaseio.com",
  projectId: "fitlogger-2c5d3",
  storageBucket: "fitlogger-2c5d3.appspot.com",
  messagingSenderId: "422838043178",
  appId: "1:422838043178:web:f8e5ca91a0f4c4aea67953"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
