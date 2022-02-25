import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBlQvq5Jc2oIRkc_Rl_R8w7SiGIFkI1KC8",
  authDomain: "mealstogo-611e8.firebaseapp.com",
  projectId: "mealstogo-611e8",
  storageBucket: "mealstogo-611e8.appspot.com",
  messagingSenderId: "431118819944",
  appId: "1:431118819944:web:0b97dbdf890fc6ac6dd1dd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "mo@binni.io", "test123")
        .then((user) => {
          console.log("********", user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.error(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
