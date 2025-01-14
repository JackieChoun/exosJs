
  const firebaseConfig = {
    apiKey: "AIzaSyAaPRkHahw2KHCEexF5kyIW-VVRBKUdlPI",
    authDomain: "premier-projet-6496c.firebaseapp.com",
    projectId: "premier-projet-6496c",
    storageBucket: "premier-projet-6496c.firebasestorage.app",
    messagingSenderId: "942590216174",
    appId: "1:942590216174:web:e339214e254d363ffa30ff",
    measurementId: "G-F2XWJ2W45Q"
  };

  /**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");
  