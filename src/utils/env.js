import { Platform } from "react-native";

const liveHost = `${process.env.REACT_APP_FIREBASE_URL}`;
const localHost = "http://localhost:5001/mealstogo-611e8/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
