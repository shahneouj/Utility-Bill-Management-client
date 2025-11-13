import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCredential.user);

      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      // console.log(userCredential);

      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };
  const googleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      // console.log(userCredential);

      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  const authinfo = {
    login,
    logout,
    user,
    createUser,
    setUser,
    updateUser,
    loader,
    googleLogin,
  };

  return (
    <>
      <AuthContext value={authinfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
