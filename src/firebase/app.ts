
import { initializeApp, getApp, getApps } from 'firebase/app';
import { firebaseConfig } from './config';

const setupFirebase = () => {
  if (getApps.length) return getApp();
  return initializeApp(firebaseConfig);
};

export const app = setupFirebase();
