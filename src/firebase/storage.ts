import { getStorage } from 'firebase/storage';
import { app } from './app';

export const storage = getStorage(app);

export {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from 'firebase/storage';
