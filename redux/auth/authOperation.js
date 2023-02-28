import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import { auth } from "../../firebase/config";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { refreshState } from "./authReducer";

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ email, password, login }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      //   const compliteSignUp = await auth.currentUser;
      //   return compliteSignUp;
      return { user: user, displayName: login };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/update",
  async (data, { rejectWithValue }) => {
    try {
      const user = await updateProfile(auth.currentUser, data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authState = createAsyncThunk(
  "user/authstate",
  async (_, { rejectWithValue }) => {
    const dispatch = useDispatch();
    try {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          return;
        }

        const userData = {
          accessToken: user.accessToken,
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        dispatch(refreshState(_, userData));
      });

      //
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSignOut = createAsyncThunk(
  "user/signout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
