const liveHost = `${process.env.REACT_APP_FIREBASE_URL}`;
const localHost = "http://localhost:5001/mealstogo-611e8/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;

console.log(process.env.REACT_APP_FIREBASE_URL);
