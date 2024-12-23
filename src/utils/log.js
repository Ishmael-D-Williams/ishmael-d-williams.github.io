import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA17ZliDsjlmFmQ4g4zJAcxoKcGOAgvFGs',
  authDomain: 'portfolio-1668f.firebaseapp.com',
  projectId: 'portfolio-1668f',
  storageBucket: 'portfolio-1668f.firebasestorage.app',
  messagingSenderId: '475494627350',
  appId: '1:475494627350:web:a8d7d482935aab27379d37',
  measurementId: 'G-4NPZ1BGD4D',
};
const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
