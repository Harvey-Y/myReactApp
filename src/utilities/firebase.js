// Import the functions you need from the SDKs you need
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAB4BwztESgcRukxC7TvXxj8ZvLqZvIGzs",
  authDomain: "myreactapp-3a531.firebaseapp.com",
  databaseURL: "https://myreactapp-3a531-default-rtdb.firebaseio.com",
  projectId: "myreactapp-3a531",
  storageBucket: "myreactapp-3a531.appspot.com",
  messagingSenderId: "775185122738",
  appId: "1:775185122738:web:2bb9a9b02185b468afd0ab",
  measurementId: "G-FZ0MQ8735M"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};